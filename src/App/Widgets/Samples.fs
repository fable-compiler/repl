module Widgets.Samples

open Fable.Core
open Fable.FontAwesome
open Fable.Repl.Prelude
open Thoth.Json
open Feliz
open Feliz.Bulma

  /////////////////////
 // Sample def DSL  //
/////////////////////

type CodeInfo =
    | Default
    | Url of string

let decodeCodeInfo =
    Decode.string
    |> Decode.andThen (fun code ->
        match code with
        | "default" -> Decode.succeed Default
        | custom -> Decode.succeed (Url custom)
    )

type CategoryInfo =
    { Label : string
      Children : MenuType list }

and SubCategory =
    { Label : string
      Children : MenuType list
      IsExpanded : bool }

and MenuItemInfo =
    { Label : string
      FSharpCode : string
      HtmlCode : CodeInfo
      CssCode : CodeInfo }

and MenuType =
    | Category of CategoryInfo
    | SubCategory of SubCategory
    | MenuItem of MenuItemInfo

    static member DecodeMenuItem =
        Decode.object (fun get ->
            MenuItem
                { Label = get.Required.Field "label" Decode.string
                  FSharpCode = get.Required.Field "fsharpCode" Decode.string
                  HtmlCode = get.Optional.Field "htmlCode" decodeCodeInfo
                                |> Option.defaultValue Default
                  CssCode = get.Optional.Field "cssCode" decodeCodeInfo
                                |> Option.defaultValue Default  } )

    static member DecodeCategory =
        Decode.object (fun get ->
            Category
                { Label = get.Required.Field "label" Decode.string
                  Children = get.Required.Field "children" (Decode.list MenuType.DecodeSampleType) } )

    static member DecodeSubCategory =
        Decode.object (fun get ->
            SubCategory
                { Label = get.Required.Field "label" Decode.string
                  Children = get.Required.Field "children" (Decode.list MenuType.DecodeSampleType)
                  IsExpanded = false } )

    static member DecodeSampleType =
        Decode.field "type" Decode.string
        |> Decode.andThen (fun typ ->
            match typ with
            | "category" ->
                MenuType.DecodeCategory

            | "sub-category" ->
                MenuType.DecodeSubCategory

            | "menu-item" ->
                MenuType.DecodeMenuItem

            | unkown ->
                sprintf "Unkown type `%s` for the sample" unkown
                |> Decode.fail
        )

let decodeSampleJson =
    Decode.list MenuType.DecodeSampleType

  ////////////////////////
 // Classic component  //
////////////////////////

open Elmish

type MenuState = (string * bool) list

type Model =
    { MenuInfos : MenuType list }

type Msg =
    | FetchSamplesSuccess of obj
    | FetchSamplesError of exn
    | ToggleMenuState of int list
    | FetchSample of fsharp : string * html : CodeInfo * css : CodeInfo
    | FetchCodeSuccess of fsharp : string * html : string * css : string
    | FetchCodeError of exn

type ExternalMsg =
    | NoOp
    | LoadSample of FSharpCode : string * HtmlCode : string * CssCode : string

let rec updateSubCategoryState (path : int list) (menus : MenuType list) =
    menus
    |> List.mapi (fun index menu ->
        match path with
        | pathHead::pathTail when index = pathHead ->
            match menu with
            | Category info ->
                let newChildren = updateSubCategoryState pathTail info.Children
                Category { info with Children = newChildren }

            | SubCategory info ->
                let newChildren = updateSubCategoryState pathTail info.Children
                SubCategory { info with Children = newChildren
                                        IsExpanded = not info.IsExpanded }

            | MenuItem _ -> menu // We reach the end of the branch
        | _ ->
            // Not a branch included in the path, do nothing
            menu
    )

let getCodeFromUrl (fsharpUrl, htmlInfo, cssInfo) =
    promise {
        let url = "samples/" + fsharpUrl
        let! fsharpRes = Fetch.fetch url []
        let! fsharpCode = fsharpRes.text()

        let! htmlCode =
            promise {
                match htmlInfo with
                | Default ->
                    return Fable.Repl.Generator.defaultHtmlCode
                | Url url ->
                    let! htmlRes = Fetch.fetch ("samples/" + url) []
                    return! htmlRes.text()
            }

        let! cssCode =
            promise {
                match cssInfo with
                | Default ->
                    return ""
                | Url url ->
                    let! cssRes = Fetch.fetch ("samples/" + url) []
                    return! cssRes.text()
            }

        return fsharpCode, htmlCode, cssCode

    }


