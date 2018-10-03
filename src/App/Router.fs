module Router

open Fable.Import
open Fable.Helpers.React.Props
open Elmish.Browser.Navigation
open Elmish.Browser.UrlParser

type Page =
    | Reset
    | Home
    | Sample of string
    | Gist of id: string

let private toHash page =
    let segmentsPart =
        match page with
        | Reset -> "reset"
        | Home -> ""
        | Sample s -> "sample/" + s
        | Gist s -> "gist/" + s

    "#" + segmentsPart

let pageParser: Parser<Page->Page,Page> =
    oneOf [
        map Reset (s "reset")
        map Home top
        map Sample (s "sample" </> str)
        map Gist (s "gist" </> str)
    ]

let href route =
    Href (toHash route)

let modifyUrl route =
    route |> toHash |> Navigation.modifyUrl

let newUrl route =
    route |> toHash |> Navigation.newUrl

let modifyLocation route =
    Browser.window.location.href <- toHash route
