module App.Views.ConfigTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , general : GeneralSection
    , notification : Notifications
    , ui : UiSection
    }


type alias Field =
    { label : Text
    , description : Text
    }


fieldDecoder : Decode.Decoder Field
fieldDecoder =
    Decode.map2
        Field
        (Decode.field "label" textDecoder)
        (Decode.field "description" textDecoder)


type alias GeneralSection =
    { title : Text
    , referenceServer : Field
    }


generalSectionDecoder : Decode.Decoder GeneralSection
generalSectionDecoder =
    Decode.map2
        GeneralSection
        (Decode.field "title" textDecoder)
        (Decode.field "referenceServer" fieldDecoder)


type alias BrowserNotification =
    { label : Text
    , description : Text
    , checking : Text
    , notSupported : Text
    , denied : Text
    , permissionRequesting : Text
    , requestPermission : Text
    }


browserNotificationDecoder : Decode.Decoder BrowserNotification
browserNotificationDecoder =
    Decode.map7
        BrowserNotification
        (Decode.field "label" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "checking" textDecoder)
        (Decode.field "notSupported" textDecoder)
        (Decode.field "denied" textDecoder)
        (Decode.field "permissionRequesting" textDecoder)
        (Decode.field "requestPermission" textDecoder)


type alias Notifications =
    { title : Text
    , inAppNotification : Field
    , browserNotification : BrowserNotification
    }


notificationsDecoder : Decode.Decoder Notifications
notificationsDecoder =
    Decode.map3
        Notifications
        (Decode.field "title" textDecoder)
        (Decode.field "inAppNotification" fieldDecoder)
        (Decode.field "browserNotification" browserNotificationDecoder)


type alias FeedbackVibration =
    { label : Text
    , description : Text
    , notSupported : Text
    }


feedbackVibrationDecoder : Decode.Decoder FeedbackVibration
feedbackVibrationDecoder =
    Decode.map3
        FeedbackVibration
        (Decode.field "label" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "notSupported" textDecoder)


type alias UiSection =
    { title : Text
    , language : Field
    , theme : Field
    , systemDefaultTheme : Text
    , dark : Text
    , light : Text
    , feedbackVibration : FeedbackVibration
    }


uiSectionDecoder : Decode.Decoder UiSection
uiSectionDecoder =
    Decode.map7
        UiSection
        (Decode.field "title" textDecoder)
        (Decode.field "language" fieldDecoder)
        (Decode.field "theme" fieldDecoder)
        (Decode.field "systemDefaultTheme" textDecoder)
        (Decode.field "dark" textDecoder)
        (Decode.field "light" textDecoder)
        (Decode.field "feedbackVibration" feedbackVibrationDecoder)


decoder : Decode.Decoder Translation
decoder =
    Decode.map5
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "general" generalSectionDecoder)
        (Decode.field "notification" notificationsDecoder)
        (Decode.field "ui" uiSectionDecoder)
