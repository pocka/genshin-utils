port module Notifications exposing
    ( Availability(..)
    , Model
    , Msg
    , body
    , init
    , lang
    , notification
    , option
    , requestPermission
    , send
    , subscriptions
    , update
    , vibrate
    )

import Json.Decode as Decode
import Json.Encode as Encode
import Vibration



-- PORTS (IN)


type IncomingEvent
    = RecieveAvailability Availability


availabilityDecoder : Decode.Decoder Availability
availabilityDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "PlatformNotSupported" ->
                        Decode.succeed PlatformNotSupported

                    "RequiresPermission" ->
                        Decode.succeed RequiresPermission

                    "PermissionRequestDenied" ->
                        Decode.succeed PermissionRequestDenied

                    "Available" ->
                        Decode.succeed Available

                    "RequestingPermission" ->
                        Decode.succeed RequestingPermission

                    _ ->
                        Decode.fail ("[Notifications] Unknown availability type: " ++ str)
            )


incomingEventDecoder : Decode.Decoder IncomingEvent
incomingEventDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\t ->
                case t of
                    "RecieveAvailability" ->
                        Decode.map
                            RecieveAvailability
                            (Decode.field "availability" availabilityDecoder)

                    _ ->
                        Decode.fail ("[Notifications] Unknown event type: " ++ t)
            )


port recieveNotificationsEvent : (Decode.Value -> msg) -> Sub msg



-- PORTS (OUT)


type NotificationOption
    = NotificationOption String Encode.Value


unwrapNotificationOption : NotificationOption -> ( String, Encode.Value )
unwrapNotificationOption n =
    case n of
        NotificationOption title value ->
            ( title, value )


lang : String -> NotificationOption
lang v =
    NotificationOption "lang" (Encode.string v)


body : String -> NotificationOption
body v =
    NotificationOption "body" (Encode.string v)


vibrate : Vibration.PulsePattern -> NotificationOption
vibrate pattern =
    NotificationOption "vibrate" (Vibration.encodePulsePattern pattern)


{-| <https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification>
-}
option : String -> Encode.Value -> NotificationOption
option =
    NotificationOption


type Notification
    = Notification String (List NotificationOption)


notification : String -> List NotificationOption -> Notification
notification =
    Notification


encodeNotification : Notification -> Encode.Value
encodeNotification n =
    case n of
        Notification title options ->
            Encode.object
                [ ( "title", Encode.string title )
                , ( "options", Encode.object (List.map unwrapNotificationOption options) )
                ]


type OutgoingEvent
    = CheckAvailability
    | RequestPermission
    | Send Notification


encodeOutgoingEvent : OutgoingEvent -> Encode.Value
encodeOutgoingEvent ev =
    case ev of
        CheckAvailability ->
            Encode.object [ ( "type", Encode.string "CheckAvailability" ) ]

        RequestPermission ->
            Encode.object [ ( "type", Encode.string "RequestPermission" ) ]

        Send n ->
            Encode.object [ ( "type", Encode.string "Send" ), ( "notification", encodeNotification n ) ]


port sendNotificationsEvent : Encode.Value -> Cmd msg


sendEvent : OutgoingEvent -> Cmd msg
sendEvent ev =
    encodeOutgoingEvent ev
        |> sendNotificationsEvent


requestPermission : Cmd msg
requestPermission =
    sendEvent RequestPermission


send : Notification -> Cmd msg
send n =
    sendEvent (Send n)



-- MODEL


type Availability
    = Checking
    | PlatformNotSupported
    | RequiresPermission
    | PermissionRequestDenied
    | RequestingPermission
    | Available


type alias Model =
    { availability : Availability
    }


init : ( Model, Cmd Msg )
init =
    ( { availability = Checking
      }
    , sendEvent CheckAvailability
    )



-- UPDATE


type Msg
    = UpdateAvailability Availability
    | Noop


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateAvailability availability ->
            ( { model | availability = availability }, Cmd.none )

        Noop ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    recieveNotificationsEvent
        (\v ->
            case Decode.decodeValue incomingEventDecoder v of
                Ok (RecieveAvailability a) ->
                    UpdateAvailability a

                _ ->
                    Noop
        )
