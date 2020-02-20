module Widgets.About

open Fable.React
open Fable.React.Props
open Fulma
open Fable.Repl.Prelude

let view =
    Content.content [ ]
        [ div [ ]
            [ str ("REPL: " + Literals.REPL_VERSION) ]
          div [ ]
            [ str ("Fable: " + Literals.FABLE_VERSION) ]
          br [ ]
          a [ Href "https://github.com/fable-compiler/repl2/issues/new" ]
            [ Text.span [ Modifiers [ Modifier.TextTransform TextTransform.Italic ]
                          Props [ Style [ TextDecoration "underline" ] ] ]
                [ str "Found a bug ?" ] ] ]
