// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.IconSample

open Fable.React
open Fable.React.Props
open Fulma

let containerSizes () =
  div [ Class "container-sizes" ]
   [ div [ Class "block" ]
        [ Icon.icon [ Icon.Size IsSmall ] // Container size
            [ i [ Class "fas fa-home" ] [ ] ] ]
     div [ Class "block" ]
        [ Icon.icon [ ]
            [ i [ Class "fas fa-home" ] [ ] ]
          Icon.icon [ ]
            [ i [ Class "fas fa-lg fa-home" ] [ ] ] ]
     div [ Class "block" ]
        [ Icon.icon [ Icon.Size IsMedium ]
            [ i [ Class "fas fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsMedium ]
            [ i [ Class "fas fa-lg fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsMedium ]
            [ i [ Class "fas fa-2x fa-home" ] [ ] ] ]
     div [ Class "block" ]
        [ Icon.icon [ Icon.Size IsLarge ]
            [ i [ Class "fas fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsLarge ]
            [ i [ Class "fas fa-lg fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsLarge ]
            [ i [ Class "fas fa-2x fa-home" ] [ ] ]
          Icon.icon [ Icon.Size IsLarge ]
            [ i [ Class "fas fa-3x fa-home" ] [ ] ] ]
   ]

// Diplay Font Awesome Rotation & Flip
let iconRotationFlip () =
    div [ Class "block" ]
        [ ul [ ]
             [ li [ ]
                  [ Icon.icon [ Icon.Size IsMedium ]
                                [ i [ Class "fas fa-shield-alt fa-lg" ] [] ]
                    str "No Rotation" ]
               li [ ]
                  [ Icon.icon [ Icon.Size IsMedium ]
                                [ i [ Class "fas fa-shield-alt fa-lg fa-rotate-90" ] [] ]
                    str "90 degrees rotation" ]
               li [ ]
                  [ Icon.icon [ Icon.Size IsMedium ]
                                [ i [ Class "fas fa-shield-alt fa-lg fa-rotate-180" ] [] ]
                    str "180 degrees rotation" ]
               li [ ]
                  [ Icon.icon [ Icon.Size IsMedium ]
                                [ i [ Class "fas fa-shield-alt fa-lg fa-flip-horizontal" ] [] ]
                    str "Horizontal flip" ]
               li [ ]
                  [ Icon.icon [ Icon.Size IsMedium ]
                                [ i [ Class "fas fa-shield-alt fa-lg fa-flip-vertical" ] [] ]
                    str "Vertical flip" ] ] ]

//Display Font Awesome Animations
let iconAnimations () =
    div [ Class "block" ]
        [ ul [ ]
             [ li [ ]
                  [ Icon.icon [ Icon.Size IsLarge ]
                                [ //Animations work well on Spinner
                                  //Pulse Animation
                                  //Icon 2x times larger
                                  i [ Class "fas fa-spinner fa-2x fa-pulse" ] [] ]
                    str "Pulse animation" ]
               li [ ]
                  [ Icon.icon [ Icon.Size IsLarge ]
                                [ //Animations work well wit Cog
                                  //Spin animation
                                  //Icon 2x times larger
                                  i [ Class "fas fa-cog fa-2x fa-spin" ] [] ]
                    str "Spin animation" ] ] ]

//Stacked Icons
let stackedIcons () =
    div [ Class "block" ]
        [ ul [ ]
             [ li [ ]
                  [ span [ Class "fa-stack fa-lg" ]
                        [ i [ Class "far fa-square fa-stack-2x" ] []
                          i [ Class "fab fa-twitter fa-stack-1x" ] [] ]
                    str "Twitter logo over a square with round corners" ]
               li [ ]
                  [ span [ Class "fa-stack fa-lg" ]
                        [ i [ Class "fas fa-circle fa-stack-2x" ] []
                          i [ Class "fas fa-flag fa-stack-1x fa-inverse" ] [] ]
                    str "One flag with inversed color over a circle" ] ] ]

//Display Font Awesome Icon List
let iconList () =
    div [ Class "block" ]
        [ // fa-ul creates an unordered list with icons instead of the classic bullet points
          ul [ Class "fa-ul" ]
            [ li [ ]
                [ Icon.icon [ ]
                    [ i [ Class "fas fa-check-square"] [] ]
                  str "Item done" ]
              li [ ]
                [ Icon.icon [ ]
                    [ i [ Class "fas fa-spinner fa-spin"] [] ]
                  str "Item processing" ] ] ]

let borderPulledIcons () =
    div [ Class "block" ]
        [ span [ ]
               [ Icon.icon [ ]
                    [ i [ Class "fas fa-quote-left fa-border fa-pull-left"] [] ]
                 str "...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.\
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\
                     Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.\
                     Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.." ] ]

let fontAwesomeIcons () =
    div [ Class "block" ]
        [ Icon.icon [ Icon.Size IsSmall ] [ i [ Class "fas fa-home" ] [] ]
          Icon.icon [ ] [ i [ Class "fas fa-tag fa-lg"] [] ]
          Icon.icon [ Icon.Size IsMedium ] [ i [ Class "fab fa-500px fa-2x"] [] ]
          Icon.icon [ Icon.Size IsLarge ] [ i [ Class "fab fa-android fa-3x"] [] ] ]

let composeButtons () =
    div [ Class "block" ]
        [ Button.button [ Button.Color IsDanger ]
                        [ Icon.icon [ ]
                            [ i [ Class "fas fa-trash fa-lg"] [] ]
                          span [] [ str "  Delete" ] ]
          Button.button [ Button.Color IsInfo ]
                        [ Icon.icon [ ]
                            [ i [ Class "fas fa-user fa-fw"] [] ]
                          span [] [ str "User" ] ] ]

div [] [
    Card.card [] [Card.content [] [containerSizes()] ]
    Card.card [] [Card.content [] [iconRotationFlip()] ]
    Card.card [] [Card.content [] [iconAnimations()] ]
    Card.card [] [Card.content [] [stackedIcons()] ]
    Card.card [] [Card.content [] [iconList()] ]
    Card.card [] [Card.content [] [borderPulledIcons()] ]
    Card.card [] [Card.content[] [fontAwesomeIcons()] ]
    Card.card [] [Card.content [] [composeButtons()] ]
] |> mountById "elmish-app"
