// Undertone - Programmable music
// Ported from desktop version: https://github.com/robertpi/undertone
// Inspired by Overtone / Sonic-PI
// By Robert Pickering

module Undertone

open System
open Fable.Core
open Fable.Core.JsInterop
open Browser.Types
open Browser

type Note =
    | Cflat     = -1
    | C         = 0
    | Csharp    = 1
    | Dflat     = 1
    | D         = 2
    | Dsharp    = 3
    | Eflat     = 3
    | E         = 4
    | Fflat     = 4
    | Esharp    = 5
    | F         = 5
    | Fsharp    = 6
    | Gflat     = 6
    | G         = 7
    | Gsharp    = 8
    | Aflat     = 8
    | A         = 9
    | Asharp    = 10
    | Bflat     = 10
    | B         = 11
    | Bsharp    = 12

module MiscConsts =

    /// standard sampling rate
    /// See: http://en.wikipedia.org/wiki/44,100_Hz
    let SampleRate = 44100

    /// "Standard Pitch" noted as A440. The a note that is above middle c
    /// See: http://en.wikipedia.org/wiki/A440_(pitch_standard)
    let A440 = 440.

module Waves =
    open System

    /// The ratio require to move from one semi-tone to the next
    /// See: http://en.wikipedia.org/wiki/Semitone
    let private semitone =
        Math.Pow(2., 1. / 12.)

    /// Since our Note enum is relative to c, we need to find middle c.
    /// We know A440 = 440 hz and that the next c is three semi tones
    /// above that, but this is c one ocative above middle c, so we
    /// half the result to get middle c.
    /// Middle c is around 261.626 Hz, and this approximately the value we get
    /// See: http://en.wikipedia.org/wiki/C_(musical_note)
    let private middleC =
        MiscConsts.A440 * Math.Pow(semitone, 3.) / 2.

    /// Converts from our note enum to the notes frequency
    let frequencyOfNote (note: Note) octave =
        middleC *
        // calculate the ratio need to move to the note's semitone
        Math.Pow(semitone, double (int note)) *
        // calculate the ratio need to move to the note's octave
        Math.Pow(2., double (octave - 4))

    /// calculates the distance you need to move in each sample
    let phaseAngleIncrementOfFrequency frequency =
        frequency / double MiscConsts.SampleRate

/// functions an constants for manipulating musical time
module Time =
    /// this hard codes our module to the lower "4" in 4/4 time
    let beatsPerSemibreve = 4.
    /// number bars
    let private beatsPerSecond bmp =  60. / bmp
    /// number of samples required to make a bar of m- usic
    let private samplesPerBar bmp = (float MiscConsts.SampleRate * beatsPerSecond bmp * beatsPerSemibreve)

    /// longa - either twice or three times as long as a breve (we choose twice)
    /// it is no longer used in modern music notation
    let longa = 4.
    /// double whole note -  twice as long as semibreve
    let breve = 2.
    /// whole note -  its length is equal to four beats in 4/4 time
    /// most other notes are fractions of the whole note
    let semibreve = 1.
    /// half note
    let minim = 1. / 2.
    /// quarter note
    let crotchet = 1. / 4.
    /// eighth note
    let quaver = 1. / 8.
    /// sixteenth note
    let semiquaver = 1. / 16.
    /// thirty-second note
    let demisemiquaver = 1. / 32.

    /// caculates a note's length in samples
    let noteValue bmp note =
        samplesPerBar bmp * note |> int

/// Functions for creating waves
module Creation =

    /// make a period of silence
    let makeSilence length =
        Seq.init length (fun _ -> 0.)

    /// make a wave using the given function, length and frequency
    let makeWave waveFunc length frequency =
        let phaseAngleIncrement = Waves.phaseAngleIncrementOfFrequency frequency
        Seq.init length (fun x ->
            let phaseAngle = phaseAngleIncrement * (float x)
            let x = Math.Floor(phaseAngle)
            waveFunc (phaseAngle - x))

    /// make a wave using the given function, length note and octave
    let makeNote waveFunc length note octave =
        let frequency = Waves.frequencyOfNote note octave
        makeWave waveFunc length frequency

    /// function for making a sine wave
    let sine phaseAngle =
        Math.Sin(2. * Math.PI * phaseAngle)

    /// function for making a square wave
    let square phaseAngle =
        if phaseAngle < 0.5 then -1.0 else 1.0

    /// function for making triangular waves
    let triangle phaseAngle =
        if phaseAngle < 0.5 then
            2. * phaseAngle
        else
            1. - (2. * phaseAngle)

    // function for making making "saw tooth" wave
    let sawtooth phaseAngle =
        -1. + phaseAngle

    // function for combining several waves into a cord combines
    let makeCord (waveDefs: seq<seq<float>>) =
        let wavesMatrix = waveDefs |> Seq.map (Seq.toArray) |> Seq.toArray
        let waveScaleFactor = 1. / float wavesMatrix.Length
        let maxLength = wavesMatrix |> Seq.maxBy (fun x -> x.Length)
        let getValues i =
            seq { for x in 0 .. wavesMatrix.Length - 1 do
                    yield if i > wavesMatrix.[x].Length then 0. else wavesMatrix.[x].[i] }
        seq { for x in 0 .. maxLength.Length - 1 do yield (getValues x |> Seq.sum) * waveScaleFactor }

    // same as makeCord but does use arrays so can handle long or even infinite sequences.
    let combine (waveDefs: seq<seq<float>>) =
        let enumerators = waveDefs |> Seq.map (fun x -> x.GetEnumerator()) |> Seq.cache
        let loop () =
            let values =
                enumerators
                |> Seq.choose
                    (fun x -> if x.MoveNext() then Some x.Current else None)
                |> Seq.toList
            match values with
            | [] -> None
            | x -> Some ((x |> Seq.sum), ())
        Seq.unfold loop ()

