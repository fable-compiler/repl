module Thoth.RandomUser

(**
Small application showing how to use:
- Thoth.Json (https://mangelmaxime.github.io/Thoth/json/v3.html)
- Promise and Fetch APIs
*)

open System
open Fable.Core
open Fable.React
open Fable.React.Props
open Elmish
open Elmish.React
open Thoth.Json

// MODEL
type Gender =
    | Male
    | Female

    static member Decoder =
        Decode.string
        |> Decode.andThen (
            function
            | "male" -> Decode.succeed Male
            | "female" -> Decode.succeed Female
            | invalid -> "`" + invalid + "` isn't a valid value for Gender"
                            |> Decode.fail
        )

type User =
    { Gender : Gender
      FullName : string
      Email : string
      CellPhone : string
      OfficePhone : string
      Age : int
      Birthday : DateTime
      Picture : string }

    static member Decoder =
        // When using Thoth.Json, you are not forced to do a 1 to 1
        // mapping between the JSON format and your types
        // For example, in the next decoder we will access deep information
        // and store it at the "root" of our type
        Decode.object (fun get ->
            // In object decoder, we can execute any F#
            // So for example, we can use temporary variables
            let firstname = get.Required.At [ "name"; "first" ] Decode.string
            let lastname = get.Required.At [ "name"; "last" ] Decode.string

            { Gender = get.Required.Field "gender" Gender.Decoder
              FullName = firstname + " " + lastname
              Email = get.Required.Field "email" Decode.string
              CellPhone = get.Required.Field "cell" Decode.string
              OfficePhone = get.Required.Field "phone" Decode.string
              Age = get.Required.At [ "dob"; "age" ] Decode.int
              Birthday = get.Required.At [ "dob"; "date" ] Decode.datetime
              Picture = get.Required.At [ "picture"; "large" ] Decode.string }
        )

type Model =
    /// Loading state
    /// If user is None, then it's the initial loading
    | Loading of User option
    /// Loaded state
    | Loaded of User
    /// If last request results in an error
    | Errored

type Msg =
    | FetchRandomUser
    | FetchResponse of Result<User, string>
    | FetchError of exn

/// At first, we have no user to display
let init () = Loading None, Cmd.ofMsg FetchRandomUser

// UPDATE

let private getRandomUser () = promise {
    // We add a delay of 300ms so the button animation is more visible
    do! Promise.sleep 300
    let! response = Fetch.fetch "https://randomuser.me/api/" []
    let! responseText = response.text()
    let resultDecoder = Decode.field "results" (Decode.index 0 User.Decoder)
    return Decode.fromString resultDecoder responseText
}
let update (msg:Msg) (model:Model) =
    match msg with
    | FetchRandomUser ->
        let newModel =
            match model with
            // If we have a current user
            // we keep it while waiting the new user
            | Loaded user ->
                Loading (Some user)
            | _ -> Loading None

        newModel, Cmd.OfPromise.either getRandomUser () FetchResponse FetchError

    // We got a response and decoding succeded
    | FetchResponse (Ok user) ->
        Loaded user, Cmd.none

    // We got a response and decoding failed
    | FetchResponse (Error msg) ->
        JS.console.error msg
        Errored, Cmd.none

    // An error occured, when fetching the new user
    | FetchError error ->
        JS.console.error error.Message
        Errored, Cmd.none

// VIEW (rendered with React)

let inline private renderInfo iconClass value =
    let iconClass = "fa " + iconClass
    div [ ]
        [ span [ Class "icon" ]
            [ i [ Class iconClass ]
                [ ] ]
          str " "
          str value ]

let inline private viewMessage color msg =
    div [ Class ("message " + color) ]
        [ div [ Class "message-body" ]
            [ str msg ] ]

let private viewLoading =
    viewMessage "is-info" "Waiting the server response..."

let private viewErrored =
    viewMessage "is-danger" "An error occured, please check the console for more information."

let private viewUser (user : User) =
    let birthday =
        user.Birthday.ToShortDateString()

    div [ Class "card is-avatar" ]
        [ div [ Class "card-image" ]
            [ figure [ Class "image is-128x128" ]
                [ img [ Class "is-rounded"
                        Src user.Picture ] ] ]
          div [ Class "card-content" ]
            [ div [ Class "content has-text-centered" ]
                [ div [ Class "has-text-weight-semibold is-size-5" ]
                    [ str user.FullName ]
                  div [ Class "is-italic" ]
                    [ str birthday ] ]
              div [ Class "content" ]
                [ renderInfo "fa-phone" user.CellPhone
                  renderInfo "fa-phone" user.OfficePhone
                  renderInfo "fa-envelope" user.Email ] ] ]

let private viewGenerateButton isLoading dispatch =
    let buttonClass =
        if isLoading then
            " is-loading"
        else
            ""
        |> (+) "button is-primary "

    div [ Class "has-text-centered" ]
        [ div [ Class buttonClass
                OnClick (fun _ ->
                    dispatch FetchRandomUser
                ) ]
            [ str "Generate a new user" ] ]

let private center child =
    div [ Class "columns is-mobile" ]
        [ div [ Class "column is-3" ] [ ]
          div [ Class "column" ] [ child ]
          div [ Class "column is-3" ] [ ] ]

let view model dispatch =
    let (isLoading, content) =
        match model with
        | Loading None ->
            true, viewLoading
        | Loading (Some user) ->
            true, viewUser user
        | Loaded user ->
            false, viewUser user
        | Errored ->
            false, viewErrored

    section [ Class "hero is-fullheight" ]
        [ div [ Class "hero-body" ]
            [ div [ Class "container" ]
                [ center (viewGenerateButton isLoading dispatch)
                  center content ] ] ]

// App
Program.mkProgram init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run