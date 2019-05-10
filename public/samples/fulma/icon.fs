// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.IconSample

open Fable.React
open Fable.React.Props
open Fulma

let icon () =
    div [ Class "block" ]
        [ Icon.icon [ Icon.Size IsSmall ]
            [ i [ Class "fa fa-home" ] [ ] ]
          Icon.icon [ ]
            [ i [ Class "fa fa-lg fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsMedium ]
            [ i [ Class "fa fa-2x fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsLarge ]
            [ i [ Class "fa fa-3x fa-home" ] [ ] ] ]

//Display modification of container size with Bulma options
let containerSizes () =
    div [ Class "block" ]
        [ //faIcon creates one Fulma icon element containing one Font Awesome icon
          Icon.icon [ // First group of Options: Usual fulma properties available: size, class
                        // Icon container size set to small in Fulma
                        Icon.Size IsSmall;
                        // Custom class to set background color to yellow to display container
                        Icon.CustomClass "icon-size" ]
                        //Second group of Options: Font Awesome options
                        [ //Display one Font Awesome Icon available in the Fa.I namespace
                          i [ Class "fas fa-home" ] [] ]
          Icon.icon [ //No setting for Icon container size = Normal size
                        //...
                        Icon.CustomClass "icon-size" ]
                      [ i [ Class "fas fa-home" ] [] ]
          Icon.icon [ Icon.Size IsMedium
                      Icon.CustomClass "icon-size" ]
                        //Makes the Icon 33% larger
                    [ i [ Class "fas fa-home fa-lg" ] [] ]
          Icon.icon [ Icon.Size IsLarge
                      Icon.CustomClass "icon-size" ]
                    //Makes the Icon 2x times larger
                    [ i [ Class "fas fa-home fa-2x" ] [] ] ]

//Diplay Font Awesome Rotation & Flip
// let iconRotationFlip () =
//     div [ Class "block" ]
//         [ ul [ ]
//              [ li [ ]
//                   [ Icon.icon [ Icon.Size IsMedium ]
//                                 [ Fa.icon Fa.I.Shield
//                                   Fa.faLg  ]
//                     str "No Rotation" ]
//                li [ ]
//                   [ Icon.icon [ Icon.Size IsMedium ]
//                                 [ Fa.icon Fa.I.Shield
//                                   //Rotate 90 degrees
//                                   Fa.rotate90
//                                   //Large icon
//                                   Fa.faLg  ]
//                     str "90 degrees rotation" ]
//                li [ ]
//                   [ Icon.icon [ Icon.Size IsMedium ]
//                                 [ Fa.icon Fa.I.Shield
//                                   //Rotation 180 degrees
//                                   Fa.rotate180
//                                   Fa.faLg ]
//                     str "180 degrees rotation" ]
//                li [ ]
//                   [ Icon.icon [ Icon.Size IsMedium ]
//                                 [ Fa.icon Fa.I.Shield
//                                   //Flip Horizontal
//                                   Fa.flipHorizontal
//                                   Fa.faLg ]
//                     str "Horizontal flip" ]
//                li [ ]
//                   [ Icon.icon [ Icon.Size IsMedium ]
//                                 [ Fa.icon Fa.I.Shield
//                                   //Flip Vertical
//                                   Fa.flipVertical
//                                   Fa.faLg ]
//                     str "Vertical flip" ] ] ]

// //Display Font Awesome Animations
// let iconAnimations () =
//     div [ Class "block" ]
//         [ ul [ ]
//              [ li [ ]
//                   [ Icon.icon [ Icon.Size IsLarge ]
//                                 [ //Animations work well on Spinner
//                                   Fa.icon Fa.I.Spinner
//                                   //Pulse Animation
//                                   Fa.pulse
//                                   //Icon 2x times larger
//                                   Fa.fa2x ]
//                     str "Pulse animation" ]
//                li [ ]
//                   [ Icon.icon [ Icon.Size IsLarge ]
//                                 [ //Animations work well wit Cog
//                                   Fa.icon Fa.I.Cog
//                                   //Spin animation
//                                   Fa.spin
//                                   //Icon 2x times larger
//                                   Fa.fa2x ]
//                     str "Spin animation" ] ] ]

// //Stacked Icons
// let stackedIcons () =
//     div [ Class "block" ]
//         [ ul [ ]
//              [ li [ ]
//                   [ Icon.stackParent [ Fa.Parent.faLg ]
//                                      [ Icon.stackChild [ Fa.Child.faStack2x; Fa.Child.icon Fa.I.SquareO ]
//                                        Icon.stackChild [ Fa.Child.faStack1x; Fa.Child.icon Fa.I.Twitter ] ]
//                     str "Twitter logo over a square with round corners" ]
//                li [ ]
//                   [ Icon.stackParent [ Fa.Parent.faLg ]
//                                      [ Icon.stackChild [ Fa.Child.faStack2x; Fa.Child.icon Fa.I.Circle ]
//                                        Icon.stackChild [ Fa.Child.faStack1x; Fa.Child.icon Fa.I.Flag; Fa.Child.colorInverse ] ]
//                     str "One flag with inversed color over a circle" ] ] ]

// //Display Font Awesome Icon List
// let iconList () =
//     div [ Class "block" ]
//         [ // fa_ul creates an unordered list with icons instead of the classic bullet points
//           Icon.fa_ul [ ]
//             [ li [ ]
//                 [ Icon.icon [ ]
//                               [ Fa.icon Fa.I.CheckSquare
//                                 Fa.isLi ]
//                   str "Item done" ]
//               li [ ]
//                 [ Icon.icon [ ]
//                               [ Fa.icon Fa.I.Spinner
//                                 Fa.spin
//                                 Fa.isLi ]
//                   str "Item processing" ] ] ]

// let borderPulledIcons () =
//     div [ Class "block" ]
//         [ span [ ]
//                [ Icon.icon [ ]
//                              [ Fa.icon Fa.I.QuoteLeft
//                                Fa.pullLeft
//                                Fa.border ]
//                  str "...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.\
//                      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\
//                      Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.\
//                      Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.." ] ]

// let fontAwesomeIcons () =
//     div [ Class "block" ]
//         [ Icon.icon [ Icon.Size IsSmall ] [ i [ Class "fas fa-home" ] [] ]
//           Icon.icon [ ] [ Fa.icon Fa.I.Tags; Fa.faLg ]
//           Icon.icon [ Icon.Size IsMedium ] [ Fa.icon Fa.I.``500px``; Fa.fa2x ]
//           Icon.icon [ Icon.Size IsLarge ] [ Fa.icon Fa.I.Android; Fa.fa3x ] ]

// let composeButtons () =
//     div [ Class "block" ]
//         [ Button.button [ Button.Color IsDanger ]
//                         [ Icon.icon [ ]
//                                       [ Fa.icon Fa.I.Trash; Fa.faLg ]
//                           span [] [ str "  Delete" ] ]
//           Button.button [ Button.Color IsInfo ]
//                         [ Icon.icon [ ]
//                                       [ Fa.icon Fa.I.User; Fa.fw ]
//                           span [] [ str "User" ] ] ]

div [] [
    Card.card [] [Card.content [] [icon()] ]
    Card.card [] [Card.content [] [containerSizes()] ]
    // Card.card [] [Card.content [] [iconRotationFlip()] ]
    // Card.card [] [Card.content [] [iconAnimations()] ]
    // Card.card [] [Card.content [] [stackedIcons()] ]
    // Card.card [] [Card.content [] [iconList()] ]
    // Card.card [] [Card.content [] [borderPulledIcons()] ]
    // Card.card [] [Card.content [] [fontAwesomeIcons()] ]
    // Card.card [] [Card.content [] [composeButtons()] ]
] |> mountById "elmish-app"
