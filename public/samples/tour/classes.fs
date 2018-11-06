module Tour.Classes

// From https://docs.microsoft.com/en-us/dotnet/fsharp/tour
// Visit the link above for more information on each topic
// You can also find more learning resources at https://fsharp.org/

/// Classes are a way of defining new object types in F#, and support standard Object-oriented constructs.
/// They can have a variety of members (methods, properties, events, etc.)
///
/// To learn more about Classes, see: https://docs.microsoft.com/dotnet/fsharp/language-reference/classes
///
/// To learn more about Members, see: https://docs.microsoft.com/dotnet/fsharp/language-reference/members

/// A simple two-dimensional Vector class.
///
/// The class's constructor is on the first line,
/// and takes two arguments: dx and dy, both of type 'double'.
type Vector2D(dx : double, dy : double) =

    /// This internal field stores the length of the vector, computed when the
    /// object is constructed
    let length = sqrt (dx*dx + dy*dy)

    // 'this' specifies a name for the object's self-identifier.
    // In instance methods, it must appear before the member name.
    member this.DX = dx

    member this.DY = dy

    member this.Length = length

    /// This member is a method.  The previous members were properties.
    member this.Scale(k) = Vector2D(k * this.DX, k * this.DY)

/// This is how you instantiate the Vector2D class.
let vector1 = Vector2D(3.0, 4.0)

/// Get a new scaled vector object, without modifying the original object.
let vector2 = vector1.Scale(10.0)

printfn "Length of vector1: %f\nLength of vector2: %f" vector1.Length vector2.Length


/// Generic classes allow types to be defined with respect to a set of type parameters.
/// In the following, 'T is the type parameter for the class.
///
/// To learn more, see: https://docs.microsoft.com/dotnet/fsharp/language-reference/generics/

type StateTracker<'T>(initialElement: 'T) =

    /// This internal field store the states in a list.
    let mutable states = [ initialElement ]

    /// Add a new element to the list of states.
    member this.UpdateState newState =
        states <- newState :: states  // use the '<-' operator to mutate the value.

    /// Get the entire list of historical states.
    member this.History = states

    /// Get the latest state.
    member this.Current = states.Head

/// An 'int' instance of the state tracker class. Note that the type parameter is inferred.
let tracker = StateTracker 10

// Add a state
tracker.UpdateState 17


/// Interfaces are object types with only 'abstract' members.
/// Object types and object expressions can implement interfaces.
///
/// To learn more, see: https://docs.microsoft.com/dotnet/fsharp/language-reference/interfaces

/// This is a type that implements IDisposable.
type ReadFile(path: string) =
    member this.ReadLine() = printfn "Reading %s..." path

    // This is the implementation of IDisposable members.
    interface System.IDisposable with
        member this.Dispose() = printfn "Closing %s..." path


/// This is an object that implements IDisposable via an Object Expression
/// Unlike other languages such as C# or Java, a new type definition is not needed
/// to implement an interface.
let interfaceImplementation =
    { new System.IDisposable with
        member this.Dispose() = printfn "disposed" }