/// functions for transforming waves
module Transformation =
    /// makes the waves amplitude large or small by scaling by the given multiplier
    let scaleHeight multiplier (waveDef: seq<float>) =
        waveDef |> Seq.map (fun x -> x * multiplier)

    let private rnd = new Random()

    /// Adds some noise to the wave (not recommended)
    let addNoise multiplier (waveDef: seq<float>) =
        waveDef
        |> Seq.map (fun x ->
                        let rndValue = 0.5 - rnd.NextDouble()
                        x +  (rndValue * multiplier))

    /// flattens the wave at the given limit to give an overdrive effect
    let flatten limit (waveDef: seq<float>) =
        waveDef
        |> Seq.map (fun x -> max -limit (min x limit))

    /// provides a way to linearly tapper a wave, the startMultiplier is
    /// applied to the first value of the a wave, and endMultiplier is
    /// applied to the last value, the other values have value that is linearly
    /// interpolated between the two values
    let tapper startMultiplier endMultiplier (waveDef: seq<float>) =
        let waveVector = waveDef |> Seq.toArray
        let step = (endMultiplier - startMultiplier) / float waveVector.Length
        waveVector
        |> Seq.mapi (fun i x -> x * (startMultiplier + (step * float i)))

    /// gets a point on the gaussian distribution
    let private gaussian a b c x  = Math.Pow((a * Math.E), -(Math.Pow(x - b, 2.) / Math.Pow(c * 2., 2.)))

    /// applies a gaussian tapper to the front of a wave
    let gaussianTapper length (waveDef: seq<float>) =
        let waveVector = waveDef |> Seq.toArray
        let step = 1. / float waveVector.Length
        waveVector
        |> Seq.mapi (fun i x -> x * gaussian 1. 0. length (step * float i))

    /// applies a gaussian tapper to the back of a wave
    let revGaussianTapper length (waveDef: seq<float>) =
        let waveVector = waveDef |> Seq.toArray
        let len = float waveVector.Length
        let step = 1. / len
        waveVector
        |> Seq.mapi (fun i x -> x * gaussian 1. 0. length (step * (len - float i)))

    /// applies a gaussian tapper to the front and back of a wave
    let doubleGaussianTapper startLength endLength (waveDef: seq<float>) =
        let waveVector = waveDef |> Seq.toArray
        let len = float waveVector.Length
        let step = 1. / len
        waveVector
        |> Seq.mapi (fun i x -> x *
                                (gaussian 1. 0. startLength (step * (len - float i))) *
                                (gaussian 1. 0. endLength (step * float i)))

