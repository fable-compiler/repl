module Elmish.Validation

open System
open Fable.Core
open Elmish
open Elmish.React
open Fable.PowerPack
open Fable.Import.React
open Fable.Helpers.React
open Fable.Helpers.React.Props

type LoginResult =
    | Success of token:string
    | UsernameDoesNotExist
    | PasswordIncorrect
    | LoginError of errorMsg:string

type LoginInfo =
    { Username : string
      Password : string }

type Msg =
    | Login
    | ChangeUsername of string
    | ChangePassword of string
    | LoginSuccess of adminSecureToken: string
    | LoginFailed of error:string
    | UpdateValidationErrors

type State = {
    LoggingIn: bool
    InputUsername: string
    UsernameValidationErrors: string list
    PasswordValidationErrors: string list
    InputPassword: string
    HasTriedToLogin: bool
    LoginError: string option
}


module Http =
    let private loginPromise (info: LoginInfo) =
        promise {
            // simulate server word
            do! Promise.sleep 1500
            return LoginResult.Success "my-secure-access-token"
        }

    let login (info: LoginInfo) =

        let successHandler = function
            | Success token -> LoginSuccess token
            | UsernameDoesNotExist -> LoginFailed "Username does not exist"
            | PasswordIncorrect -> LoginFailed "The password you entered is incorrect"
            | LoginError error -> LoginFailed error

        Cmd.ofPromise loginPromise info
                      successHandler
                      (fun ex -> LoginFailed "Unknown error occured while logging you in")


let init() =
    { InputUsername = ""
      InputPassword = ""
      UsernameValidationErrors =  [ ]
      PasswordValidationErrors =  [ ]
      HasTriedToLogin = false
      LoginError = None
      LoggingIn = false }, Cmd.none


let validateInput (state: State) =
  let usernameRules =
    [ String.IsNullOrWhiteSpace(state.InputUsername), "Field 'Username' cannot be empty"
      state.InputUsername.Trim().Length < 5, "Field 'Username' must at least have 5 characters" ]
  let passwordRules =
    [ String.IsNullOrWhiteSpace(state.InputPassword), "Field 'Password' cannot be empty"
      state.InputPassword.Trim().Length < 5, "Field 'Password' must at least have 5 characters" ]
  let usernameValidationErrors =
      usernameRules
      |> List.filter fst
      |> List.map snd
  let passwordValidationErrors =
      passwordRules
      |> List.filter fst
      |> List.map snd

  usernameValidationErrors, passwordValidationErrors


let update msg (state: State) =
    match msg with
    | ChangeUsername name ->
        let nextState = { state with InputUsername = name }
        nextState, Cmd.ofMsg UpdateValidationErrors

    | ChangePassword pass ->
        let nextState = { state with InputPassword = pass }
        nextState, Cmd.ofMsg UpdateValidationErrors

    | UpdateValidationErrors ->
        let usernameErrors, passwordErrors = validateInput state
        let nextState =
            { state with UsernameValidationErrors = usernameErrors
                         PasswordValidationErrors = passwordErrors }
        nextState, Cmd.none

    | Login ->
        let state = { state with HasTriedToLogin = true }
        let usernameErrors, passwordErrors =
           validateInput state
        let startLogin =
            List.isEmpty usernameErrors
         && List.isEmpty passwordErrors

        if not startLogin then state, Cmd.none
        else
          let nextState = { state with LoggingIn = true }
          let credentials = {
              Username = state.InputUsername
              Password = state.InputPassword
          }

          nextState, Http.login credentials

    | LoginSuccess token ->
        let nextState = { state with LoggingIn = false }
        nextState, Cmd.none

    | LoginFailed error ->
        let nextState =
            { state with
                LoginError = Some error
                LoggingIn = false }

        nextState, Cmd.none

type InputType = Text | Password

let textInput inputLabel initial inputType (onChange: string -> unit) =
  let inputType = match inputType with
                  | Text -> "input"
                  | Password -> "password"
  div
    [ Class "form-group" ]
    [ input [ Class "form-control form-control-lg"
              Type inputType
              DefaultValue initial
              Placeholder inputLabel
              OnChange (fun e -> onChange e.Value) ] ]

let loginFormStyle =
  Style [ Width "400px"
          MarginTop "70px"
          TextAlign "center" ]

let cardBlockStyle =
  Style [ Padding "30px"
          TextAlign "left"
          BorderRadius 10 ]

let errorMessagesIfAny triedLogin = function
  | [ ] -> None
  | _ when triedLogin = false -> None
  | errors ->
    let errorStyle = Style [ Color "crimson"; FontSize 12 ]
    ul [ ]
       [ for error in errors ->
          li [ errorStyle ] [ str error ] ] |> Some

let appIcon =
  img [ Src "https://zaid-ajaj.github.io/elmish-login-flow-validation/img/fable_logo.png"
        Style [ Height 80; Width 100 ] ]

let render (state: State) dispatch =

    let loginBtnContent =
      if state.LoggingIn then i [ Class "fa fa-circle-o-notch fa-spin" ] []
      else str "Login"

    let validationRules =
      [ state.InputUsername.Trim().Length >= 5
        state.InputPassword.Trim().Length >= 5 ]

    let canLogin = Seq.forall id validationRules

    let btnClass =
      if canLogin
      then "btn btn-success btn-lg"
      else "btn btn-info btn-lg"
    div
      [ Class "container" ; loginFormStyle ]
      [ div
         [ Class "card" ]
         [ div
             [ Class "card-block"; cardBlockStyle ]
             [ div
                [ Style [ TextAlign "center" ] ]
                [ appIcon ]
               br []
               textInput "Username" state.InputUsername Text (ChangeUsername >> dispatch)
               ofOption (errorMessagesIfAny state.HasTriedToLogin state.UsernameValidationErrors)
               textInput "Password" state.InputPassword Password (ChangePassword >> dispatch)
               ofOption (errorMessagesIfAny state.HasTriedToLogin state.PasswordValidationErrors)
               div
                [ Style [ TextAlign "center" ] ]
                [ button
                    [ Class btnClass
                      OnClick (fun e -> dispatch Login) ]
                    [ loginBtnContent ] ] ] ] ]


Program.mkProgram init update render
|> Program.withReact "elmish-app"
|> Program.run