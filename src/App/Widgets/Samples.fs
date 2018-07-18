module Widgets.Samples

open Thoth.Json
open Fulma
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma.FontAwesome
open Fable.Core.JsInterop
open Fable.PowerPack

  /////////////////////
 // Sample def DSL  //
/////////////////////

let sampleJson : obj = importDefault "./samples.json"

type HtmlCodeInfo =
    | Default
    | Url of string

let decodeHtmlCode =
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
      HtmlCode : HtmlCodeInfo }

and MenuType =
    | Category of CategoryInfo
    | SubCategory of SubCategory
    | MenuItem of MenuItemInfo

    static member DecodeMenuItem =
        Decode.object (fun get ->
            MenuItem
                { Label = get.Required.Field "label" Decode.string
                  FSharpCode = get.Required.Field "fsharpCode" Decode.string
                  HtmlCode = get.Required.Field "htmlCode" decodeHtmlCode } )

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
    | ToggleMenuState of int list
    | FetchSample of string * HtmlCodeInfo
    | FetchCodeSuccess of string * string
    | FetchCodeError of exn

type ExternalMsg =
    | NoOp
    | LoadSample of FSharpCode : string * HtmlCode : string

let init _ =
    match Decode.fromValue "$" decodeSampleJson sampleJson with
    | Ok infos ->
        { MenuInfos = infos }
    | Error error ->
        failwith error

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

let getCodeFromUrl (fsharpUrl, htmlInfo) =
    promise {
        let url = "" + fsharpUrl
        let! fsharpRes = Fetch.fetch url []
        let! fsharpCode = fsharpRes.text()

        match htmlInfo with
        | Default ->
            return fsharpCode, Generator.defaultHtmlCode
        | Url url ->
            let! htmlRes = Fetch.fetch ("" + url) []
            let! htmlCode = htmlRes.text()
            return fsharpCode, htmlCode
    }

let update msg model =
    match msg with
    | ToggleMenuState path ->
        let newMenuInfos = updateSubCategoryState path model.MenuInfos
        { model with MenuInfos = newMenuInfos }, Cmd.none, NoOp
    | FetchSample (fsharpUrl, htmlInfo) ->
        model, Cmd.ofPromise getCodeFromUrl (fsharpUrl, htmlInfo) FetchCodeSuccess FetchCodeError, NoOp

    | FetchCodeSuccess (fsharpCode, htmlCode) ->
        model, Cmd.none, LoadSample (fsharpCode, htmlCode)

    | FetchCodeError error ->
        Fable.Import.Browser.console.error error
        model, Cmd.none, NoOp

let inline genKey key = Props [ Key key ]

let private menuItem info dispatch =
    li [ ]
       [ a [ OnClick (fun _ -> FetchSample (info.FSharpCode, info.HtmlCode) |> dispatch ) ]
           [ span [ ]
                [ str info.Label ] ] ]

let private subMenu label currentPath isActive children dispatch =
    let children =
        if isActive then
            Some (ul [ ] children)
        else
            None

    li [ ]
       [ a [ ClassName "menu-group"
             OnClick (fun _ -> ToggleMenuState currentPath |> dispatch ) ]
           [ span [ ] [ str label ]
             Icon.faIcon [ ]
                [ Fa.faLg
                  Fa.icon Fa.I.AngleDown ] ]
         ofOption children ]

let rec private render (path : int list) index (sample : MenuType) dispatch =
    // Generate the unique key from the parentKey and current index
    let currentPath = path @ [index]

    let renderCategory (info : CategoryInfo) =
        [ Menu.label [ genKey "label" ]
            [ str info.Label ]
          Menu.list [ genKey "list" ]
            (info.Children
                |> List.mapi (fun index child ->
                    render currentPath index child dispatch)) ]
        |> ofList

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
    Menu.menu [ ]
        (model.MenuInfos
            |> List.mapi (fun index sample ->
                render [] index sample dispatch))
