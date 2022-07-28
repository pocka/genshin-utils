port module App.Translation exposing (IncomingEvent(..), Translation, decoder, on, request)

import App.Types.Language as Language exposing (Language)
import App.Views.AboutTranslation
import App.Views.ConfigTranslation
import App.Views.NewTimerTranslation
import App.Views.RandomEventCounterTranslation
import App.Views.TimerPresetsTranslation
import App.Views.TimerTranslation
import Json.Decode as Decode
import Json.Encode as Encode
import Translation exposing (Text, textDecoder)



-- PORTS (OUT)


type OutgoingEvent
    = RequestTranslation Language


encodeOutgoingEvent : OutgoingEvent -> Encode.Value
encodeOutgoingEvent ev =
    case ev of
        RequestTranslation lang ->
            Encode.object
                [ ( "type", Encode.string "RequestTranslation" )
                , ( "lang", Language.encode lang )
                ]


port sendAppTranslationEvent : Encode.Value -> Cmd msg


request : Language -> Cmd msg
request lang =
    sendAppTranslationEvent (encodeOutgoingEvent (RequestTranslation lang))



-- PORTS (IN)


type IncomingEvent
    = RecievedTranslation Translation
    | FailedToFetch String


incomingEventDecoder : Decode.Decoder IncomingEvent
incomingEventDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\t ->
                case t of
                    "RecievedTranslation" ->
                        Decode.map
                            RecievedTranslation
                            (Decode.field "translation" decoder)

                    "FailedToFetch" ->
                        Decode.map
                            FailedToFetch
                            (Decode.field "error" Decode.string)

                    _ ->
                        Decode.fail ("[App.Translation] Unknown event type: " ++ t)
            )


port recieveAppTranslationEvent : (Decode.Value -> msg) -> Sub msg


on : (IncomingEvent -> msg) -> Sub msg
on f =
    recieveAppTranslationEvent
        (\v ->
            case Decode.decodeValue incomingEventDecoder v of
                Ok ev ->
                    f ev

                Err error ->
                    f (FailedToFetch (Decode.errorToString error))
        )



-- DATA


type alias AppMenu =
    { wakeLock : Text
    , wakeLockNotSupported : Text
    , preference : Text
    , about : Text
    }


appMenuDecoder : Decode.Decoder AppMenu
appMenuDecoder =
    Decode.map4
        AppMenu
        (Decode.field "wakeLock" textDecoder)
        (Decode.field "wakeLockNotSupported" textDecoder)
        (Decode.field "preference" textDecoder)
        (Decode.field "about" textDecoder)


type alias Notification =
    { title : Text
    , body : Text
    , open : Text
    , dismiss : Text
    }


notificationDecoder : Decode.Decoder Notification
notificationDecoder =
    Decode.map4
        Notification
        (Decode.field "title" textDecoder)
        (Decode.field "body" textDecoder)
        (Decode.field "open" textDecoder)
        (Decode.field "dismiss" textDecoder)


type alias Notifications =
    { timer : Notification
    }


notificationsDecoder : Decode.Decoder Notifications
notificationsDecoder =
    Decode.map
        Notifications
        (Decode.field "timer" notificationDecoder)


type alias Translation =
    { configPage : App.Views.ConfigTranslation.Translation
    , randomEventCounterPage : App.Views.RandomEventCounterTranslation.Translation
    , timerPage : App.Views.TimerTranslation.Translation
    , newTimerPage : App.Views.NewTimerTranslation.Translation
    , notifications : Notifications
    , appMenu : AppMenu
    , aboutPage : App.Views.AboutTranslation.Translation
    , timerPresetsPage : App.Views.TimerPresetsTranslation.Translation
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map8
        Translation
        (Decode.field "configPage" App.Views.ConfigTranslation.decoder)
        (Decode.field "randomEventCounterPage" App.Views.RandomEventCounterTranslation.decoder)
        (Decode.field "timerPage" App.Views.TimerTranslation.decoder)
        (Decode.field "newTimerPage" App.Views.NewTimerTranslation.decoder)
        (Decode.field "notifications" notificationsDecoder)
        (Decode.field "appMenu" appMenuDecoder)
        (Decode.field "aboutPage" App.Views.AboutTranslation.decoder)
        (Decode.field "timerPresetsPage" App.Views.TimerPresetsTranslation.decoder)
