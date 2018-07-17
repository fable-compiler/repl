module Widgets.About

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma.Elements

let [<Literal>] VERSION = "1.3.14"

let view =
    Content.content [ ]
        [ str ("Version: " + VERSION)
          br [ ]
          a [ Href "https://github.com/fable-compiler/repl/issues/new" ] [ str "Found a bug ?" ] ]
