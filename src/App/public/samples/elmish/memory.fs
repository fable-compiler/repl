module Elmish.Memory

(**
 Classic Memory game, by Zaid Ajaj.
 You can find more info about Emish architecture and samples at https://elmish.github.io/
*)

open Fable.React
open Fable.React.Props
open Browser
open Elmish
open Elmish.React

// Types
type Card = {
    Id : int
    ImgUrl : string
    Selected : bool
    MatchFound : bool
}

type Model = {
    Cards : Card list
    FirstSelection : int option
    SecondSelection : int option
}

type Actions =
    | SelectCard of int
    | StartNewGame
    | NoOp

// State
let random = new System.Random()

let origin =
    // Sample is running in an iframe, so get the location of parent
    let topLocation = window.top.location
    topLocation.origin + topLocation.pathname

let getCards() =
    let images = [ "violin"; "electric-guitar"; "headphones"; "piano"; "saxophone";  "trumpet";"turntable";"bass-guitar" ]
    images
    |> List.append images
    |> List.sortBy (fun img -> random.Next())
    |> List.map (sprintf "%simg/memory/%s.png" origin)
    |> List.mapi (fun index img -> { Id = index; ImgUrl = img; Selected = false; MatchFound = false})

let initialModel() = {
    Cards = getCards()
    FirstSelection = None
    SecondSelection = None
}

let cardsEqual id1 id2 (cards: Card list) =
    let card1 = cards |> List.find (fun c -> c.Id = id1)
    let card2 = cards |> List.find (fun c -> c.Id = id2)
    card1.ImgUrl = card2.ImgUrl

let cardSelected id (cards: Card list) =
    let card = List.find (fun c -> c.Id = id) cards
    card.Selected

let gameCleared (model: Model) =
    List.forall (fun card -> card.MatchFound) model.Cards

let update action model  =
    match action with
    | StartNewGame -> initialModel()
    | SelectCard index ->
        match model.FirstSelection, model.SecondSelection with
        | None, None ->
            let cards =
                model.Cards
                |> List.map (fun card ->
                    if card.Id = index
                    then { card with Selected = true }
                    else card)
            { model with Cards = cards; FirstSelection = Some index }
        | Some id, None when id = index -> model
        | Some id, None when cardsEqual id index (model.Cards) ->
            let cards =
                model.Cards
                |> List.map (fun card ->
                    if card.Id = index || card.Id = id
                    then { card with Selected = true; MatchFound = true }
                    else card)
            { model with Cards = cards; FirstSelection = None; SecondSelection = None }
        | Some id, None when id <> index ->
            let cards =
                model.Cards
                |> List.map (fun card ->
                    if card.Id = index
                    then { card with Selected = true }
                    else card)
            { Cards = cards; FirstSelection = Some id; SecondSelection = Some index }
        | Some id, Some id' when cardsEqual id' index (model.Cards) ->
            let cards =
                model.Cards
                |> List.map (fun card ->
                    if (card.Id = id && not card.MatchFound)
                    then { card with Selected = false }
                    elif (card.Id = id' || card.Id = index)
                    then { card with Selected = true; MatchFound = true }
                    else card)
            { model with Cards = cards; FirstSelection = None; SecondSelection = None }
        | Some id, Some id' ->
            let cards =
                model.Cards
                 |> List.map (fun card ->
                      if (card.Id = id || card.Id = id') && not card.MatchFound
                      then { card with Selected = false }
                      elif card.Id = index
                      then { card with Selected = true }
                      else card
                 )
            { Cards = cards; FirstSelection = Some index; SecondSelection = None }
        | _, _ -> failwith "Cannot happen :)"
    | NoOp -> model

// View
let cardClicked (card: Card) dispatch  =
   if not (card.MatchFound) && not (card.Selected)
   then dispatch (SelectCard card.Id)
   else dispatch (NoOp)

let viewCard (card: Card) dispatch =
    div
      [ classList [ "card-container", true; "match-found", card.MatchFound]
        OnClick (fun _ -> cardClicked card dispatch) ]
      [ img [ Src (if card.Selected then card.ImgUrl else origin + "img/memory/fable.jpg") ] ]

let view model dispatch =
    if gameCleared model then
        h1
          [ Class "winner centered"
            Style [ Padding 20; Width "500px" ]
            OnClick (fun _ -> dispatch StartNewGame ) ]
          [ str "You win, Click me to play again" ]
    else
        div [ Class "container centered"
              Style [ Width "500px" ] ]
            [ for card in model.Cards -> viewCard card dispatch ]

// App
Program.mkSimple initialModel update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run