/// Functions to turn a list of chords into a playable sound wave
module NoteSequencer =
    type Chord = seq<Note*int>

    /// version of Seq.take that doesn't though exceptions if you reach the end of the sequence
    let private safeTake wanted (source : seq<'T>) =
        (* Note: don't create or dispose any IEnumerable if n = 0 *)
        if wanted = 0 then Seq.empty else
        seq { use e = source.GetEnumerator()
              let count = ref 0
              while e.MoveNext() && count.Value < wanted do
                count.Value <- count.Value + 1
                yield e.Current }

    // function that does a function the describes how a note should be played and list of chords
    // and generates a sound wave from them
    let sequence (noteTable: Note -> int -> seq<float>) (notes: seq<#Chord*int>) =
        seq { for cordNotes, length in notes do
                let notes = cordNotes |> Seq.map (fun (note, octave) -> noteTable note octave)
                yield! Creation.combine notes |> safeTake length }

module WaveFormat =
    let sampleRate = 44100
    let channels = 1

    let bytesOfInt16 i =
        [ 0; 8; ]
        |> List.map (fun shift -> (i >>> shift) &&& 0x00ffs |> byte)

    let bytesOfInt i =
        [ 0; 8; 16; 24 ]
        |> List.map (fun shift -> (i >>> shift) &&& 0x000000ff |> byte)

    let wavOfBuffer (buffer: float[]) =
        let sixteenBitLength = 2 * buffer.Length

        [| yield! "RIFF" |> Seq.map byte
           yield! bytesOfInt (sixteenBitLength + 15)
           yield! "WAVE" |> Seq.map byte
           yield! "fmt " |> Seq.map byte
           yield 0x12uy // fmt chunksize: 18
           yield 0x00uy
           yield 0x00uy //
           yield 0x00uy
           yield 0x01uy // format tag : 1
           yield 0x00uy
           yield channels |> byte // channels
           yield 0x00uy
           yield! bytesOfInt (sampleRate)
           yield! bytesOfInt (2*channels*sampleRate)
           yield 0x04uy // block align
           yield 0x00uy
           yield 0x10uy // bit per sample
           yield 0x00uy
           yield 0x00uy // cb size
           yield 0x00uy
           yield! "data" |> Seq.map byte
           yield! bytesOfInt sixteenBitLength
           for i in [ 0 .. buffer.Length - 1 ] do
                let tmp = buffer.[i]
                if (tmp >= 1.) then
                    yield 0xFFuy
                    yield 0xFFuy
                elif (tmp <= -1.) then
                    yield 0x00uy
                    yield 0x00uy
                else
                    yield! Math.Round(tmp * float (Int16.MaxValue)) |> int16 |> bytesOfInt16 |]

module Svg =
    let svg = document.getElementById("svg")

    let displayWave (points: float[]) =
        let margin = 10.
        let lineSpacing = 1.
        let lineWidth = 1.

        let length = (svg.clientWidth / lineSpacing) |> int
        let midPoint = svg.clientHeight / 2.
        let maxLine = midPoint - margin

        let rnd = new Random()

        let chunkSize = points.Length / length

        let samples =
            points
            |> Seq.map (fun x -> Math.Abs(x))
            |> Seq.chunkBySize chunkSize
            |> Seq.map Array.average
            |> Seq.toArray

        let svgns = "http://www.w3.org/2000/svg";
        for i in 1 .. length do
            let size = samples.[i] * maxLine
            let y1 = midPoint - size
            let y2 = midPoint + size
            let line = document.createElementNS(svgns, "line");
            let x = float i * lineSpacing

            line.setAttributeNS(null, "x1", string x);
            line.setAttributeNS(null, "y1", string y1);
            line.setAttributeNS(null, "x2", string x);
            line.setAttributeNS(null, "y2", string y2);
            line.setAttributeNS(null, "stroke-width", string lineWidth);
            line.setAttributeNS(null, "stroke", "#000000");

            document.getElementById("svg").appendChild(line) |> ignore

module Html =
    let audio = document.getElementsByTagName("audio").[0] :?> HTMLAudioElement

    let loadSound (soundSequence: seq<float>) =
        let getBaseWav64 sound =
            let wav = WaveFormat.wavOfBuffer (sound |> Seq.toArray)
            Convert.ToBase64String(wav)

        let soundBuffer = soundSequence |> Seq.toArray

        let wavBase64 = getBaseWav64 soundBuffer
        audio.src <- "data:audio/wav;base64," + wavBase64

        Svg.displayWave soundBuffer


let bpm = 90.
let crotchet = Time.noteValue bpm Time.crotchet
let quaver = Time.noteValue bpm Time.quaver

let makeNote time note =
    Creation.makeNote Creation.sine time note 4
    |> Transformation.gaussianTapper 0.1

let baaBaaBlackSheepChorus =
    seq {
          //C C G G A A AA G
          //Baa baa black sheep have you any wool?
          yield! makeNote crotchet Note.C
          yield! makeNote crotchet Note.C
          yield! makeNote crotchet Note.G
          yield! makeNote crotchet Note.G
          yield! makeNote crotchet Note.A
          yield! makeNote crotchet Note.A
          yield! makeNote quaver Note.A
          yield! makeNote quaver Note.A
          yield! makeNote crotchet Note.G
          //F F E E D D C
          //Yes sir yes sir three bags full.
          yield! makeNote crotchet Note.F
          yield! makeNote crotchet Note.F
          yield! makeNote crotchet Note.E
          yield! makeNote crotchet Note.E
          yield! makeNote crotchet Note.D
          yield! makeNote crotchet Note.D
          yield! makeNote crotchet Note.C }

Html.loadSound baaBaaBlackSheepChorus
