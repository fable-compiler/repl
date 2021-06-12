module Toast

open Fable.FontAwesome
open Thoth.Elmish
open Feliz
open Feliz.Bulma

let renderToastWithFulma =
    { new Toast.IRenderer<_> with
        member __.Toast children color =
            Bulma.notification [
                prop.className color
                prop.children children
            ]

        member __.CloseButton onClick =
            Bulma.delete [
                prop.onClick onClick
            ]

        member __.Title txt =
            Bulma.title.h5 [
                prop.text txt
            ]

        member __.Icon icon =
            Bulma.icon [
                prop.className "is-medium"
                prop.children [
                    Fa.i [ icon; Fa.Size Fa.Fa2x ] []
                ]
            ]

        member __.SingleLayout title message =
            Html.div [
                title
                message
            ]

        member __.Message txt =
            Html.span [
                prop.text txt
            ]
            
        member __.SplittedLayout iconView title message =
            Bulma.columns [
                columns.isGapless
                columns.isVCentered
                prop.children [
                    Bulma.column [
                        column.is2
                        prop.children iconView
                    ]

                    Bulma.column [
                        title
                        message
                    ]
                ]
            ]

        member __.StatusToColor status =
            match status with
            | Toast.Success -> "is-success"
            | Toast.Warning -> "is-warning"
            | Toast.Error -> "is-danger"
            | Toast.Info -> "is-info" }
