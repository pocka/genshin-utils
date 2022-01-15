module App.Timer exposing (State(..), Timer, decoder, encode, idToString, posixToId)

import App.Duration as Duration exposing (Duration)
import Json.Decode as Decode
import Json.Encode as Encode
import Time


type State
    = Idle
    | Running Time.Posix
    | Completed Time.Posix Time.Posix


encodeState : State -> Encode.Value
encodeState state =
    case state of
        Idle ->
            Encode.object [ ( "type", Encode.string "Idle" ) ]

        Running startedAt ->
            Encode.object
                [ ( "type", Encode.string "Running" )
                , ( "startedAt", Encode.int (Time.posixToMillis startedAt) )
                ]

        Completed startedAt completedAt ->
            Encode.object
                [ ( "type", Encode.string "Completed" )
                , ( "startedAt", Encode.int (Time.posixToMillis startedAt) )
                , ( "completedAt", Encode.int (Time.posixToMillis completedAt) )
                ]


stateDecoder : Decode.Decoder State
stateDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\t ->
                case t of
                    "Idle" ->
                        Decode.succeed Idle

                    "Running" ->
                        Decode.map
                            Running
                            (Decode.field "startedAt" Decode.int |> Decode.map Time.millisToPosix)

                    "Completed" ->
                        Decode.map2
                            Completed
                            (Decode.field "startedAt" Decode.int |> Decode.map Time.millisToPosix)
                            (Decode.field "completedAt" Decode.int |> Decode.map Time.millisToPosix)

                    _ ->
                        Decode.fail ("[App.Timer] Unknown state: " ++ t)
            )


type Id
    = Id String


posixToId : Time.Posix -> Id
posixToId t =
    Time.posixToMillis t
        |> String.fromInt
        |> Id


idToString : Id -> String
idToString id =
    case id of
        Id str ->
            str


encodeId : Id -> Encode.Value
encodeId id =
    case id of
        Id str ->
            Encode.string str


idDecoder : Decode.Decoder Id
idDecoder =
    Decode.string |> Decode.map Id


type alias Timer =
    { id : Id
    , name : String
    , duration : Duration
    , state : State
    }


encode : Timer -> Encode.Value
encode timer =
    Encode.object
        [ ( "version", Encode.string "1.0" )
        , ( "id", encodeId timer.id )
        , ( "name", Encode.string timer.name )
        , ( "duration", Duration.encode timer.duration )
        , ( "state", encodeState timer.state )
        ]


v1Decoder : Decode.Decoder Timer
v1Decoder =
    Decode.map4
        Timer
        (Decode.field "id" idDecoder)
        (Decode.field "name" Decode.string)
        (Decode.field "duration" Duration.decoder)
        (Decode.field "state" stateDecoder)


decoder : Decode.Decoder Timer
decoder =
    Decode.field "version" Decode.string
        |> Decode.andThen
            (\version ->
                case version of
                    "1.0" ->
                        v1Decoder

                    _ ->
                        Decode.fail ("[App.Timer] Invalid timer version: " ++ version)
            )
