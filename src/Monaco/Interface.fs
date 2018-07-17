module Fable.Editor.Interfaces

open Fable.Import

type IExports =
    abstract CreateFSharpEditor : Browser.HTMLElement -> monaco.editor.IStandaloneCodeEditor
    abstract ParseEditor : monaco.editor.IModel -> unit
    abstract CompileAndRunCurrentResults : monaco.editor.IStandaloneCodeEditor -> string * string
    // abstract FcsCheckerStart : Event<unit>
    // abstract FcsCheckerEnd : Event<unit>
    // abstract FcsCompilerStart : Event<unit>
    // abstract FcsCompilerEnd : Event<unit>
