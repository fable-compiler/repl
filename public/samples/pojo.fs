open Fable.Core
open Fable.Core.JsInterop

// Create an jObject manually
let data1 =
    createObj [
        "firstname" ==> "John"
        "surname" ==> "Doe"
        "age" ==> 25
    ]

// Use an interface
type IUser =
    abstract firstname: string with get, set
    abstract surname: string with get, set
    abstract age: int with get, set

let data2 = createEmpty<IUser>
data2.firstname <- "John"
data2.surname <- "Doe"
data2.age <- 25

let data3 = jsOptions<IUser>(fun o ->
    o.firstname <- "John"
    o.surname <- "Doe"
    o.age <- 25
)

// Use Pojo attribute
[<Pojo>]
type UserPojo =
    { firstname : string
      surname : string
      age : int }

let data4 =
    { firstname = "John"
      surname = "Doe"
      age = 25 }

// KeyValueList attribute
type UserKV =
    | Firstname of string
    | Surname of string
    | Age of int

let data5 =
    [ Firstname "John"
      Surname "Doe"
      Age 25 ]
    |> keyValueList CaseRules.LowerFirst
