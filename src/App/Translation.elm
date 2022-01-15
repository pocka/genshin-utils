port module App.Translation exposing (IncomingEvent(..), Translation, decoder, on, request)

import App.Language as Language exposing (Language)
import App.Pages.ConfigTranslation
import App.Pages.NewTimerTranslation
import App.Pages.RandomEventCounterTranslation
import App.Pages.TimerTranslation
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


type alias Shell =
    { disclaimer : Text
    , thirdPartyNotice : Text
    , sourceCode : Text
    }


shellDecoder : Decode.Decoder Shell
shellDecoder =
    Decode.map3
        Shell
        (Decode.field "disclaimer" textDecoder)
        (Decode.field "thirdPartyNotice" textDecoder)
        (Decode.field "sourceCode" textDecoder)


type alias Validation =
    { required : Text
    , int : Text
    , gte : Text
    }


validationDecoder : Decode.Decoder Validation
validationDecoder =
    Decode.map3
        Validation
        (Decode.field "required" textDecoder)
        (Decode.field "int" textDecoder)
        (Decode.field "gte" textDecoder)


type alias Notification =
    { title : Text
    , body : Text
    }


notificationDecoder : Decode.Decoder Notification
notificationDecoder =
    Decode.map2
        Notification
        (Decode.field "title" textDecoder)
        (Decode.field "body" textDecoder)


type alias Notifications =
    { timer : Notification
    }


notificationsDecoder : Decode.Decoder Notifications
notificationsDecoder =
    Decode.map
        Notifications
        (Decode.field "timer" notificationDecoder)


type alias Translation =
    { configPage : App.Pages.ConfigTranslation.Translation
    , shell : Shell
    , randomEventCounterPage : App.Pages.RandomEventCounterTranslation.Translation
    , timerPage : App.Pages.TimerTranslation.Translation
    , newTimerPage : App.Pages.NewTimerTranslation.Translation
    , validation : Validation
    , notifications : Notifications
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map7
        Translation
        (Decode.field "configPage" App.Pages.ConfigTranslation.decoder)
        (Decode.field "shell" shellDecoder)
        (Decode.field "randomEventCounterPage" App.Pages.RandomEventCounterTranslation.decoder)
        (Decode.field "timerPage" App.Pages.TimerTranslation.decoder)
        (Decode.field "newTimerPage" App.Pages.NewTimerTranslation.decoder)
        (Decode.field "validation" validationDecoder)
        (Decode.field "notifications" notificationsDecoder)
