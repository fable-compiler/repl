module Widgets.About

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma
open Fable.Repl.Prelude

let view =
    Content.content [ ]
        [ str ("Version: " + Literals.VERSION)
          br [ ]
          a [ Href "https://github.com/fable-compiler/repl2/issues/new" ]
            [ Text.span [ Modifiers [ Modifier.TextTransform TextTransform.Italic ]
                          Props [ Style [ TextDecoration "underline" ] ] ]
                [ str "Found a bug ?" ] ] ]
