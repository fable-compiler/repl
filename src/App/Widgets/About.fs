module Widgets.About

open Feliz
open Feliz.Bulma
open Fable.Repl.Prelude

let view =
    Bulma.content [
        Html.div ("REPL: " + Literals.REPL_VERSION)
        Html.div ("Fable: " + Literals.FABLE_VERSION)
        Html.br [ ]
        Html.a [
            prop.href "https://github.com/fable-compiler/repl2/issues/new"
            prop.children [
                Html.span [
                    text.isItalic
                    prop.style [
                        style.textDecoration.underline
                    ]
                    prop.text "Found a bug ?"
                ]
            ]
        ]
    ]
