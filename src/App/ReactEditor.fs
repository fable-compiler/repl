module ReactEditor

open Fable.Core
open Fable.Core.JsInterop
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fable.Import

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
    | Errors of ResizeArray<Monaco.Editor.IMarkerData>

/// Override style of the div container
let inline Style (css: CSSProp seq): Props =
    !!("style", keyValueList CaseRules.LowerFirst css)

let inline editor (props: Props list) : React.ReactElement =
    ofImport "default" "./js/react-editor.js" (keyValueList CaseRules.LowerFirst props) []
