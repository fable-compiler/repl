module Widgets.About

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma

let [<Literal>] VERSION = "2.0.0-alpha-030"

let view =
    Content.content [ ]
        [ str ("Version: " + VERSION)
          br [ ]
          a [ Href "https://github.com/fable-compiler/repl/issues/new" ] [ str "Found a bug ?" ] ]
