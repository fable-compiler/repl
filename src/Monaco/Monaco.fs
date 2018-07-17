// Type definitions for monaco-editor v0.10.0
// generated with ts2fable from /node_modules/monaco-editor/monaco.d.ts

namespace rec Fable.Import

open System
open System.Text.RegularExpressions
open Fable.Core
open Fable.Import.JS
open Fable.Import.Browser

module monaco =
    type [<AllowNullLiteral>] IDisposable =
        abstract dispose: unit -> unit

    type [<AllowNullLiteral>] IEvent<'T> =
        [<Emit("$0($1...)")>] abstract Invoke: listener: ('T -> obj) * ?thisArg: obj -> IDisposable

    type [<AllowNullLiteral>] [<Import("Emitter","monaco")>] Emitter<'T>() =
        member __.``event`` with get(): IEvent<'T> = jsNative and set(v: IEvent<'T>): unit = jsNative
        member __.fire(?``event``: 'T): unit = jsNative
        member __.dispose(): unit = jsNative

    type Severity =
        | Ignore = 0
        | Info = 1
        | Warning = 2
        | Error = 3

    type [<AllowNullLiteral>] TValueCallback<'T> =
        [<Emit("$0($1...)")>] abstract Invoke: value: U2<'T, Promise<'T>> -> unit

    type [<AllowNullLiteral>] ProgressCallback =
        [<Emit("$0($1...)")>] abstract Invoke: progress: obj -> obj

    type [<AllowNullLiteral>] [<Import("CancellationTokenSource","monaco")>] CancellationTokenSource() =
        member __.token with get(): CancellationToken = jsNative and set(v: CancellationToken): unit = jsNative
        member __.cancel(): unit = jsNative
        member __.dispose(): unit = jsNative

    type [<AllowNullLiteral>] CancellationToken =
        abstract isCancellationRequested: bool with get, set
        abstract onCancellationRequested: IEvent<obj> with get, set

    type [<AllowNullLiteral>] [<Import("Uri","monaco")>] Uri() =
        member __.scheme with get(): string = jsNative and set(v: string): unit = jsNative
        member __.authority with get(): string = jsNative and set(v: string): unit = jsNative
        member __.path with get(): string = jsNative and set(v: string): unit = jsNative
        member __.query with get(): string = jsNative and set(v: string): unit = jsNative
        member __.fragment with get(): string = jsNative and set(v: string): unit = jsNative
        member __.fsPath with get(): string = jsNative and set(v: string): unit = jsNative
        static member isUri(thing: obj): obj = jsNative
        member __.``with``(change: obj): Uri = jsNative
        static member parse(value: string): Uri = jsNative
        static member file(path: string): Uri = jsNative
        static member from(components: obj): Uri = jsNative
        member __.toString(?skipEncoding: bool): string = jsNative
        member __.toJSON(): obj = jsNative
        static member revive(data: obj): Uri = jsNative

    type KeyCode =
        | Unknown = 0
        | Backspace = 1
        | Tab = 2
        | Enter = 3
        | Shift = 4
        | Ctrl = 5
        | Alt = 6
        | PauseBreak = 7
        | CapsLock = 8
        | Escape = 9
        | Space = 10
        | PageUp = 11
        | PageDown = 12
        | End = 13
        | Home = 14
        | LeftArrow = 15
        | UpArrow = 16
        | RightArrow = 17
        | DownArrow = 18
        | Insert = 19
        | Delete = 20
        | KEY_0 = 21
        | KEY_1 = 22
        | KEY_2 = 23
        | KEY_3 = 24
        | KEY_4 = 25
        | KEY_5 = 26
        | KEY_6 = 27
        | KEY_7 = 28
        | KEY_8 = 29
        | KEY_9 = 30
        | KEY_A = 31
        | KEY_B = 32
        | KEY_C = 33
        | KEY_D = 34
        | KEY_E = 35
        | KEY_F = 36
        | KEY_G = 37
        | KEY_H = 38
        | KEY_I = 39
        | KEY_J = 40
        | KEY_K = 41
        | KEY_L = 42
        | KEY_M = 43
        | KEY_N = 44
        | KEY_O = 45
        | KEY_P = 46
        | KEY_Q = 47
        | KEY_R = 48
        | KEY_S = 49
        | KEY_T = 50
        | KEY_U = 51
        | KEY_V = 52
        | KEY_W = 53
        | KEY_X = 54
        | KEY_Y = 55
        | KEY_Z = 56
        | Meta = 57
        | ContextMenu = 58
        | F1 = 59
        | F2 = 60
        | F3 = 61
        | F4 = 62
        | F5 = 63
        | F6 = 64
        | F7 = 65
        | F8 = 66
        | F9 = 67
        | F10 = 68
        | F11 = 69
        | F12 = 70
        | F13 = 71
        | F14 = 72
        | F15 = 73
        | F16 = 74
        | F17 = 75
        | F18 = 76
        | F19 = 77
        | NumLock = 78
        | ScrollLock = 79
        | US_SEMICOLON = 80
        | US_EQUAL = 81
        | US_COMMA = 82
        | US_MINUS = 83
        | US_DOT = 84
        | US_SLASH = 85
        | US_BACKTICK = 86
        | US_OPEN_SQUARE_BRACKET = 87
        | US_BACKSLASH = 88
        | US_CLOSE_SQUARE_BRACKET = 89
        | US_QUOTE = 90
        | OEM_8 = 91
        | OEM_102 = 92
        | NUMPAD_0 = 93
        | NUMPAD_1 = 94
        | NUMPAD_2 = 95
        | NUMPAD_3 = 96
        | NUMPAD_4 = 97
        | NUMPAD_5 = 98
        | NUMPAD_6 = 99
        | NUMPAD_7 = 100
        | NUMPAD_8 = 101
        | NUMPAD_9 = 102
        | NUMPAD_MULTIPLY = 103
        | NUMPAD_ADD = 104
        | NUMPAD_SEPARATOR = 105
        | NUMPAD_SUBTRACT = 106
        | NUMPAD_DECIMAL = 107
        | NUMPAD_DIVIDE = 108
        | KEY_IN_COMPOSITION = 109
        | ABNT_C1 = 110
        | ABNT_C2 = 111
        | MAX_VALUE = 112

    type [<AllowNullLiteral>] [<Import("KeyMod","monaco")>] KeyMod() =
        static member CtrlCmd with get(): int = jsNative and set(v: int): unit = jsNative
        static member Shift with get(): int = jsNative and set(v: int): unit = jsNative
        static member Alt with get(): int = jsNative and set(v: int): unit = jsNative
        static member WinCtrl with get(): int = jsNative and set(v: int): unit = jsNative
        static member chord(firstPart: int, secondPart: int): int = jsNative

    type MarkedString =
        U2<string, obj>

    type [<AllowNullLiteral>] IKeyboardEvent =
        abstract browserEvent: KeyboardEvent with get, set
        abstract target: HTMLElement with get, set
        abstract ctrlKey: bool with get, set
        abstract shiftKey: bool with get, set
        abstract altKey: bool with get, set
        abstract metaKey: bool with get, set
        abstract keyCode: KeyCode with get, set
        abstract code: string with get, set
        abstract equals: keybinding: int -> bool
        abstract preventDefault: unit -> unit
        abstract stopPropagation: unit -> unit

    type [<AllowNullLiteral>] IMouseEvent =
        abstract browserEvent: MouseEvent with get, set
        abstract leftButton: bool with get, set
        abstract middleButton: bool with get, set
        abstract rightButton: bool with get, set
        abstract target: HTMLElement with get, set
        abstract detail: float with get, set
        abstract posx: float with get, set
        abstract posy: float with get, set
        abstract ctrlKey: bool with get, set
        abstract shiftKey: bool with get, set
        abstract altKey: bool with get, set
        abstract metaKey: bool with get, set
        abstract timestamp: float with get, set
        abstract preventDefault: unit -> unit
        abstract stopPropagation: unit -> unit

    type [<AllowNullLiteral>] IScrollEvent =
        abstract scrollTop: float with get, set
        abstract scrollLeft: float with get, set
        abstract scrollWidth: float with get, set
        abstract scrollHeight: float with get, set
        abstract scrollTopChanged: bool with get, set
        abstract scrollLeftChanged: bool with get, set
        abstract scrollWidthChanged: bool with get, set
        abstract scrollHeightChanged: bool with get, set

    type [<AllowNullLiteral>] IPosition =
        abstract lineNumber: int with get, set
        abstract column: int with get, set

    type [<AllowNullLiteral>] [<Import("Position","monaco")>] Position(lineNumber: int, column: int) =
        member __.lineNumber with get(): int = jsNative and set(v: int): unit = jsNative
        member __.column with get(): int = jsNative and set(v: int): unit = jsNative
        member __.equals(other: IPosition): bool = jsNative
        static member equals(a: IPosition, b: IPosition): bool = jsNative
        member __.isBefore(other: IPosition): bool = jsNative
        static member isBefore(a: IPosition, b: IPosition): bool = jsNative
        member __.isBeforeOrEqual(other: IPosition): bool = jsNative
        static member isBeforeOrEqual(a: IPosition, b: IPosition): bool = jsNative
        static member compare(a: IPosition, b: IPosition): float = jsNative
        member __.clone(): Position = jsNative
        member __.toString(): string = jsNative
        static member lift(pos: IPosition): Position = jsNative
        static member isIPosition(obj: obj): obj = jsNative

    type [<AllowNullLiteral>] IRange =
        abstract startLineNumber: float with get, set
        abstract startColumn: float with get, set
        abstract endLineNumber: float with get, set
        abstract endColumn: float with get, set

    type [<AllowNullLiteral>] [<Import("Range","monaco")>] Range(startLineNumber: float, startColumn: float, endLineNumber: float, endColumn: float) =
        member __.startLineNumber with get(): float = jsNative and set(v: float): unit = jsNative
        member __.startColumn with get(): float = jsNative and set(v: float): unit = jsNative
        member __.endLineNumber with get(): float = jsNative and set(v: float): unit = jsNative
        member __.endColumn with get(): float = jsNative and set(v: float): unit = jsNative
        member __.isEmpty(): bool = jsNative
        static member isEmpty(range: IRange): bool = jsNative
        member __.containsPosition(position: IPosition): bool = jsNative
        static member containsPosition(range: IRange, position: IPosition): bool = jsNative
        member __.containsRange(range: IRange): bool = jsNative
        static member containsRange(range: IRange, otherRange: IRange): bool = jsNative
        member __.plusRange(range: IRange): Range = jsNative
        static member plusRange(a: IRange, b: IRange): Range = jsNative
        member __.intersectRanges(range: IRange): Range = jsNative
        static member intersectRanges(a: IRange, b: IRange): Range = jsNative
        member __.equalsRange(other: IRange): bool = jsNative
        static member equalsRange(a: IRange, b: IRange): bool = jsNative
        member __.getEndPosition(): Position = jsNative
        member __.getStartPosition(): Position = jsNative
        member __.cloneRange(): Range = jsNative
        member __.toString(): string = jsNative
        member __.setEndPosition(endLineNumber: float, endColumn: float): Range = jsNative
        member __.setStartPosition(startLineNumber: float, startColumn: float): Range = jsNative
        member __.collapseToStart(): Range = jsNative
        static member collapseToStart(range: IRange): Range = jsNative
        static member fromPositions(start: IPosition, ?``end``: IPosition): Range = jsNative
        static member lift(range: IRange): Range = jsNative
        static member isIRange(obj: obj): obj = jsNative
        static member areIntersectingOrTouching(a: IRange, b: IRange): bool = jsNative
        static member compareRangesUsingStarts(a: IRange, b: IRange): float = jsNative
        static member compareRangesUsingEnds(a: IRange, b: IRange): float = jsNative
        static member spansMultipleLines(range: IRange): bool = jsNative

    type [<AllowNullLiteral>] ISelection =
        abstract selectionStartLineNumber: float with get, set
        abstract selectionStartColumn: float with get, set
        abstract positionLineNumber: float with get, set
        abstract positionColumn: float with get, set

    type [<AllowNullLiteral>] [<Import("Selection","monaco")>] Selection(selectionStartLineNumber: float, selectionStartColumn: float, positionLineNumber: float, positionColumn: float) =
        inherit Range(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn)
        member __.selectionStartLineNumber with get(): float = jsNative and set(v: float): unit = jsNative
        member __.selectionStartColumn with get(): float = jsNative and set(v: float): unit = jsNative
        member __.positionLineNumber with get(): float = jsNative and set(v: float): unit = jsNative
        member __.positionColumn with get(): float = jsNative and set(v: float): unit = jsNative
        member __.clone(): Selection = jsNative
        member __.toString(): string = jsNative
        member __.equalsSelection(other: ISelection): bool = jsNative
        static member selectionsEqual(a: ISelection, b: ISelection): bool = jsNative
        member __.getDirection(): SelectionDirection = jsNative
        member __.setEndPosition(endLineNumber: float, endColumn: float): Selection = jsNative
        member __.getPosition(): Position = jsNative
        member __.setStartPosition(startLineNumber: float, startColumn: float): Selection = jsNative
        static member fromPositions(start: IPosition, ?``end``: IPosition): Selection = jsNative
        static member liftSelection(sel: ISelection): Selection = jsNative
        static member selectionsArrEqual(a: ResizeArray<ISelection>, b: ResizeArray<ISelection>): bool = jsNative
        static member isISelection(obj: obj): obj = jsNative
        static member createWithDirection(startLineNumber: float, startColumn: float, endLineNumber: float, endColumn: float, direction: SelectionDirection): Selection = jsNative

    type SelectionDirection =
        | LTR = 0
        | RTL = 1

    type [<AllowNullLiteral>] [<Import("Token","monaco")>] Token(offset: float, ``type``: string, language: string) =
        member __._tokenBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
        member __.offset with get(): float = jsNative and set(v: float): unit = jsNative
        member __.``type`` with get(): string = jsNative and set(v: string): unit = jsNative
        member __.language with get(): string = jsNative and set(v: string): unit = jsNative
        member __.toString(): string = jsNative

    module editor =
        type [<AllowNullLiteral>] IDiffNavigator =
            abstract revealFirst: bool with get, set
            abstract canNavigate: unit -> bool
            abstract next: unit -> unit
            abstract previous: unit -> unit
            abstract dispose: unit -> unit

        type [<AllowNullLiteral>] IDiffNavigatorOptions =
            abstract followsCaret: bool option with get, set
            abstract ignoreCharChanges: bool option with get, set
            abstract alwaysRevealFirst: bool option with get, set

        type BuiltinTheme =
            U3<obj, obj, obj>

        type [<AllowNullLiteral>] IStandaloneThemeData =
            abstract ``base``: BuiltinTheme with get, set
            abstract ``inherit``: bool with get, set
            abstract rules: ResizeArray<ITokenThemeRule> with get, set
            abstract colors: IColors with get, set

        type IColors =
            obj

        type [<AllowNullLiteral>] ITokenThemeRule =
            abstract token: string with get, set
            abstract foreground: string option with get, set
            abstract background: string option with get, set
            abstract fontStyle: string option with get, set

        type [<AllowNullLiteral>] MonacoWebWorker<'T> =
            abstract dispose: unit -> unit
            abstract getProxy: unit -> Promise<'T>
            abstract withSyncedResources: resources: ResizeArray<Uri> -> Promise<'T>

        type [<AllowNullLiteral>] IWebWorkerOptions =
            abstract moduleId: string with get, set
            abstract createData: obj option with get, set
            abstract label: string option with get, set

        type [<AllowNullLiteral>] IEditorConstructionOptions =
            inherit IEditorOptions
            abstract model: IModel option with get, set
            abstract value: string option with get, set
            abstract language: string option with get, set
            abstract theme: string option with get, set
            abstract accessibilityHelpUrl: string option with get, set

        type [<AllowNullLiteral>] IDiffEditorConstructionOptions =
            inherit IDiffEditorOptions
            abstract theme: string option with get, set

        type [<AllowNullLiteral>] IStandaloneCodeEditor =
            inherit ICodeEditor
            abstract addCommand: keybinding: int * handler: (unit->unit) * ?context: string -> string
            abstract createContextKey: key: string * defaultValue: 'T -> IContextKey<'T>
            abstract addAction: descriptor: IActionDescriptor -> IDisposable

        type [<AllowNullLiteral>] IStandaloneDiffEditor =
            inherit IDiffEditor
            abstract addCommand: keybinding: int * handler: (unit->unit) * ?context: string -> string
            abstract createContextKey: key: string * defaultValue: 'T -> IContextKey<'T>
            abstract addAction: descriptor: IActionDescriptor -> IDisposable
            abstract getOriginalEditor: unit -> IStandaloneCodeEditor
            abstract getModifiedEditor: unit -> IStandaloneCodeEditor

        type [<AllowNullLiteral>] ICommandHandler =
            [<Emit("$0($1...)")>] abstract Invoke: [<ParamArray>] args: obj[] -> unit

        type [<AllowNullLiteral>] IContextKey<'T> =
            abstract set: value: 'T -> unit
            abstract reset: unit -> unit
            abstract get: unit -> 'T

        type [<AllowNullLiteral>] IEditorOverrideServices =
            [<Emit("$0[$1]{{=$2}}")>] abstract Item: index: string -> obj with get, set

        type [<AllowNullLiteral>] IMarker =
            abstract owner: string with get, set
            abstract resource: Uri with get, set
            abstract severity: Severity with get, set
            abstract code: string option with get, set
            abstract message: string with get, set
            abstract source: string option with get, set
            abstract startLineNumber: float with get, set
            abstract startColumn: float with get, set
            abstract endLineNumber: float with get, set
            abstract endColumn: float with get, set

        type [<AllowNullLiteral>] IMarkerData =
            abstract code: string option with get, set
            abstract severity: Severity with get, set
            abstract message: string with get, set
            abstract source: string option with get, set
            abstract startLineNumber: int with get, set
            abstract startColumn: int with get, set
            abstract endLineNumber: int with get, set
            abstract endColumn: int with get, set

        type [<AllowNullLiteral>] IColorizerOptions =
            abstract tabSize: float option with get, set

        type [<AllowNullLiteral>] IColorizerElementOptions =
            inherit IColorizerOptions
            abstract theme: string option with get, set
            abstract mimeType: string option with get, set

        type ScrollbarVisibility =
            | Auto = 1
            | Hidden = 2
            | Visible = 3

        type [<AllowNullLiteral>] ThemeColor =
            abstract id: string with get, set

        type OverviewRulerLane =
            | Left = 1
            | Center = 2
            | Right = 4
            | Full = 7

        type [<AllowNullLiteral>] IModelDecorationOverviewRulerOptions =
            abstract color: U2<string, ThemeColor> with get, set
            abstract darkColor: U2<string, ThemeColor> with get, set
            abstract hcColor: U2<string, ThemeColor> option with get, set
            abstract position: OverviewRulerLane with get, set

        type [<AllowNullLiteral>] IModelDecorationOptions =
            abstract stickiness: TrackedRangeStickiness option with get, set
            abstract className: string option with get, set
            abstract glyphMarginHoverMessage: U2<MarkedString, ResizeArray<MarkedString>> option with get, set
            abstract hoverMessage: U2<MarkedString, ResizeArray<MarkedString>> option with get, set
            abstract isWholeLine: bool option with get, set
            abstract overviewRuler: IModelDecorationOverviewRulerOptions option with get, set
            abstract glyphMarginClassName: string option with get, set
            abstract linesDecorationsClassName: string option with get, set
            abstract marginClassName: string option with get, set
            abstract inlineClassName: string option with get, set
            abstract beforeContentClassName: string option with get, set
            abstract afterContentClassName: string option with get, set

        type [<AllowNullLiteral>] IModelDeltaDecoration =
            abstract range: IRange with get, set
            abstract options: IModelDecorationOptions with get, set

        type [<AllowNullLiteral>] IModelDecoration =
            abstract id: string with get, set
            abstract ownerId: float with get, set
            abstract range: Range with get, set
            abstract options: IModelDecorationOptions with get, set
            abstract isForValidation: bool with get, set

        type [<AllowNullLiteral>] IWordAtPosition =
            abstract word: string with get, set
            abstract startColumn: float with get, set
            abstract endColumn: float with get, set

        type EndOfLinePreference =
            | TextDefined = 0
            | LF = 1
            | CRLF = 2

        type DefaultEndOfLine =
            | LF = 1
            | CRLF = 2

        type EndOfLineSequence =
            | LF = 0
            | CRLF = 1

        type [<AllowNullLiteral>] ISingleEditOperationIdentifier =
            abstract major: float with get, set
            abstract minor: float with get, set

        type [<AllowNullLiteral>] IEditOperationBuilder =
            abstract addEditOperation: range: Range * text: string -> unit
            abstract addTrackedEditOperation: range: Range * text: string -> unit
            abstract trackSelection: selection: Selection * ?trackPreviousOnEmpty: bool -> string

        type [<AllowNullLiteral>] ICursorStateComputerData =
            abstract getInverseEditOperations: unit -> ResizeArray<IIdentifiedSingleEditOperation>
            abstract getTrackedSelection: id: string -> Selection

        type [<AllowNullLiteral>] ICommand =
            abstract getEditOperations: model: ITokenizedModel * builder: IEditOperationBuilder -> unit
            abstract computeCursorState: model: ITokenizedModel * helper: ICursorStateComputerData -> Selection

        type [<AllowNullLiteral>] ISingleEditOperation =
            abstract range: IRange with get, set
            abstract text: string with get, set
            abstract forceMoveMarkers: bool option with get, set

        type [<AllowNullLiteral>] IIdentifiedSingleEditOperation =
            abstract identifier: ISingleEditOperationIdentifier with get, set
            abstract range: Range with get, set
            abstract text: string with get, set
            abstract forceMoveMarkers: bool with get, set
            abstract isAutoWhitespaceEdit: bool option with get, set

        type [<AllowNullLiteral>] ICursorStateComputer =
            [<Emit("$0($1...)")>] abstract Invoke: inverseEditOperations: ResizeArray<IIdentifiedSingleEditOperation> -> ResizeArray<Selection>

        type [<AllowNullLiteral>] [<Import("editor.TextModelResolvedOptions","monaco")>] TextModelResolvedOptions() =
            member __._textModelResolvedOptionsBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
            member __.tabSize with get(): float = jsNative and set(v: float): unit = jsNative
            member __.insertSpaces with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.defaultEOL with get(): DefaultEndOfLine = jsNative and set(v: DefaultEndOfLine): unit = jsNative
            member __.trimAutoWhitespace with get(): bool = jsNative and set(v: bool): unit = jsNative

        type [<AllowNullLiteral>] ITextModelUpdateOptions =
            abstract tabSize: float option with get, set
            abstract insertSpaces: bool option with get, set
            abstract trimAutoWhitespace: bool option with get, set

        type [<AllowNullLiteral>] ITextModel =
            abstract getOptions: unit -> TextModelResolvedOptions
            abstract getVersionId: unit -> float
            abstract getAlternativeVersionId: unit -> float
            abstract setValue: newValue: string -> unit
            abstract getValue: ?eol: EndOfLinePreference * ?preserveBOM: bool -> string
            abstract getValueLength: ?eol: EndOfLinePreference * ?preserveBOM: bool -> float
            abstract getValueInRange: range: IRange * ?eol: EndOfLinePreference -> string
            abstract getValueLengthInRange: range: IRange -> float
            abstract getLineCount: unit -> float
            abstract getLineContent: lineNumber: int -> string
            abstract getLinesContent: unit -> ResizeArray<string>
            abstract getEOL: unit -> string
            abstract setEOL: eol: EndOfLineSequence -> unit
            abstract getLineMinColumn: lineNumber: int -> float
            abstract getLineMaxColumn: lineNumber: int -> float
            abstract getLineFirstNonWhitespaceColumn: lineNumber: int -> float
            abstract getLineLastNonWhitespaceColumn: lineNumber: int -> float
            abstract validatePosition: position: IPosition -> Position
            abstract modifyPosition: position: IPosition * offset: float -> Position
            abstract validateRange: range: IRange -> Range
            abstract getOffsetAt: position: IPosition -> float
            abstract getPositionAt: offset: float -> Position
            abstract getFullModelRange: unit -> Range
            abstract isDisposed: unit -> bool
            abstract findMatches: searchString: string * searchOnlyEditableRange: bool * isRegex: bool * matchCase: bool * wordSeparators: string * captureMatches: bool * ?limitResultCount: float -> ResizeArray<FindMatch>
            abstract findMatches: searchString: string * searchScope: IRange * isRegex: bool * matchCase: bool * wordSeparators: string * captureMatches: bool * ?limitResultCount: float -> ResizeArray<FindMatch>
            abstract findNextMatch: searchString: string * searchStart: IPosition * isRegex: bool * matchCase: bool * wordSeparators: string * captureMatches: bool -> FindMatch
            abstract findPreviousMatch: searchString: string * searchStart: IPosition * isRegex: bool * matchCase: bool * wordSeparators: string * captureMatches: bool -> FindMatch

        type [<AllowNullLiteral>] [<Import("editor.FindMatch","monaco")>] FindMatch() =
            member __._findMatchBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
            member __.range with get(): Range = jsNative and set(v: Range): unit = jsNative
            member __.matches with get(): ResizeArray<string> = jsNative and set(v: ResizeArray<string>): unit = jsNative

        type [<AllowNullLiteral>] IReadOnlyModel =
            inherit ITextModel
            abstract uri: Uri with get, set
            abstract getModeId: unit -> string
            abstract getWordAtPosition: position: IPosition -> IWordAtPosition
            abstract getWordUntilPosition: position: IPosition -> IWordAtPosition

        type [<AllowNullLiteral>] ITokenizedModel =
            inherit ITextModel
            abstract getModeId: unit -> string
            abstract getWordAtPosition: position: IPosition -> IWordAtPosition
            abstract getWordUntilPosition: position: IPosition -> IWordAtPosition

        type [<AllowNullLiteral>] ITextModelWithMarkers =
            inherit ITextModel


        type TrackedRangeStickiness =
            | AlwaysGrowsWhenTypingAtEdges = 0
            | NeverGrowsWhenTypingAtEdges = 1
            | GrowsOnlyWhenTypingBefore = 2
            | GrowsOnlyWhenTypingAfter = 3

        type [<AllowNullLiteral>] ITextModelWithDecorations =
            abstract deltaDecorations: oldDecorations: ResizeArray<string> * newDecorations: ResizeArray<IModelDeltaDecoration> * ?ownerId: float -> ResizeArray<string>
            abstract getDecorationOptions: id: string -> IModelDecorationOptions
            abstract getDecorationRange: id: string -> Range
            abstract getLineDecorations: lineNumber: int * ?ownerId: float * ?filterOutValidation: bool -> ResizeArray<IModelDecoration>
            abstract getLinesDecorations: startLineNumber: float * endLineNumber: float * ?ownerId: float * ?filterOutValidation: bool -> ResizeArray<IModelDecoration>
            abstract getDecorationsInRange: range: IRange * ?ownerId: float * ?filterOutValidation: bool -> ResizeArray<IModelDecoration>
            abstract getAllDecorations: ?ownerId: float * ?filterOutValidation: bool -> ResizeArray<IModelDecoration>

        type [<AllowNullLiteral>] IEditableTextModel =
            inherit ITextModelWithMarkers
            abstract normalizeIndentation: str: string -> string
            abstract getOneIndent: unit -> string
            abstract updateOptions: newOpts: ITextModelUpdateOptions -> unit
            abstract detectIndentation: defaultInsertSpaces: bool * defaultTabSize: float -> unit
            abstract pushStackElement: unit -> unit
            abstract pushEditOperations: beforeCursorState: ResizeArray<Selection> * editOperations: ResizeArray<IIdentifiedSingleEditOperation> * cursorStateComputer: ICursorStateComputer -> ResizeArray<Selection>
            abstract applyEdits: operations: ResizeArray<IIdentifiedSingleEditOperation> -> ResizeArray<IIdentifiedSingleEditOperation>

        type [<AllowNullLiteral>] IModel =
            inherit IReadOnlyModel
            inherit IEditableTextModel
            inherit ITextModelWithMarkers
            inherit ITokenizedModel
            inherit ITextModelWithDecorations
            abstract id: string with get, set
            abstract onDidChangeContent: listener: (IModelContentChangedEvent -> unit) -> IDisposable
            abstract onDidChangeDecorations: listener: (IModelDecorationsChangedEvent -> unit) -> IDisposable
            abstract onDidChangeOptions: listener: (IModelOptionsChangedEvent -> unit) -> IDisposable
            abstract onDidChangeLanguage: listener: (IModelLanguageChangedEvent -> unit) -> IDisposable
            abstract onWillDispose: listener: (unit -> unit) -> IDisposable
            abstract dispose: unit -> unit

        type [<AllowNullLiteral>] IDiffEditorModel =
            abstract original: IModel with get, set
            abstract modified: IModel with get, set

        type [<AllowNullLiteral>] IModelChangedEvent =
            abstract oldModelUrl: Uri with get, set
            abstract newModelUrl: Uri with get, set

        type [<AllowNullLiteral>] IDimension =
            abstract width: float with get, set
            abstract height: float with get, set

        type [<AllowNullLiteral>] IChange =
            abstract originalStartLineNumber: float with get, set
            abstract originalEndLineNumber: float with get, set
            abstract modifiedStartLineNumber: float with get, set
            abstract modifiedEndLineNumber: float with get, set

        type [<AllowNullLiteral>] ICharChange =
            inherit IChange
            abstract originalStartColumn: float with get, set
            abstract originalEndColumn: float with get, set
            abstract modifiedStartColumn: float with get, set
            abstract modifiedEndColumn: float with get, set

        type [<AllowNullLiteral>] ILineChange =
            inherit IChange
            abstract charChanges: ResizeArray<ICharChange> with get, set

        type [<AllowNullLiteral>] IDiffLineInformation =
            abstract equivalentLineNumber: float with get, set

        type [<AllowNullLiteral>] INewScrollPosition =
            abstract scrollLeft: float option with get, set
            abstract scrollTop: float option with get, set

        type [<AllowNullLiteral>] IActionDescriptor =
            abstract id: string with get, set
            abstract label: string with get, set
            abstract precondition: string option with get, set
            abstract keybindings: ResizeArray<float> option with get, set
            abstract keybindingContext: string option with get, set
            abstract contextMenuGroupId: string option with get, set
            abstract contextMenuOrder: float option with get, set
            abstract run: editor: ICommonCodeEditor -> U2<unit, Promise<unit>>

        type [<AllowNullLiteral>] IEditorAction =
            abstract id: string with get, set
            abstract label: string with get, set
            abstract alias: string with get, set
            abstract isSupported: unit -> bool
            abstract run: unit -> Promise<unit>

        type IEditorModel =
            U2<IModel, IDiffEditorModel>

        type [<AllowNullLiteral>] ICursorState =
            abstract inSelectionMode: bool with get, set
            abstract selectionStart: IPosition with get, set
            abstract position: IPosition with get, set

        type [<AllowNullLiteral>] IViewState =
            abstract scrollTop: float with get, set
            abstract scrollTopWithoutViewZones: float with get, set
            abstract scrollLeft: float with get, set

        type [<AllowNullLiteral>] ICodeEditorViewState =
            abstract cursorState: ResizeArray<ICursorState> with get, set
            abstract viewState: IViewState with get, set
            abstract contributionsState: obj with get, set

        type [<AllowNullLiteral>] IDiffEditorViewState =
            abstract original: ICodeEditorViewState with get, set
            abstract modified: ICodeEditorViewState with get, set

        type IEditorViewState =
            U2<ICodeEditorViewState, IDiffEditorViewState>

        type [<AllowNullLiteral>] IEditor =
            abstract onDidDispose: listener: (unit -> unit) -> IDisposable
            abstract dispose: unit -> unit
            abstract getId: unit -> string
            abstract getEditorType: unit -> string
            abstract updateOptions: newOptions: IEditorOptions -> unit
            abstract layout: ?dimension: IDimension -> unit
            abstract focus: unit -> unit
            abstract isFocused: unit -> bool
            abstract getActions: unit -> ResizeArray<IEditorAction>
            abstract getSupportedActions: unit -> ResizeArray<IEditorAction>
            abstract saveViewState: unit -> IEditorViewState
            abstract restoreViewState: state: IEditorViewState -> unit
            abstract getVisibleColumnFromPosition: position: IPosition -> float
            abstract getPosition: unit -> Position
            abstract setPosition: position: IPosition -> unit
            abstract revealLine: lineNumber: int -> unit
            abstract revealLineInCenter: lineNumber: int -> unit
            abstract revealLineInCenterIfOutsideViewport: lineNumber: int -> unit
            abstract revealPosition: position: IPosition * ?revealVerticalInCenter: bool * ?revealHorizontal: bool -> unit
            abstract revealPositionInCenter: position: IPosition -> unit
            abstract revealPositionInCenterIfOutsideViewport: position: IPosition -> unit
            abstract getSelection: unit -> Selection
            abstract getSelections: unit -> ResizeArray<Selection>
            abstract setSelection: selection: IRange -> unit
            abstract setSelection: selection: Range -> unit
            abstract setSelection: selection: ISelection -> unit
            abstract setSelection: selection: Selection -> unit
            abstract setSelections: selections: ResizeArray<ISelection> -> unit
            abstract revealLines: startLineNumber: float * endLineNumber: float -> unit
            abstract revealLinesInCenter: lineNumber: int * endLineNumber: float -> unit
            abstract revealLinesInCenterIfOutsideViewport: lineNumber: int * endLineNumber: float -> unit
            abstract revealRange: range: IRange -> unit
            abstract revealRangeInCenter: range: IRange -> unit
            abstract revealRangeAtTop: range: IRange -> unit
            abstract revealRangeInCenterIfOutsideViewport: range: IRange -> unit
            abstract trigger: source: string * handlerId: string * payload: obj -> unit
            abstract getModel: unit -> IEditorModel
            abstract setModel: model: IEditorModel -> unit

        type [<AllowNullLiteral>] IEditorContribution =
            abstract getId: unit -> string
            abstract dispose: unit -> unit
            abstract saveViewState: unit -> obj
            abstract restoreViewState: state: obj -> unit

        type [<AllowNullLiteral>] ICommonCodeEditor =
            inherit IEditor
            abstract onDidChangeModelContent: listener: (IModelContentChangedEvent -> unit) -> IDisposable
            abstract onDidChangeModelLanguage: listener: (IModelLanguageChangedEvent -> unit) -> IDisposable
            abstract onDidChangeModelOptions: listener: (IModelOptionsChangedEvent -> unit) -> IDisposable
            abstract onDidChangeConfiguration: listener: (IConfigurationChangedEvent -> unit) -> IDisposable
            abstract onDidChangeCursorPosition: listener: (ICursorPositionChangedEvent -> unit) -> IDisposable
            abstract onDidChangeCursorSelection: listener: (ICursorSelectionChangedEvent -> unit) -> IDisposable
            abstract onDidChangeModel: listener: (IModelChangedEvent -> unit) -> IDisposable
            abstract onDidChangeModelDecorations: listener: (IModelDecorationsChangedEvent -> unit) -> IDisposable
            abstract onDidFocusEditorText: listener: (unit -> unit) -> IDisposable
            abstract onDidBlurEditorText: listener: (unit -> unit) -> IDisposable
            abstract onDidFocusEditor: listener: (unit -> unit) -> IDisposable
            abstract onDidBlurEditor: listener: (unit -> unit) -> IDisposable
            abstract saveViewState: unit -> ICodeEditorViewState
            abstract restoreViewState: state: ICodeEditorViewState -> unit
            abstract hasWidgetFocus: unit -> bool
            abstract getContribution: id: string -> 'T
            abstract getModel: unit -> IModel
            abstract getConfiguration: unit -> InternalEditorOptions
            abstract getValue: ?options: obj -> string
            abstract setValue: newValue: string -> unit
            abstract getScrollWidth: unit -> float
            abstract getScrollLeft: unit -> float
            abstract getScrollHeight: unit -> float
            abstract getScrollTop: unit -> float
            abstract setScrollLeft: newScrollLeft: float -> unit
            abstract setScrollTop: newScrollTop: float -> unit
            abstract setScrollPosition: position: INewScrollPosition -> unit
            abstract getAction: id: string -> IEditorAction
            abstract executeCommand: source: string * command: ICommand -> unit
            abstract pushUndoStop: unit -> bool
            abstract executeEdits: source: string * edits: ResizeArray<IIdentifiedSingleEditOperation> * ?endCursoState: ResizeArray<Selection> -> bool
            abstract executeCommands: source: string * commands: ResizeArray<ICommand> -> unit
            abstract getLineDecorations: lineNumber: int -> ResizeArray<IModelDecoration>
            abstract deltaDecorations: oldDecorations: ResizeArray<string> * newDecorations: ResizeArray<IModelDeltaDecoration> -> ResizeArray<string>
            abstract getLayoutInfo: unit -> EditorLayoutInfo

        type [<AllowNullLiteral>] ICommonDiffEditor =
            inherit IEditor
            abstract onDidUpdateDiff: listener: (unit -> unit) -> IDisposable
            abstract saveViewState: unit -> IDiffEditorViewState
            abstract restoreViewState: state: IDiffEditorViewState -> unit
            abstract getModel: unit -> IDiffEditorModel
            abstract getOriginalEditor: unit -> ICommonCodeEditor
            abstract getModifiedEditor: unit -> ICommonCodeEditor
            abstract getLineChanges: unit -> ResizeArray<ILineChange>
            abstract getDiffLineInformationForOriginal: lineNumber: int -> IDiffLineInformation
            abstract getDiffLineInformationForModified: lineNumber: int -> IDiffLineInformation
            abstract getValue: ?options: obj -> string

        type [<AllowNullLiteral>] EditorTypeType =
            abstract ICodeEditor: string with get, set
            abstract IDiffEditor: string with get, set

        type [<AllowNullLiteral>] IModelLanguageChangedEvent =
            abstract oldLanguage: string with get, set
            abstract newLanguage: string with get, set

        type [<AllowNullLiteral>] IModelContentChange =
            abstract range: IRange with get, set
            abstract rangeLength: float with get, set
            abstract text: string with get, set

        type [<AllowNullLiteral>] IModelContentChangedEvent =
            abstract changes: ResizeArray<IModelContentChange> with get, set
            abstract eol: string with get, set
            abstract versionId: float with get, set
            abstract isUndoing: bool with get, set
            abstract isRedoing: bool with get, set
            abstract isFlush: bool with get, set

        type [<AllowNullLiteral>] IModelDecorationsChangedEvent =
            abstract addedDecorations: ResizeArray<string> with get, set
            abstract changedDecorations: ResizeArray<string> with get, set
            abstract removedDecorations: ResizeArray<string> with get, set

        type [<AllowNullLiteral>] IModelTokensChangedEvent =
            abstract ranges: ResizeArray<obj> with get, set

        type [<AllowNullLiteral>] IModelOptionsChangedEvent =
            abstract tabSize: bool with get, set
            abstract insertSpaces: bool with get, set
            abstract trimAutoWhitespace: bool with get, set

        type CursorChangeReason =
            | NotSet = 0
            | ContentFlush = 1
            | RecoverFromMarkers = 2
            | Explicit = 3
            | Paste = 4
            | Undo = 5
            | Redo = 6

        type [<AllowNullLiteral>] ICursorPositionChangedEvent =
            abstract position: Position with get, set
            abstract secondaryPositions: ResizeArray<Position> with get, set
            abstract reason: CursorChangeReason with get, set
            abstract source: string with get, set

        type [<AllowNullLiteral>] ICursorSelectionChangedEvent =
            abstract selection: Selection with get, set
            abstract secondarySelections: ResizeArray<Selection> with get, set
            abstract source: string with get, set
            abstract reason: CursorChangeReason with get, set

        type [<AllowNullLiteral>] IEditorScrollbarOptions =
            abstract arrowSize: float option with get, set
            abstract vertical: string option with get, set
            abstract horizontal: string option with get, set
            abstract useShadows: bool option with get, set
            abstract verticalHasArrows: bool option with get, set
            abstract horizontalHasArrows: bool option with get, set
            abstract handleMouseWheel: bool option with get, set
            abstract horizontalScrollbarSize: float option with get, set
            abstract verticalScrollbarSize: float option with get, set
            abstract verticalSliderSize: float option with get, set
            abstract horizontalSliderSize: float option with get, set

        type [<AllowNullLiteral>] IEditorFindOptions =
            abstract seedSearchStringFromSelection: bool option with get, set
            abstract autoFindInSelection: bool with get, set

        type [<AllowNullLiteral>] IEditorMinimapOptions =
            abstract enabled: bool option with get, set
            abstract showSlider: U2<obj, obj> option with get, set
            abstract renderCharacters: bool option with get, set
            abstract maxColumn: float option with get, set

        type [<AllowNullLiteral>] IEditorOptions =
            abstract ariaLabel: string option with get, set
            abstract rulers: ResizeArray<float> option with get, set
            abstract wordSeparators: string option with get, set
            abstract selectionClipboard: bool option with get, set
            abstract lineNumbers: U4<obj, obj, obj, (float -> string)> option with get, set
            abstract selectOnLineNumbers: bool option with get, set
            abstract lineNumbersMinChars: float option with get, set
            abstract glyphMargin: bool option with get, set
            abstract lineDecorationsWidth: U2<float, string> option with get, set
            abstract revealHorizontalRightPadding: float option with get, set
            abstract roundedSelection: bool option with get, set
            abstract extraEditorClassName: string option with get, set
            abstract readOnly: bool option with get, set
            abstract scrollbar: IEditorScrollbarOptions option with get, set
            abstract minimap: IEditorMinimapOptions option with get, set
            abstract find: IEditorFindOptions option with get, set
            abstract fixedOverflowWidgets: bool option with get, set
            abstract overviewRulerLanes: float option with get, set
            abstract overviewRulerBorder: bool option with get, set
            abstract cursorBlinking: string option with get, set
            abstract mouseWheelZoom: bool option with get, set
            abstract cursorStyle: string option with get, set
            abstract fontLigatures: bool option with get, set
            abstract disableLayerHinting: bool option with get, set
            abstract disableMonospaceOptimizations: bool option with get, set
            abstract hideCursorInOverviewRuler: bool option with get, set
            abstract scrollBeyondLastLine: bool option with get, set
            abstract automaticLayout: bool option with get, set
            abstract wordWrap: U4<obj, obj, obj, obj> option with get, set
            abstract wordWrapColumn: float option with get, set
            abstract wordWrapMinified: bool option with get, set
            abstract wrappingIndent: string option with get, set
            abstract wordWrapBreakBeforeCharacters: string option with get, set
            abstract wordWrapBreakAfterCharacters: string option with get, set
            abstract wordWrapBreakObtrusiveCharacters: string option with get, set
            abstract stopRenderingLineAfter: float option with get, set
            abstract hover: bool option with get, set
            abstract links: bool option with get, set
            abstract contextmenu: bool option with get, set
            abstract mouseWheelScrollSensitivity: float option with get, set
            abstract multiCursorModifier: U2<obj, obj> option with get, set
            abstract accessibilitySupport: U3<obj, obj, obj> option with get, set
            abstract quickSuggestions: U2<bool, obj> option with get, set
            abstract quickSuggestionsDelay: float option with get, set
            abstract parameterHints: bool option with get, set
            abstract iconsInSuggestions: bool option with get, set
            abstract autoClosingBrackets: bool option with get, set
            abstract autoIndent: bool option with get, set
            abstract formatOnType: bool option with get, set
            abstract formatOnPaste: bool option with get, set
            abstract dragAndDrop: bool option with get, set
            abstract suggestOnTriggerCharacters: bool option with get, set
            abstract acceptSuggestionOnEnter: U3<obj, obj, obj> option with get, set
            abstract acceptSuggestionOnCommitCharacter: bool option with get, set
            abstract snippetSuggestions: U4<obj, obj, obj, obj> option with get, set
            abstract emptySelectionClipboard: bool option with get, set
            abstract wordBasedSuggestions: bool option with get, set
            abstract suggestFontSize: float option with get, set
            abstract suggestLineHeight: float option with get, set
            abstract selectionHighlight: bool option with get, set
            abstract occurrencesHighlight: bool option with get, set
            abstract codeLens: bool option with get, set
            abstract folding: bool option with get, set
            abstract showFoldingControls: U2<obj, obj> option with get, set
            abstract matchBrackets: bool option with get, set
            abstract renderWhitespace: U3<obj, obj, obj> option with get, set
            abstract renderControlCharacters: bool option with get, set
            abstract renderIndentGuides: bool option with get, set
            abstract renderLineHighlight: U4<obj, obj, obj, obj> option with get, set
            abstract useTabStops: bool option with get, set
            abstract fontFamily: string option with get, set
            abstract fontWeight: obj option with get, set
            abstract fontSize: float option with get, set
            abstract lineHeight: float option with get, set
            abstract letterSpacing: float option with get, set

        type [<AllowNullLiteral>] IDiffEditorOptions =
            inherit IEditorOptions
            abstract enableSplitViewResizing: bool option with get, set
            abstract renderSideBySide: bool option with get, set
            abstract ignoreTrimWhitespace: bool option with get, set
            abstract renderIndicators: bool option with get, set
            abstract originalEditable: bool option with get, set

        type RenderMinimap =
            | None = 0
            | Small = 1
            | Large = 2
            | SmallBlocks = 3
            | LargeBlocks = 4

        type WrappingIndent =
            | None = 0
            | Same = 1
            | Indent = 2

        type TextEditorCursorBlinkingStyle =
            | Hidden = 0
            | Blink = 1
            | Smooth = 2
            | Phase = 3
            | Expand = 4
            | Solid = 5

        type TextEditorCursorStyle =
            | Line = 1
            | Block = 2
            | Underline = 3
            | LineThin = 4
            | BlockOutline = 5
            | UnderlineThin = 6

        type [<AllowNullLiteral>] InternalEditorScrollbarOptions =
            abstract arrowSize: float with get, set
            abstract vertical: ScrollbarVisibility with get, set
            abstract horizontal: ScrollbarVisibility with get, set
            abstract useShadows: bool with get, set
            abstract verticalHasArrows: bool with get, set
            abstract horizontalHasArrows: bool with get, set
            abstract handleMouseWheel: bool with get, set
            abstract horizontalScrollbarSize: float with get, set
            abstract horizontalSliderSize: float with get, set
            abstract verticalScrollbarSize: float with get, set
            abstract verticalSliderSize: float with get, set
            abstract mouseWheelScrollSensitivity: float with get, set

        type [<AllowNullLiteral>] InternalEditorMinimapOptions =
            abstract enabled: bool with get, set
            abstract showSlider: U2<obj, obj> with get, set
            abstract renderCharacters: bool with get, set
            abstract maxColumn: float with get, set

        type [<AllowNullLiteral>] InternalEditorFindOptions =
            abstract seedSearchStringFromSelection: bool with get, set
            abstract autoFindInSelection: bool with get, set

        type [<AllowNullLiteral>] EditorWrappingInfo =
            abstract inDiffEditor: bool with get, set
            abstract isDominatedByLongLines: bool with get, set
            abstract isWordWrapMinified: bool with get, set
            abstract isViewportWrapping: bool with get, set
            abstract wrappingColumn: float with get, set
            abstract wrappingIndent: WrappingIndent with get, set
            abstract wordWrapBreakBeforeCharacters: string with get, set
            abstract wordWrapBreakAfterCharacters: string with get, set
            abstract wordWrapBreakObtrusiveCharacters: string with get, set

        type [<AllowNullLiteral>] InternalEditorViewOptions =
            abstract extraEditorClassName: string with get, set
            abstract disableMonospaceOptimizations: bool with get, set
            abstract rulers: ResizeArray<float> with get, set
            abstract ariaLabel: string with get, set
            abstract renderLineNumbers: bool with get, set
            abstract renderCustomLineNumbers: (float -> string) with get, set
            abstract renderRelativeLineNumbers: bool with get, set
            abstract selectOnLineNumbers: bool with get, set
            abstract glyphMargin: bool with get, set
            abstract revealHorizontalRightPadding: float with get, set
            abstract roundedSelection: bool with get, set
            abstract overviewRulerLanes: float with get, set
            abstract overviewRulerBorder: bool with get, set
            abstract cursorBlinking: TextEditorCursorBlinkingStyle with get, set
            abstract mouseWheelZoom: bool with get, set
            abstract cursorStyle: TextEditorCursorStyle with get, set
            abstract hideCursorInOverviewRuler: bool with get, set
            abstract scrollBeyondLastLine: bool with get, set
            abstract stopRenderingLineAfter: float with get, set
            abstract renderWhitespace: U3<obj, obj, obj> with get, set
            abstract renderControlCharacters: bool with get, set
            abstract fontLigatures: bool with get, set
            abstract renderIndentGuides: bool with get, set
            abstract renderLineHighlight: U4<obj, obj, obj, obj> with get, set
            abstract scrollbar: InternalEditorScrollbarOptions with get, set
            abstract minimap: InternalEditorMinimapOptions with get, set
            abstract fixedOverflowWidgets: bool with get, set

        type [<AllowNullLiteral>] EditorContribOptions =
            abstract selectionClipboard: bool with get, set
            abstract hover: bool with get, set
            abstract links: bool with get, set
            abstract contextmenu: bool with get, set
            abstract quickSuggestions: U2<bool, obj> with get, set
            abstract quickSuggestionsDelay: float with get, set
            abstract parameterHints: bool with get, set
            abstract iconsInSuggestions: bool with get, set
            abstract formatOnType: bool with get, set
            abstract formatOnPaste: bool with get, set
            abstract suggestOnTriggerCharacters: bool with get, set
            abstract acceptSuggestionOnEnter: U3<obj, obj, obj> with get, set
            abstract acceptSuggestionOnCommitCharacter: bool with get, set
            abstract snippetSuggestions: U4<obj, obj, obj, obj> with get, set
            abstract wordBasedSuggestions: bool with get, set
            abstract suggestFontSize: float with get, set
            abstract suggestLineHeight: float with get, set
            abstract selectionHighlight: bool with get, set
            abstract occurrencesHighlight: bool with get, set
            abstract codeLens: bool with get, set
            abstract folding: bool with get, set
            abstract showFoldingControls: U2<obj, obj> with get, set
            abstract matchBrackets: bool with get, set
            abstract find: InternalEditorFindOptions with get, set

        type [<AllowNullLiteral>] [<Import("editor.InternalEditorOptions","monaco")>] InternalEditorOptions() =
            member __._internalEditorOptionsBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
            member __.canUseLayerHinting with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.pixelRatio with get(): float = jsNative and set(v: float): unit = jsNative
            member __.editorClassName with get(): string = jsNative and set(v: string): unit = jsNative
            member __.lineHeight with get(): float = jsNative and set(v: float): unit = jsNative
            member __.readOnly with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.multiCursorModifier with get(): U3<obj, obj, obj> = jsNative and set(v: U3<obj, obj, obj>): unit = jsNative
            member __.wordSeparators with get(): string = jsNative and set(v: string): unit = jsNative
            member __.autoClosingBrackets with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.autoIndent with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.useTabStops with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.tabFocusMode with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.dragAndDrop with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.emptySelectionClipboard with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.layoutInfo with get(): EditorLayoutInfo = jsNative and set(v: EditorLayoutInfo): unit = jsNative
            member __.fontInfo with get(): FontInfo = jsNative and set(v: FontInfo): unit = jsNative
            member __.viewInfo with get(): InternalEditorViewOptions = jsNative and set(v: InternalEditorViewOptions): unit = jsNative
            member __.wrappingInfo with get(): EditorWrappingInfo = jsNative and set(v: EditorWrappingInfo): unit = jsNative
            member __.contribInfo with get(): EditorContribOptions = jsNative and set(v: EditorContribOptions): unit = jsNative

        type [<AllowNullLiteral>] OverviewRulerPosition =
            abstract width: float with get, set
            abstract height: float with get, set
            abstract top: float with get, set
            abstract right: float with get, set

        type [<AllowNullLiteral>] EditorLayoutInfo =
            abstract width: float with get, set
            abstract height: float with get, set
            abstract glyphMarginLeft: float with get, set
            abstract glyphMarginWidth: float with get, set
            abstract glyphMarginHeight: float with get, set
            abstract lineNumbersLeft: float with get, set
            abstract lineNumbersWidth: float with get, set
            abstract lineNumbersHeight: float with get, set
            abstract decorationsLeft: float with get, set
            abstract decorationsWidth: float with get, set
            abstract decorationsHeight: float with get, set
            abstract contentLeft: float with get, set
            abstract contentWidth: float with get, set
            abstract contentHeight: float with get, set
            abstract minimapWidth: float with get, set
            abstract renderMinimap: RenderMinimap with get, set
            abstract viewportColumn: float with get, set
            abstract verticalScrollbarWidth: float with get, set
            abstract horizontalScrollbarHeight: float with get, set
            abstract overviewRuler: OverviewRulerPosition with get, set

        type [<AllowNullLiteral>] IConfigurationChangedEvent =
            abstract canUseLayerHinting: bool with get, set
            abstract pixelRatio: bool with get, set
            abstract editorClassName: bool with get, set
            abstract lineHeight: bool with get, set
            abstract readOnly: bool with get, set
            abstract accessibilitySupport: bool with get, set
            abstract multiCursorModifier: bool with get, set
            abstract wordSeparators: bool with get, set
            abstract autoClosingBrackets: bool with get, set
            abstract autoIndent: bool with get, set
            abstract useTabStops: bool with get, set
            abstract tabFocusMode: bool with get, set
            abstract dragAndDrop: bool with get, set
            abstract emptySelectionClipboard: bool with get, set
            abstract layoutInfo: bool with get, set
            abstract fontInfo: bool with get, set
            abstract viewInfo: bool with get, set
            abstract wrappingInfo: bool with get, set
            abstract contribInfo: bool with get, set

        type [<AllowNullLiteral>] IViewZone =
            abstract afterLineNumber: float with get, set
            abstract afterColumn: float option with get, set
            abstract suppressMouseDown: bool option with get, set
            abstract heightInLines: float option with get, set
            abstract heightInPx: float option with get, set
            abstract domNode: HTMLElement with get, set
            abstract marginDomNode: HTMLElement option with get, set
            abstract onDomNodeTop: (float -> unit) option with get, set
            abstract onComputedHeight: (float -> unit) option with get, set

        type [<AllowNullLiteral>] IViewZoneChangeAccessor =
            abstract addZone: zone: IViewZone -> float
            abstract removeZone: id: float -> unit
            abstract layoutZone: id: float -> unit

        type ContentWidgetPositionPreference =
            | EXACT = 0
            | ABOVE = 1
            | BELOW = 2

        type [<AllowNullLiteral>] IContentWidgetPosition =
            abstract position: IPosition with get, set
            abstract preference: ResizeArray<ContentWidgetPositionPreference> with get, set

        type [<AllowNullLiteral>] IContentWidget =
            abstract allowEditorOverflow: bool option with get, set
            abstract suppressMouseDown: bool option with get, set
            abstract getId: unit -> string
            abstract getDomNode: unit -> HTMLElement
            abstract getPosition: unit -> IContentWidgetPosition

        type OverlayWidgetPositionPreference =
            | TOP_RIGHT_CORNER = 0
            | BOTTOM_RIGHT_CORNER = 1
            | TOP_CENTER = 2

        type [<AllowNullLiteral>] IOverlayWidgetPosition =
            abstract preference: OverlayWidgetPositionPreference with get, set

        type [<AllowNullLiteral>] IOverlayWidget =
            abstract getId: unit -> string
            abstract getDomNode: unit -> HTMLElement
            abstract getPosition: unit -> IOverlayWidgetPosition

        type MouseTargetType =
            | UNKNOWN = 0
            | TEXTAREA = 1
            | GUTTER_GLYPH_MARGIN = 2
            | GUTTER_LINE_NUMBERS = 3
            | GUTTER_LINE_DECORATIONS = 4
            | GUTTER_VIEW_ZONE = 5
            | CONTENT_TEXT = 6
            | CONTENT_EMPTY = 7
            | CONTENT_VIEW_ZONE = 8
            | CONTENT_WIDGET = 9
            | OVERVIEW_RULER = 10
            | SCROLLBAR = 11
            | OVERLAY_WIDGET = 12
            | OUTSIDE_EDITOR = 13

        type [<AllowNullLiteral>] IMouseTarget =
            abstract element: Element with get, set
            abstract ``type``: MouseTargetType with get, set
            abstract position: Position with get, set
            abstract mouseColumn: float with get, set
            abstract range: Range with get, set
            abstract detail: obj with get, set

        type [<AllowNullLiteral>] IEditorMouseEvent =
            abstract ``event``: IMouseEvent with get, set
            abstract target: IMouseTarget with get, set

        type [<AllowNullLiteral>] ICodeEditor =
            inherit ICommonCodeEditor
            abstract onMouseUp: listener: (IEditorMouseEvent -> unit) -> IDisposable
            abstract onMouseDown: listener: (IEditorMouseEvent -> unit) -> IDisposable
            abstract onContextMenu: listener: (IEditorMouseEvent -> unit) -> IDisposable
            abstract onMouseMove: listener: (IEditorMouseEvent -> unit) -> IDisposable
            abstract onMouseLeave: listener: (IEditorMouseEvent -> unit) -> IDisposable
            abstract onKeyUp: listener: (IKeyboardEvent -> unit) -> IDisposable
            abstract onKeyDown: listener: (IKeyboardEvent -> unit) -> IDisposable
            abstract onDidLayoutChange: listener: (EditorLayoutInfo -> unit) -> IDisposable
            abstract onDidScrollChange: listener: (IScrollEvent -> unit) -> IDisposable
            abstract getDomNode: unit -> HTMLElement
            abstract addContentWidget: widget: IContentWidget -> unit
            abstract layoutContentWidget: widget: IContentWidget -> unit
            abstract removeContentWidget: widget: IContentWidget -> unit
            abstract addOverlayWidget: widget: IOverlayWidget -> unit
            abstract layoutOverlayWidget: widget: IOverlayWidget -> unit
            abstract removeOverlayWidget: widget: IOverlayWidget -> unit
            abstract changeViewZones: callback: (IViewZoneChangeAccessor -> unit) -> unit
            abstract getCenteredRangeInViewport: unit -> Range
            abstract getOffsetForColumn: lineNumber: int * column: int -> int
            abstract render: unit -> unit
            abstract getTopForLineNumber: lineNumber: int -> int
            abstract getTopForPosition: lineNumber: int * column: int -> int
            abstract getTargetAtClientPoint: clientX: float * clientY: float -> IMouseTarget
            abstract getScrolledVisiblePosition: position: IPosition -> obj
            abstract applyFontInfo: target: HTMLElement -> unit

        type [<AllowNullLiteral>] IDiffEditor =
            inherit ICommonDiffEditor
            abstract getDomNode: unit -> HTMLElement

        type [<AllowNullLiteral>] [<Import("editor.FontInfo","monaco")>] FontInfo() =
            inherit BareFontInfo()
            member __._editorStylingBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
            member __.isTrusted with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.isMonospace with get(): bool = jsNative and set(v: bool): unit = jsNative
            member __.typicalHalfwidthCharacterWidth with get(): float = jsNative and set(v: float): unit = jsNative
            member __.typicalFullwidthCharacterWidth with get(): float = jsNative and set(v: float): unit = jsNative
            member __.spaceWidth with get(): float = jsNative and set(v: float): unit = jsNative
            member __.maxDigitWidth with get(): float = jsNative and set(v: float): unit = jsNative

        type [<AllowNullLiteral>] [<Import("editor.BareFontInfo","monaco")>] BareFontInfo() =
            member __._bareFontInfoBrand with get(): unit = jsNative and set(v: unit): unit = jsNative
            member __.zoomLevel with get(): float = jsNative and set(v: float): unit = jsNative
            member __.fontFamily with get(): string = jsNative and set(v: string): unit = jsNative
            member __.fontWeight with get(): string = jsNative and set(v: string): unit = jsNative
            member __.fontSize with get(): float = jsNative and set(v: float): unit = jsNative
            member __.lineHeight with get(): float = jsNative and set(v: float): unit = jsNative
            member __.letterSpacing with get(): float = jsNative and set(v: float): unit = jsNative

        type [<Import("editor","monaco")>] Globals =
            static member EditorType with get(): EditorTypeType = jsNative and set(v: EditorTypeType): unit = jsNative
            static member create(domElement: HTMLElement, ?options: IEditorConstructionOptions, ?``override``: IEditorOverrideServices): IStandaloneCodeEditor = jsNative
            static member onDidCreateEditor(listener: (ICodeEditor -> unit)): IDisposable = jsNative
            static member createDiffEditor(domElement: HTMLElement, ?options: IDiffEditorConstructionOptions, ?``override``: IEditorOverrideServices): IStandaloneDiffEditor = jsNative
            static member createDiffNavigator(diffEditor: IStandaloneDiffEditor, ?opts: IDiffNavigatorOptions): IDiffNavigator = jsNative
            static member createModel(value: string, ?language: string, ?uri: Uri): IModel = jsNative
            static member setModelLanguage(model: IModel, language: string): unit = jsNative
            static member setModelMarkers(model: IModel, owner: string, markers: ResizeArray<IMarkerData>): unit = jsNative
            static member getModelMarkers(filter: obj): ResizeArray<IMarker> = jsNative
            static member getModel(uri: Uri): IModel = jsNative
            static member getModels(): ResizeArray<IModel> = jsNative
            static member onDidCreateModel(listener: (IModel -> unit)): IDisposable = jsNative
            static member onWillDisposeModel(listener: (IModel -> unit)): IDisposable = jsNative
            static member onDidChangeModelLanguage(listener: (obj -> unit)): IDisposable = jsNative
            static member createWebWorker(opts: IWebWorkerOptions): MonacoWebWorker<'T> = jsNative
            static member colorizeElement(domNode: HTMLElement, options: IColorizerElementOptions): Promise<unit> = jsNative
            static member colorize(text: string, languageId: string, options: IColorizerOptions): Promise<string> = jsNative
            static member colorizeModelLine(model: IModel, lineNumber: int, ?tabSize: float): string = jsNative
            static member tokenize(text: string, languageId: string): ResizeArray<ResizeArray<Token>> = jsNative
            static member defineTheme(themeName: string, themeData: IStandaloneThemeData): unit = jsNative
            static member setTheme(themeName: string): unit = jsNative



    module languages =
        type [<AllowNullLiteral>] IToken =
            abstract startIndex: float with get, set
            abstract scopes: string with get, set

        type [<AllowNullLiteral>] ILineTokens =
            abstract tokens: ResizeArray<IToken> with get, set
            abstract endState: IState with get, set

        type [<AllowNullLiteral>] TokensProvider =
            abstract getInitialState: unit -> IState
            abstract tokenize: line: string * state: IState -> ILineTokens

        type [<AllowNullLiteral>] CodeActionContext =
            abstract markers: ResizeArray<editor.IMarkerData> with get, set

        type [<AllowNullLiteral>] CodeActionProvider =
            abstract provideCodeActions: model: editor.IReadOnlyModel * range: Range * context: CodeActionContext * token: CancellationToken -> U2<ResizeArray<Command>, Promise<ResizeArray<Command>>>

        type CompletionItemKind =
            | Text = 0
            | Method = 1
            | Function = 2
            | Constructor = 3
            | Field = 4
            | Variable = 5
            | Class = 6
            | Interface = 7
            | Module = 8
            | Property = 9
            | Unit = 10
            | Value = 11
            | Enum = 12
            | Keyword = 13
            | Snippet = 14
            | Color = 15
            | File = 16
            | Reference = 17
            | Folder = 18

        type [<AllowNullLiteral>] SnippetString =
            abstract value: string with get, set

        type [<AllowNullLiteral>] CompletionItem =
            abstract label: string with get, set
            abstract kind: CompletionItemKind with get, set
            abstract detail: string option with get, set
            abstract documentation: string option with get, set
            abstract sortText: string option with get, set
            abstract filterText: string option with get, set
            abstract insertText: U2<string, SnippetString> option with get, set
            abstract range: Range option with get, set
            abstract textEdit: editor.ISingleEditOperation option with get, set

        type [<AllowNullLiteral>] CompletionList =
            abstract isIncomplete: bool option with get, set
            abstract items: ResizeArray<CompletionItem> with get, set

        type [<AllowNullLiteral>] CompletionItemProvider =
            abstract triggerCharacters: ResizeArray<string> option with get, set
            abstract provideCompletionItems: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U4<ResizeArray<CompletionItem>, JS.Promise<ResizeArray<CompletionItem>>, CompletionList, Promise<CompletionList>>
            abstract resolveCompletionItem: item: CompletionItem * token: CancellationToken -> U2<CompletionItem, Promise<CompletionItem>>

        type [<AllowNullLiteral>] CommentRule =
            abstract lineComment: string option with get, set
            abstract blockComment: CharacterPair option with get, set

        type [<AllowNullLiteral>] LanguageConfiguration =
            abstract comments: CommentRule option with get, set
            abstract brackets: ResizeArray<CharacterPair> option with get, set
            abstract wordPattern: Regex option with get, set
            abstract indentationRules: IndentationRule option with get, set
            abstract onEnterRules: ResizeArray<OnEnterRule> option with get, set
            abstract autoClosingPairs: ResizeArray<IAutoClosingPairConditional> option with get, set
            abstract surroundingPairs: ResizeArray<IAutoClosingPair> option with get, set
            abstract ___electricCharacterSupport: IBracketElectricCharacterContribution option with get, set

        type [<AllowNullLiteral>] IndentationRule =
            abstract decreaseIndentPattern: Regex with get, set
            abstract increaseIndentPattern: Regex with get, set
            abstract indentNextLinePattern: Regex option with get, set
            abstract unIndentedLinePattern: Regex option with get, set

        type [<AllowNullLiteral>] OnEnterRule =
            abstract beforeText: Regex with get, set
            abstract afterText: Regex option with get, set
            abstract action: EnterAction with get, set

        type [<AllowNullLiteral>] IBracketElectricCharacterContribution =
            abstract docComment: IDocComment option with get, set

        type [<AllowNullLiteral>] IDocComment =
            abstract ``open``: string with get, set
            abstract close: string with get, set

        type CharacterPair =
            string * string

        type [<AllowNullLiteral>] IAutoClosingPair =
            abstract ``open``: string with get, set
            abstract close: string with get, set

        type [<AllowNullLiteral>] IAutoClosingPairConditional =
            inherit IAutoClosingPair
            abstract notIn: ResizeArray<string> option with get, set

        type IndentAction =
            | None = 0
            | Indent = 1
            | IndentOutdent = 2
            | Outdent = 3

        type [<AllowNullLiteral>] EnterAction =
            abstract indentAction: IndentAction with get, set
            abstract outdentCurrentLine: bool option with get, set
            abstract appendText: string option with get, set
            abstract removeText: float option with get, set

        type [<AllowNullLiteral>] IState =
            abstract clone: unit -> IState
            abstract equals: other: IState -> bool

        type [<AllowNullLiteral>] Hover =
            abstract contents: ResizeArray<MarkedString> with get, set
            abstract range: IRange with get, set

        type [<AllowNullLiteral>] HoverProvider =
            abstract provideHover: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<Hover, Promise<Hover>>

        type [<AllowNullLiteral>] ParameterInformation =
            abstract label: string with get, set
            abstract documentation: string option with get, set

        type [<AllowNullLiteral>] SignatureInformation =
            abstract label: string with get, set
            abstract documentation: string option with get, set
            abstract parameters: ResizeArray<ParameterInformation> with get, set

        type [<AllowNullLiteral>] SignatureHelp =
            abstract signatures: ResizeArray<SignatureInformation> with get, set
            abstract activeSignature: float with get, set
            abstract activeParameter: float with get, set

        type [<AllowNullLiteral>] SignatureHelpProvider =
            abstract signatureHelpTriggerCharacters: ResizeArray<string> with get, set
            abstract provideSignatureHelp: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<SignatureHelp, Promise<SignatureHelp>>

        type DocumentHighlightKind =
            | Text = 0
            | Read = 1
            | Write = 2

        type [<AllowNullLiteral>] DocumentHighlight =
            abstract range: IRange with get, set
            abstract kind: DocumentHighlightKind with get, set

        type [<AllowNullLiteral>] DocumentHighlightProvider =
            abstract provideDocumentHighlights: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<ResizeArray<DocumentHighlight>, Promise<ResizeArray<DocumentHighlight>>>

        type [<AllowNullLiteral>] ReferenceContext =
            abstract includeDeclaration: bool with get, set

        type [<AllowNullLiteral>] ReferenceProvider =
            abstract provideReferences: model: editor.IReadOnlyModel * position: Position * context: ReferenceContext * token: CancellationToken -> U2<ResizeArray<Location>, Promise<ResizeArray<Location>>>

        type [<AllowNullLiteral>] Location =
            abstract uri: Uri with get, set
            abstract range: IRange with get, set

        type Definition =
            U2<Location, ResizeArray<Location>>

        type [<AllowNullLiteral>] DefinitionProvider =
            abstract provideDefinition: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<Definition, Promise<Definition>>

        type [<AllowNullLiteral>] ImplementationProvider =
            abstract provideImplementation: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<Definition, Promise<Definition>>

        type [<AllowNullLiteral>] TypeDefinitionProvider =
            abstract provideTypeDefinition: model: editor.IReadOnlyModel * position: Position * token: CancellationToken -> U2<Definition, Promise<Definition>>

        type SymbolKind =
            | File = 0
            | Module = 1
            | Namespace = 2
            | Package = 3
            | Class = 4
            | Method = 5
            | Property = 6
            | Field = 7
            | Constructor = 8
            | Enum = 9
            | Interface = 10
            | Function = 11
            | Variable = 12
            | Constant = 13
            | String = 14
            | Number = 15
            | Boolean = 16
            | Array = 17
            | Object = 18
            | Key = 19
            | Null = 20
            | EnumMember = 21
            | Struct = 22
            | Event = 23
            | Operator = 24
            | TypeParameter = 25

        type [<AllowNullLiteral>] SymbolInformation =
            abstract name: string with get, set
            abstract containerName: string option with get, set
            abstract kind: SymbolKind with get, set
            abstract location: Location with get, set

        type [<AllowNullLiteral>] DocumentSymbolProvider =
            abstract provideDocumentSymbols: model: editor.IReadOnlyModel * token: CancellationToken -> U2<ResizeArray<SymbolInformation>, Promise<ResizeArray<SymbolInformation>>>

        type [<AllowNullLiteral>] TextEdit =
            abstract range: IRange with get, set
            abstract text: string with get, set
            abstract eol: editor.EndOfLineSequence option with get, set

        type [<AllowNullLiteral>] FormattingOptions =
            abstract tabSize: float with get, set
            abstract insertSpaces: bool with get, set

        type [<AllowNullLiteral>] DocumentFormattingEditProvider =
            abstract provideDocumentFormattingEdits: model: editor.IReadOnlyModel * options: FormattingOptions * token: CancellationToken -> U2<ResizeArray<TextEdit>, Promise<ResizeArray<TextEdit>>>

        type [<AllowNullLiteral>] DocumentRangeFormattingEditProvider =
            abstract provideDocumentRangeFormattingEdits: model: editor.IReadOnlyModel * range: Range * options: FormattingOptions * token: CancellationToken -> U2<ResizeArray<TextEdit>, Promise<ResizeArray<TextEdit>>>

        type [<AllowNullLiteral>] OnTypeFormattingEditProvider =
            abstract autoFormatTriggerCharacters: ResizeArray<string> with get, set
            abstract provideOnTypeFormattingEdits: model: editor.IReadOnlyModel * position: Position * ch: string * options: FormattingOptions * token: CancellationToken -> U2<ResizeArray<TextEdit>, Promise<ResizeArray<TextEdit>>>

        type [<AllowNullLiteral>] ILink =
            abstract range: IRange with get, set
            abstract url: string with get, set

        type [<AllowNullLiteral>] LinkProvider =
            abstract resolveLink: (ILink -> CancellationToken -> U2<ILink, Promise<ILink>>) option with get, set
            abstract provideLinks: model: editor.IReadOnlyModel * token: CancellationToken -> U2<ResizeArray<ILink>, Promise<ResizeArray<ILink>>>

        type [<AllowNullLiteral>] IResourceEdit =
            abstract resource: Uri with get, set
            abstract range: IRange with get, set
            abstract newText: string with get, set

        type [<AllowNullLiteral>] WorkspaceEdit =
            abstract edits: ResizeArray<IResourceEdit> with get, set
            abstract rejectReason: string option with get, set

        type [<AllowNullLiteral>] RenameProvider =
            abstract provideRenameEdits: model: editor.IReadOnlyModel * position: Position * newName: string * token: CancellationToken -> U2<WorkspaceEdit, Promise<WorkspaceEdit>>

        type [<AllowNullLiteral>] Command =
            abstract id: string with get, set
            abstract title: string with get, set
            abstract tooltip: string option with get, set
            abstract arguments: ResizeArray<obj> option with get, set

        type [<AllowNullLiteral>] ICodeLensSymbol =
            abstract range: IRange with get, set
            abstract id: string option with get, set
            abstract command: Command option with get, set

        type [<AllowNullLiteral>] CodeLensProvider =
            abstract onDidChange: IEvent<obj> option with get, set
            abstract provideCodeLenses: model: editor.IReadOnlyModel * token: CancellationToken -> U2<ResizeArray<ICodeLensSymbol>, Promise<ResizeArray<ICodeLensSymbol>>>
            abstract resolveCodeLens: model: editor.IReadOnlyModel * codeLens: ICodeLensSymbol * token: CancellationToken -> U2<ICodeLensSymbol, Promise<ICodeLensSymbol>>

        type [<AllowNullLiteral>] ILanguageExtensionPoint =
            abstract id: string with get, set
            abstract extensions: ResizeArray<string> option with get, set
            abstract filenames: ResizeArray<string> option with get, set
            abstract filenamePatterns: ResizeArray<string> option with get, set
            abstract firstLine: string option with get, set
            abstract aliases: ResizeArray<string> option with get, set
            abstract mimetypes: ResizeArray<string> option with get, set
            abstract configuration: string option with get, set

        type [<AllowNullLiteral>] IMonarchLanguage =
            abstract tokenizer: obj with get, set
            abstract ignoreCase: bool option with get, set
            abstract defaultToken: string option with get, set
            abstract brackets: ResizeArray<IMonarchLanguageBracket> option with get, set
            abstract start: string option with get, set
            abstract tokenPostfix: string with get, set

        type [<AllowNullLiteral>] IMonarchLanguageRule =
            abstract regex: U2<string, Regex> option with get, set
            abstract action: IMonarchLanguageAction option with get, set
            abstract ``include``: string option with get, set

        type [<AllowNullLiteral>] IMonarchLanguageAction =
            abstract group: ResizeArray<IMonarchLanguageAction> option with get, set
            abstract cases: obj option with get, set
            abstract token: string option with get, set
            abstract next: string option with get, set
            abstract switchTo: string option with get, set
            abstract goBack: float option with get, set
            abstract bracket: string option with get, set
            abstract nextEmbedded: string option with get, set
            abstract log: string option with get, set

        type [<AllowNullLiteral>] IMonarchLanguageBracket =
            abstract ``open``: string with get, set
            abstract close: string with get, set
            abstract token: string with get, set

        type [<Import("languages","monaco")>] Globals =
            static member register(language: ILanguageExtensionPoint): unit = jsNative
            static member getLanguages(): ResizeArray<ILanguageExtensionPoint> = jsNative
            static member onLanguage(languageId: string, callback: (unit -> unit)): IDisposable = jsNative
            static member setLanguageConfiguration(languageId: string, configuration: LanguageConfiguration): IDisposable = jsNative
            static member setTokensProvider(languageId: string, provider: TokensProvider): IDisposable = jsNative
            static member setMonarchTokensProvider(languageId: string, languageDef: IMonarchLanguage): IDisposable = jsNative
            static member registerReferenceProvider(languageId: string, provider: ReferenceProvider): IDisposable = jsNative
            static member registerRenameProvider(languageId: string, provider: RenameProvider): IDisposable = jsNative
            static member registerSignatureHelpProvider(languageId: string, provider: SignatureHelpProvider): IDisposable = jsNative
            static member registerHoverProvider(languageId: string, provider: HoverProvider): IDisposable = jsNative
            static member registerDocumentSymbolProvider(languageId: string, provider: DocumentSymbolProvider): IDisposable = jsNative
            static member registerDocumentHighlightProvider(languageId: string, provider: DocumentHighlightProvider): IDisposable = jsNative
            static member registerDefinitionProvider(languageId: string, provider: DefinitionProvider): IDisposable = jsNative
            static member registerImplementationProvider(languageId: string, provider: ImplementationProvider): IDisposable = jsNative
            static member registerTypeDefinitionProvider(languageId: string, provider: TypeDefinitionProvider): IDisposable = jsNative
            static member registerCodeLensProvider(languageId: string, provider: CodeLensProvider): IDisposable = jsNative
            static member registerCodeActionProvider(languageId: string, provider: CodeActionProvider): IDisposable = jsNative
            static member registerDocumentFormattingEditProvider(languageId: string, provider: DocumentFormattingEditProvider): IDisposable = jsNative
            static member registerDocumentRangeFormattingEditProvider(languageId: string, provider: DocumentRangeFormattingEditProvider): IDisposable = jsNative
            static member registerOnTypeFormattingEditProvider(languageId: string, provider: OnTypeFormattingEditProvider): IDisposable = jsNative
            static member registerLinkProvider(languageId: string, provider: LinkProvider): IDisposable = jsNative
            static member registerCompletionItemProvider(languageId: string, provider: CompletionItemProvider): IDisposable = jsNative

        module typescript =
            type ModuleKind =
                | None = 0
                | CommonJS = 1
                | AMD = 2
                | UMD = 3
                | System = 4
                | ES2015 = 5

            type JsxEmit =
                | None = 0
                | Preserve = 1
                | React = 2

            type NewLineKind =
                | CarriageReturnLineFeed = 0
                | LineFeed = 1

            type ScriptTarget =
                | ES3 = 0
                | ES5 = 1
                | ES2015 = 2
                | ES2016 = 3
                | ES2017 = 4
                | ESNext = 5
                | Latest = 5

            type ModuleResolutionKind =
                | Classic = 1
                | NodeJs = 2

            type CompilerOptionsValue =
                obj

            type [<AllowNullLiteral>] CompilerOptions =
                abstract allowJs: bool option with get, set
                abstract allowSyntheticDefaultImports: bool option with get, set
                abstract allowUnreachableCode: bool option with get, set
                abstract allowUnusedLabels: bool option with get, set
                abstract alwaysStrict: bool option with get, set
                abstract baseUrl: string option with get, set
                abstract charset: string option with get, set
                abstract declaration: bool option with get, set
                abstract declarationDir: string option with get, set
                abstract disableSizeLimit: bool option with get, set
                abstract emitBOM: bool option with get, set
                abstract emitDecoratorMetadata: bool option with get, set
                abstract experimentalDecorators: bool option with get, set
                abstract forceConsistentCasingInFileNames: bool option with get, set
                abstract importHelpers: bool option with get, set
                abstract inlineSourceMap: bool option with get, set
                abstract inlineSources: bool option with get, set
                abstract isolatedModules: bool option with get, set
                abstract jsx: JsxEmit option with get, set
                abstract lib: ResizeArray<string> option with get, set
                abstract locale: string option with get, set
                abstract mapRoot: string option with get, set
                abstract maxNodeModuleJsDepth: float option with get, set
                abstract ``module``: ModuleKind option with get, set
                abstract moduleResolution: ModuleResolutionKind option with get, set
                abstract newLine: NewLineKind option with get, set
                abstract noEmit: bool option with get, set
                abstract noEmitHelpers: bool option with get, set
                abstract noEmitOnError: bool option with get, set
                abstract noErrorTruncation: bool option with get, set
                abstract noFallthroughCasesInSwitch: bool option with get, set
                abstract noImplicitAny: bool option with get, set
                abstract noImplicitReturns: bool option with get, set
                abstract noImplicitThis: bool option with get, set
                abstract noUnusedLocals: bool option with get, set
                abstract noUnusedParameters: bool option with get, set
                abstract noImplicitUseStrict: bool option with get, set
                abstract noLib: bool option with get, set
                abstract noResolve: bool option with get, set
                abstract out: string option with get, set
                abstract outDir: string option with get, set
                abstract outFile: string option with get, set
                abstract preserveConstEnums: bool option with get, set
                abstract project: string option with get, set
                abstract reactNamespace: string option with get, set
                abstract jsxFactory: string option with get, set
                abstract removeComments: bool option with get, set
                abstract rootDir: string option with get, set
                abstract rootDirs: ResizeArray<string> option with get, set
                abstract skipLibCheck: bool option with get, set
                abstract skipDefaultLibCheck: bool option with get, set
                abstract sourceMap: bool option with get, set
                abstract sourceRoot: string option with get, set
                abstract strictNullChecks: bool option with get, set
                abstract suppressExcessPropertyErrors: bool option with get, set
                abstract suppressImplicitAnyIndexErrors: bool option with get, set
                abstract target: ScriptTarget option with get, set
                abstract traceResolution: bool option with get, set
                abstract types: ResizeArray<string> option with get, set
                abstract typeRoots: ResizeArray<string> option with get, set
                [<Emit("$0[$1]{{=$2}}")>] abstract Item: option: string -> U2<CompilerOptionsValue, obj> with get, set

            type [<AllowNullLiteral>] DiagnosticsOptions =
                abstract noSemanticValidation: bool option with get, set
                abstract noSyntaxValidation: bool option with get, set

            type [<AllowNullLiteral>] LanguageServiceDefaults =
                abstract addExtraLib: content: string * ?filePath: string -> IDisposable
                abstract setCompilerOptions: options: CompilerOptions -> unit
                abstract setDiagnosticsOptions: options: DiagnosticsOptions -> unit
                abstract setMaximunWorkerIdleTime: value: float -> unit
                abstract setEagerModelSync: value: bool -> unit

            type [<Import("languages.typescript","monaco")>] Globals =
                static member typescriptDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member javascriptDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member getTypeScriptWorker with get(): (unit -> Promise<obj>) = jsNative and set(v: (unit -> Promise<obj>)): unit = jsNative
                static member getJavaScriptWorker with get(): (unit -> Promise<obj>) = jsNative and set(v: (unit -> Promise<obj>)): unit = jsNative



        module css =
            type [<AllowNullLiteral>] DiagnosticsOptions =
                abstract validate: bool option with get, set
                abstract lint: obj option with get, set

            type [<AllowNullLiteral>] LanguageServiceDefaults =
                abstract onDidChange: IEvent<LanguageServiceDefaults> with get, set
                abstract diagnosticsOptions: DiagnosticsOptions with get, set
                abstract setDiagnosticsOptions: options: DiagnosticsOptions -> unit

            type [<Import("languages.css","monaco")>] Globals =
                static member cssDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member lessDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member scssDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative



        module json =
            type [<AllowNullLiteral>] DiagnosticsOptions =
                abstract validate: bool option with get, set
                abstract allowComments: bool option with get, set
                abstract schemas: ResizeArray<obj> option with get, set

            type [<AllowNullLiteral>] LanguageServiceDefaults =
                abstract onDidChange: IEvent<LanguageServiceDefaults> with get, set
                abstract diagnosticsOptions: DiagnosticsOptions with get, set
                abstract setDiagnosticsOptions: options: DiagnosticsOptions -> unit

            type [<Import("languages.json","monaco")>] Globals =
                static member jsonDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative



        module html =
            type [<AllowNullLiteral>] HTMLFormatConfiguration =
                abstract tabSize: float with get, set
                abstract insertSpaces: bool with get, set
                abstract wrapLineLength: float with get, set
                abstract unformatted: string with get, set
                abstract contentUnformatted: string with get, set
                abstract indentInnerHtml: bool with get, set
                abstract preserveNewLines: bool with get, set
                abstract maxPreserveNewLines: float with get, set
                abstract indentHandlebars: bool with get, set
                abstract endWithNewline: bool with get, set
                abstract extraLiners: string with get, set
                abstract wrapAttributes: U4<obj, obj, obj, obj> with get, set

            type [<AllowNullLiteral>] CompletionConfiguration =
                [<Emit("$0[$1]{{=$2}}")>] abstract Item: provider: string -> bool with get, set

            type [<AllowNullLiteral>] Options =
                abstract format: HTMLFormatConfiguration option with get, set
                abstract suggest: CompletionConfiguration option with get, set

            type [<AllowNullLiteral>] LanguageServiceDefaults =
                abstract onDidChange: IEvent<LanguageServiceDefaults> with get, set
                abstract options: Options with get, set
                abstract setOptions: options: Options -> unit

            type [<Import("languages.html","monaco")>] Globals =
                static member htmlDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member handlebarDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative
                static member razorDefaults with get(): LanguageServiceDefaults = jsNative and set(v: LanguageServiceDefaults): unit = jsNative



    module worker =
        type [<AllowNullLiteral>] IMirrorModel =
            abstract uri: Uri with get, set
            abstract version: float with get, set
            abstract getValue: unit -> string

        type [<AllowNullLiteral>] IWorkerContext =
            abstract getMirrorModels: unit -> ResizeArray<IMirrorModel>
