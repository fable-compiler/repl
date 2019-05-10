module ReactEditor

open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Browser.Types
open Browser

type Props =
    /// Triggered when the value of the Editor changed
    | OnChange of (string -> unit)
    /// Set the value of the Editor
    | Value of string
    /// Triggered when the Editor has been mounted
    | EditorDidMount of (Monaco.Editor.IStandaloneCodeEditor -> Monaco.IExports -> unit)
    /// Option to pass to the Editor
    | Options of Monaco.Editor.IEditorConstructionOptions
    /// Errors to set into the editor
    /// Currently only used for the F# editor
    | Errors of Monaco.Editor.IMarkerData[]
    /// If specified the editor will listen to the provided event key
    /// When sending the event, you need to provide an `eventType` in the detail
    /// Additional data might also be sent using others properties
    | EventId of string
    /// If `true`, the editor is hidden
    | IsHidden of bool
    /// Custom class to add to the `react-editor` container
    | CustomClass of string

/// Override style of the div container
let inline Style (css: CSSProp seq): Props =
    !!("style", keyValueList CaseRules.LowerFirst css)

let inline editor (props: Props list) : ReactElement =
    ofImport "default" "./js/react-editor.js" (keyValueList CaseRules.LowerFirst props) []


module Dispatch =

    let cursorMove (eventId : string) (range : Monaco.Editor.IMarkerData) =
        let data =
            jsOptions<CustomEventInit>(fun o ->
                o.detail <- createObj [
                    "eventType" ==> "cursorMove"
                    "range" ==> jsOptions<Monaco.IRange>(fun o ->
                        o.startLineNumber <- range.startLineNumber
                        o.startColumn <- range.startColumn
                        o.endLineNumber <- range.startLineNumber
                        o.endColumn <- range.startColumn
                    )
                ] |> Some
            )
        let event = CustomEvent.Create(eventId, data)
        window.dispatchEvent(event) |> ignore