let fetchSamples () =
    Fetch.fetch Literals.SAMPLES_JSON_URL []
    |> Promise.bind (fun res -> res.json())

let fetchSamplesCmd () =
    Cmd.OfPromise.either fetchSamples () FetchSamplesSuccess FetchSamplesError

let fetchCodeCmd (fsharpUrl, htmlInfo, cssInfo) =
    Cmd.OfPromise.either getCodeFromUrl (fsharpUrl, htmlInfo, cssInfo) FetchCodeSuccess FetchCodeError

let init () =
    { MenuInfos = [] }, fetchSamplesCmd()

let update msg model =
    match msg with
    | FetchSamplesSuccess sampleJson ->
        match Decode.fromValue "$" decodeSampleJson sampleJson with
        | Ok infos -> { MenuInfos = infos }, Cmd.none, NoOp
        | Error error -> JS.console.error error; model, Cmd.none, NoOp

    | ToggleMenuState path ->
        let newMenuInfos = updateSubCategoryState path model.MenuInfos
        { model with MenuInfos = newMenuInfos }, Cmd.none, NoOp

    | FetchSample (fsharpUrl, htmlInfo, cssInfo) ->
        model, fetchCodeCmd (fsharpUrl, htmlInfo, cssInfo), NoOp

    | FetchCodeSuccess (fsharpCode, htmlCode, cssCode) ->
        model, Cmd.none, LoadSample (fsharpCode, htmlCode, cssCode)

    | FetchSamplesError error
    | FetchCodeError error ->
        JS.console.error error
        model, Cmd.none, NoOp

let private menuItem info dispatch =
    Html.li [
        Html.a [
            prop.onClick (fun _ -> FetchSample (info.FSharpCode, info.HtmlCode, info.CssCode) |> dispatch )
            prop.children [
                Html.span info.Label
            ]
        ]
    ]

let private subMenu (label : string) currentPath isActive (children : ReactElement list) dispatch =
    Html.li [
        Html.a [
            prop.className "menu-group"
            prop.onClick (fun _ -> ToggleMenuState currentPath |> dispatch )
            prop.children [
                Html.span label
                Bulma.icon [
                    Fa.i [ Fa.Solid.AngleDown; Fa.Size Fa.FaLarge ] [ ]
                ]
            ]
        ]

        if isActive then
            Html.ul children
        else
            Html.none
    ]


let rec private render (path : int list) index (sample : MenuType) dispatch =
    // Generate the unique key from the parentKey and current index
    let currentPath = path @ [index]

    let renderCategory (info : CategoryInfo) =
        [
            Bulma.menuLabel [
                prop.key "label"
                prop.text info.Label
            ]

            Bulma.menuList [
                prop.key "list"
                info.Children
                |> List.mapi (fun index child ->
                    render currentPath index child dispatch)
                |> prop.children
            ]
        ]
        |> React.fragment

    match sample with
    | Category info ->
        renderCategory info

    | SubCategory info ->
        subMenu
            info.Label
            currentPath
            info.IsExpanded
            (info.Children
                |> List.mapi (fun index child ->
                    render currentPath index child dispatch))
            dispatch

    | MenuItem info ->
        menuItem info dispatch

let view model dispatch =
    let menus =
        model.MenuInfos |> List.mapi (fun index sample ->
            render [] index sample dispatch)
#if DEBUG
    let fetchSamplesMsg _ =
        fetchSamples () |> Promise.eitherEnd
            (FetchSamplesSuccess >> dispatch)
            (FetchSamplesError >> dispatch)

    let menus =
        let additionalMenu =
            Bulma.field.div [
                field.hasAddons
                prop.children [

                    Bulma.control.div [
                        Bulma.button.a [
                            prop.onClick fetchSamplesMsg
                            prop.children [
                                Bulma.icon [
                                    Fa.i [ Fa.Solid.SyncAlt ] []
                                ]
                            ]
                        ]
                    ]

                    Bulma.control.div [
                        control.isExpanded
                        prop.children [
                            Bulma.button.a [
                                button.isFullWidth
                                prop.className "is-text"

                                prop.onClick fetchSamplesMsg
                                prop.children [
                                    Html.span "Refresh samples"
                                ]
                            ]
                        ]
                    ]

                ]
            ]


        additionalMenu::menus
#endif

    Bulma.menu menus
    