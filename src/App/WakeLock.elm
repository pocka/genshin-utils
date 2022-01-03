port module App.WakeLock exposing (Action(..), Model(..), Msg(..), State(..), init, subscriptions, update)

import Json.Decode as Decode
import Json.Encode as Encode



-- PORTS (OUT)


type OutgoingEvent
    = SendLockRequest
    | SendReleaseRequest
    | SendStatusRequest


encodeOutgoingEvent : OutgoingEvent -> Encode.Value
encodeOutgoingEvent ev =
    case ev of
        SendLockRequest ->
            Encode.object [ ( "type", Encode.string "SendLockRequest" ) ]

        SendReleaseRequest ->
            Encode.object [ ( "type", Encode.string "SendReleaseRequest" ) ]

        SendStatusRequest ->
            Encode.object [ ( "type", Encode.string "SendStatusRequest" ) ]


port sendAppWakeLockEvent : Encode.Value -> Cmd msg


sendEvent : OutgoingEvent -> Cmd msg
sendEvent ev =
    sendAppWakeLockEvent (encodeOutgoingEvent ev)



-- PORTS (IN)


type IncomingEvent
    = RecieveUnsupportedStatus
    | RecieveInitiallyLocked Bool
    | RecieveLocked
    | RecieveReleased
    | RecieveError String


incomingEventDecoder : Decode.Decoder IncomingEvent
incomingEventDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\t ->
                case t of
                    "RecieveUnsupportedStatus" ->
                        Decode.succeed RecieveUnsupportedStatus

                    "RecieveInitiallyLocked" ->
                        Decode.map
                            RecieveInitiallyLocked
                            (Decode.field "locked" Decode.bool)

                    "RecieveLocked" ->
                        Decode.succeed RecieveLocked

                    "RecieveReleased" ->
                        Decode.succeed RecieveReleased

                    "RecieveError" ->
                        Decode.map
                            RecieveError
                            (Decode.field "error" Decode.string)

                    _ ->
                        Decode.fail ("[App.WakeLock] Unknown incoming event type: " ++ t)
            )


port recieveAppWakeLockEvent : (Decode.Value -> msg) -> Sub msg



-- MODEL


type Action
    = RequestingLock
    | RequestingRelease
    | FailedToLock String
    | FailedToRelease String


type State
    = Locking
    | Locked
    | Releasing
    | Released


type Model
    = CheckingSupport
    | NotSupported
    | Supported State (Maybe Action)


init : ( Model, Cmd Msg )
init =
    ( CheckingSupport, sendEvent SendStatusRequest )



-- UPDATE


type Msg
    = MarkAsUnsupported
    | Initialize State
    | TryLock
    | TryRelease
    | Lock
    | Release
    | Fail String
    | Noop


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( MarkAsUnsupported, CheckingSupport ) ->
            ( NotSupported, Cmd.none )

        ( Initialize state, CheckingSupport ) ->
            ( Supported state Nothing, Cmd.none )

        ( TryLock, Supported Released _ ) ->
            ( Supported Locking (Just RequestingLock), sendEvent SendLockRequest )

        ( TryRelease, Supported Locked _ ) ->
            ( Supported Releasing (Just RequestingRelease), sendEvent SendReleaseRequest )

        ( Lock, Supported Locking _ ) ->
            ( Supported Locked Nothing, Cmd.none )

        ( Release, Supported _ _ ) ->
            ( Supported Released Nothing, Cmd.none )

        ( Fail message, Supported Locking _ ) ->
            ( Supported Released (Just (FailedToLock message)), Cmd.none )

        ( Fail message, Supported Releasing _ ) ->
            ( Supported Locked (Just (FailedToRelease message)), Cmd.none )

        _ ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    recieveAppWakeLockEvent
        (\v ->
            case Decode.decodeValue incomingEventDecoder v of
                Ok RecieveUnsupportedStatus ->
                    MarkAsUnsupported

                Ok (RecieveInitiallyLocked isLocked) ->
                    Initialize
                        (if isLocked then
                            Locked

                         else
                            Released
                        )

                Ok RecieveLocked ->
                    Lock

                Ok RecieveReleased ->
                    Release

                Ok (RecieveError message) ->
                    Fail message

                Err _ ->
                    Noop
        )
