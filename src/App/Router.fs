module Router

open Fable.React.Props
open Elmish.Navigation
open Elmish.UrlParser
open Browser

let inline (</>) a b = a + "/" + string b

type Page =
    | Reset
    | Home
    | LoadGist of string option

let private toHash page =
    let segmentsPart =
        match page with
        | Reset -> "reset"
        | LoadGist (Some gist) -> "?gist="+gist
        | Home | LoadGist None -> ""


    "#" + segmentsPart

let pageParser: Parser<Page->Page,Page> =
    oneOf [
        map Reset (s "reset")
        map LoadGist (top <?> stringParam "gist")
        map Home top ]

let href route =
    Href (toHash route)

let modifyUrl route =
    route |> toHash |> Navigation.modifyUrl

let newUrl route =
    route |> toHash |> Navigation.newUrl

let modifyLocation route =
    window.location.href <- toHash route
