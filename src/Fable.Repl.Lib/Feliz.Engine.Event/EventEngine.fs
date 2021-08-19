namespace Feliz

open System
open Browser.Types

module internal EvUtil =
#if FABLE_COMPILER
    let inline cast<'Ev when 'Ev :> Event> (f: 'Ev -> unit): Event -> unit = unbox f
#else
    let cast<'Ev when 'Ev :> Event> (f: 'Ev -> unit): Event -> unit = fun (ev: Event) -> f (ev :?> 'Ev)
#endif

type EventEngine<'Node>
    /// <summary>Customizable HTML Event generator API.</summary>
    ///
    /// <param name="mk">Make a node with event name and handler.</param>
    (mk: string -> (Event -> unit) -> 'Node) =

    /// Fires when a media event is aborted.
    member _.onAbort (handler: Event -> unit) = mk "abort" handler

    /// Fires when animation is aborted.
    member _.onAnimationCancel (handler: AnimationEvent -> unit) = mk "animationCancel" (EvUtil.cast handler)

    /// Fires when animation ends.
    member _.onAnimationEnd (handler: AnimationEvent -> unit) = mk "animationEnd" (EvUtil.cast handler)

    /// Fires when animation iterates.
    member _.onAnimationIteration (handler: AnimationEvent -> unit) = mk "animationIteration" (EvUtil.cast handler)

    /// Fires when animation starts.
    member _.onAnimationStart (handler: AnimationEvent -> unit) = mk "animationStart" (EvUtil.cast handler)

    /// Fires the moment that the element loses focus.
    member _.onBlur (handler: FocusEvent -> unit) = mk "blur" (EvUtil.cast handler)

    /// Fires when a user dismisses the current open dialog
    member _.onCancel (handler: Event -> unit) = mk "cancel" handler

    /// Fires when a file is ready to start playing (when it has buffered enough to begin).
    member _.onCanPlay (handler: Event -> unit) = mk "canPlay" handler

    /// Fires when a file can be played all the way to the end without pausing for buffering
    member _.onCanPlayThrough (handler: Event -> unit) = mk "canPlayThrough" handler

    /// Fires the moment when the value of the element is changed
    member _.onChange (handler: Event -> unit) = mk "change"  handler

    /// Same as `onChange` that takes an event as input but instead let's you deal with the `checked` value changed from the `input` element
    /// directly when it is defined as a checkbox with attribute `inputType.checkbox`.
    member _.onChange (handler: bool -> unit) =
        let handler (ev: Event) =
            let el = ev.target :?> HTMLInputElement
            handler el.``checked``
        mk "change" handler

    /// Same as `onChange` that takes an event as input but instead lets you deal with the selected file directly from the `input` element when it is defined as a checkbox with `prop.type'.file`.
    member _.onChange (handler: File -> unit) =
        let fileHandler (ev: Event) : unit =
            let el = ev.target :?> HTMLInputElement
            let files : FileList = el.files
            if not (isNull files) && files.length > 0 then handler (files.item 0)
        mk "change" fileHandler

    /// Same as `onChange` that takes an event as input but instead lets you deal with the selected files directly from the `input` element when it is defined as a checkbox with `prop.type'.file` and `prop.multiple true`.
    member _.onChange (handler: File list -> unit) =
        let fileHandler (ev: Event) : unit =
            let el = ev.target :?> HTMLInputElement
            let fileList : FileList = el.files
            if not (isNull fileList) then handler [ for i in 0 .. fileList.length - 1 -> fileList.item i ]
        mk "change" fileHandler

    /// Same as `onChange` that takes an event as input but instead let's you deal with the text changed from the `input` element directly
    /// instead of extracting it from the event arguments.
    member _.onChange (handler: string -> unit) =
        let handler (ev: Event) =
            let el = ev.target :?> HTMLInputElement
            handler el.value
        mk "change" handler

    /// Same as `onChange` but let's you deal with the `checked` value that has changed from the `input` element directly instead of extracting it from the event arguments.
    member _.onCheckedChange (handler: bool -> unit) =
        let handler (ev: Event) =
            let el = ev.target :?> HTMLInputElement
            handler el.``checked``
        mk "change" handler

    /// Fires on a mouse click on the element.
    member _.onClick (handler: MouseEvent -> unit) = mk "click" (EvUtil.cast handler)

    /// Fires when composition ends.
    member _.onCompositionEnd (handler: CompositionEvent -> unit) = mk "compositionEnd" (EvUtil.cast handler)

    /// Fires when composition starts.
    member _.onCompositionStart (handler: CompositionEvent -> unit) = mk "compositionStart" (EvUtil.cast handler)

    /// Fires when composition changes.
    member _.onCompositionUpdate (handler: CompositionEvent -> unit) = mk "compositionUpdate" (EvUtil.cast handler)

    /// Fires when a context menu is triggered.
    member _.onContextMenu (handler: MouseEvent -> unit) = mk "contextMenu" (EvUtil.cast handler)

    /// Fires when a TextTrack has changed the currently displaying cues.
    member _.onCueChange (handler: Event -> unit) = mk "cueChange" handler

        /// Fires when the user copies the content of an element.
    member _.onCopy (handler: ClipboardEvent -> unit) = mk "copy" (EvUtil.cast handler)

    /// Fires when the user cuts the content of an element.
    member _.onCut (handler: ClipboardEvent -> unit) = mk "cut" (EvUtil.cast handler)

    /// Fires when a mouse is double clicked on the element.
    member _.onDblClick (handler: MouseEvent -> unit) = mk "dblClick" (EvUtil.cast handler)

    /// Fires when an element is dragged.
    member _.onDrag (handler: DragEvent -> unit) = mk "drag" (EvUtil.cast handler)

    /// Fires when the a drag operation has ended.
    member _.onDragEnd (handler: DragEvent -> unit) = mk "dragEnd" (EvUtil.cast handler)

    /// Fires when an element has been dragged to a valid drop target.
    member _.onDragEnter (handler: DragEvent -> unit) = mk "dragEnter" (EvUtil.cast handler)

    member _.onDragExit (handler: DragEvent -> unit) = mk "dragExit" (EvUtil.cast handler)

    /// Fires when an element leaves a valid drop target.
    member _.onDragLeave (handler: DragEvent -> unit) = mk "dragLeave" (EvUtil.cast handler)

    /// Fires when an element is being dragged over a valid drop target.
    member _.onDragOver (handler: DragEvent -> unit) = mk "dragOver" (EvUtil.cast handler)

    /// Fires when the a drag operation has begun.
    member _.onDragStart (handler: DragEvent -> unit) = mk "dragStart" (EvUtil.cast handler)

    /// Fires when dragged element is being dropped.
    member _.onDrop (handler: DragEvent -> unit) = mk "drop" (EvUtil.cast handler)

    /// Fires when the length of the media changes.
    member _.onDurationChange (handler: Event -> unit) = mk "durationChange" handler

    /// Fires when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects).
    member _.onEmptied (handler: Event -> unit) = mk "emptied" handler

    member _.onEncrypted (handler: Event -> unit) = mk "encrypted" handler

    /// Fires when the media has reached the end (a useful event for messages like "thanks for listening").
    member _.onEnded (handler: Event -> unit) = mk "ended" handler

    /// Fires when an error occurs.
    member _.onError (handler: Event -> unit) = mk "error" handler

    /// Fires when an error occurs.
    member _.onError (handler: UIEvent -> unit) = mk "error" (EvUtil.cast handler)

    /// Fires the moment when the element gets focus.
    member _.onFocus (handler: FocusEvent -> unit) = mk "focus" (EvUtil.cast handler)

    /// Fires when an element captures a pointer.
    member _.onGotPointerCapture (handler: PointerEvent -> unit) = mk "gotPointerCapture" (EvUtil.cast handler)

    /// Fires when an element gets user input.
    member _.onInput (handler: Event -> unit) = mk "input" handler

    /// Fires when a submittable element has been checked for validaty and doesn't satisfy its constraints.
    member _.onInvalid (handler: Event -> unit) = mk "invalid" handler

    /// Fires when a user presses a key.
    member _.onKeyDown (handler: KeyboardEvent -> unit) = mk "keyDown" (EvUtil.cast handler)

    /// Fires when a user presses a key.
    // member _.onKeyDown (key: IKeyboardKey, handler: KeyboardEvent -> unit) =
    //     PropHelpers.createOnKey(key, handler)
    //     |> h.MakeEvent("keyDown",)

    /// Fires when a user presses a key.
    member _.onKeyPress (handler: KeyboardEvent -> unit) = mk "keyPress" (EvUtil.cast handler)

    // /// Fires when a user presses a key.
    // member _.onKeyPress (key: IKeyboardKey, handler: KeyboardEvent -> unit) =
    //     PropHelpers.createOnKey(key, handler)
    //     |> h.MakeEvent("keyPress",)

    /// Fires when a user releases a key.
    member _.onKeyUp (handler: KeyboardEvent -> unit) = mk "keyUp" (EvUtil.cast handler)

    // /// Fires when a user releases a key.
    // member _.onKeyUp (key: IKeyboardKey, handler: KeyboardEvent -> unit) =
    //     PropHelpers.createOnKey(key, handler)
    //     |> h.MakeEvent("keyUp",)

    /// Fires after the page is finished loading.
    member _.onLoad (handler: Event -> unit) = mk "load" handler

    /// Fires when media data is loaded.
    member _.onLoadedData (handler: Event -> unit) = mk "loadedData" handler

    /// Fires when meta data (like dimensions and duration) are loaded.
    member _.onLoadedMetadata (handler: Event -> unit) = mk "loadedMetadata" handler

    /// Fires when a request has completed, irrespective of its success.
    member _.onLoadEnd (handler: Event -> unit) = mk "loadEnd" handler

    /// Fires when the file begins to load before anything is actually loaded.
    member _.onLoadStart (handler: Event -> unit) = mk "loadStart" handler

    /// Fires when a captured pointer is released.
    member _.onLostPointerCapture (handler: PointerEvent -> unit) = mk "lostPointerCapture" (EvUtil.cast handler)

    /// Fires when a mouse button is pressed down on an element.
    member _.onMouseDown (handler: MouseEvent -> unit) = mk "mouseDown" (EvUtil.cast handler)

    /// Fires when a pointer enters an element.
    member _.onMouseEnter (handler: MouseEvent -> unit) = mk "mouseEnter" (EvUtil.cast handler)

    /// Fires when a pointer leaves an element.
    member _.onMouseLeave (handler: MouseEvent -> unit) = mk "mouseLeave" (EvUtil.cast handler)

    /// Fires when the mouse pointer is moving while it is over an element.
    member _.onMouseMove (handler: MouseEvent -> unit) = mk "mouseMove" (EvUtil.cast handler)

    /// Fires when the mouse pointer moves out of an element.
    member _.onMouseOut (handler: MouseEvent -> unit) = mk "mouseOut" (EvUtil.cast handler)

    /// Fires when the mouse pointer moves over an element.
    member _.onMouseOver (handler: MouseEvent -> unit) = mk "mouseOver" (EvUtil.cast handler)

    /// Fires when a mouse button is released while it is over an element.
    member _.onMouseUp (handler: MouseEvent -> unit) = mk "mouseUp" (EvUtil.cast handler)

    /// Fires when the user pastes some content in an element.
    member _.onPaste (handler: ClipboardEvent -> unit) = mk "paste" (EvUtil.cast handler)

    /// Fires when the media is paused either by the user or programmatically.
    member _.onPause (handler: Event -> unit) = mk "pause" handler

    /// Fires when the media is ready to start playing.
    member _.onPlay (handler: Event -> unit) = mk "play" handler

    /// Fires when the media actually has started playing
    member _.onPlaying (handler: Event -> unit) = mk "playing" handler

    /// Fires when there are no more pointer events.
    member _.onPointerCancel (handler: PointerEvent -> unit) = mk "pointerCancel" (EvUtil.cast handler)

    /// Fires when a pointer becomes active.
    member _.onPointerDown (handler: PointerEvent -> unit) = mk "pointerDown" (EvUtil.cast handler)

    /// Fires when a pointer is moved into an elements boundaries or one of its descendants.
    member _.onPointerEnter (handler: PointerEvent -> unit) = mk "pointerEnter" (EvUtil.cast handler)

    /// Fires when a pointer is moved out of an elements boundaries.
    member _.onPointerLeave (handler: PointerEvent -> unit) = mk "pointerLeave" (EvUtil.cast handler)

    /// Fires when a pointer moves.
    member _.onPointerMove (handler: PointerEvent -> unit) = mk "pointerMove" (EvUtil.cast handler)

    /// Fires when a pointer is no longer in an elements boundaries, such as moving it, or after a `pointerUp` or `pointerCancel` event.
    member _.onPointerOut (handler: PointerEvent -> unit) = mk "pointerOut" (EvUtil.cast handler)

    /// Fires when a pointer is moved into an elements boundaries.
    member _.onPointerOver (handler: PointerEvent -> unit) = mk "pointerOver" (EvUtil.cast handler)

    /// Fires when a pointer is no longer active.
    member _.onPointerUp (handler: PointerEvent -> unit) = mk "pointerUp" (EvUtil.cast handler)

    /// Fires when the browser is in the process of getting the media data.
    member _.onProgress (handler: Event -> unit) = mk "progress" handler

    /// Fires when the playback rate changes (like when a user switches to a slow motion or fast forward mode).
    member _.onRateChange (handler: Event -> unit) = mk "rateChange" handler

    /// Fires when the Reset button in a form is clicked.
    member _.onReset (handler: Event -> unit) = mk "reset" handler

    /// Fires when the window has been resized.
    member _.onResize (handler: UIEvent -> unit) = mk "resize" (EvUtil.cast handler)

    /// Fires when an element's scrollbar is being scrolled.
    member _.onScroll (handler: Event -> unit) = mk "scroll" handler

    /// Fires when the seeking attribute is set to false indicating that seeking has ended.
    member _.onSeeked (handler: Event -> unit) = mk "seeked" handler

    /// Fires when the seeking attribute is set to true indicating that seeking is active.
    member _.onSeeking (handler: Event -> unit) = mk "seeking" handler

    /// Fires after some text has been selected in an element.
    member _.onSelect (handler: Event -> unit) = mk "select" handler

    /// Fires after some text has been selected in the user interface.
    member _.onSelect (handler: UIEvent -> unit) = mk "select" (EvUtil.cast handler)

    /// Fires when the browser is unable to fetch the media data for whatever reason.
    member _.onStalled (handler: Event -> unit) = mk "stalled" handler

    /// Fires when fetching the media data is stopped before it is completely loaded for whatever reason.
    member _.onSuspend (handler: Event -> unit) = mk "suspend" handler

    /// Fires when a form is submitted.
    member _.onSubmit (handler: Event -> unit) = mk "submit" handler

    /// Same as `onChange` but let's you deal with the text changed from the `input` element directly
    /// instead of extracting it from the event arguments.
    member _.onTextChange (handler: string -> unit) =
        let handler (ev: Event) =
            let el = ev.target :?> HTMLInputElement
            handler el.value
        mk "change" handler

    /// Same as `onInput` but let's you deal with the text changed from the `input` element directly
    /// instead of extracting it from the event arguments.
    member _.onTextInput (handler: string -> unit) =
        let handler (ev: Event) =
            let el = ev.target :?> HTMLInputElement
            handler el.value
        mk "input" handler

    /// Fires when the playing position has changed (like when the user fast forwards to a different point in the media).
    member _.onTimeUpdate (handler: Event -> unit) = mk "timeUpdate" handler

    member _.onTouchCancel (handler: TouchEvent -> unit) = mk "touchCancel" (EvUtil.cast handler)

    member _.onTouchEnd (handler: TouchEvent -> unit) = mk "touchEnd" (EvUtil.cast handler)

    member _.onTouchMove (handler: TouchEvent -> unit) = mk "touchMove" (EvUtil.cast handler)

    member _.onTouchStart (handler: TouchEvent -> unit) = mk "touchStart" (EvUtil.cast handler)

    member _.onTransitionEnd (handler: TransitionEvent -> unit) = mk "transitionEnd" (EvUtil.cast handler)

    /// Fires when the volume is changed which (includes setting the volume to "mute").
    member _.onVolumeChange (handler: Event -> unit) = mk "volumeChange" handler

    /// Fires when the media has paused but is expected to resume (like when the media pauses to buffer more data).
    member _.onWaiting (handler: Event -> unit) = mk "waiting" handler

    /// Fires when the mouse wheel rolls up or down over an element.
    member _.onWheel (handler: WheelEvent -> unit) = mk "wheel" (EvUtil.cast handler)
