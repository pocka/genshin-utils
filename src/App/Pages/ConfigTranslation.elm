module App.Pages.ConfigTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , general : GeneralSection
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


type alias WakeLock =
    { label : Text
    , description : Text
    , checking : Text
    , notSupported : Text
    }


wakeLockDecoder : Decode.Decoder WakeLock
wakeLockDecoder =
    Decode.map4
        WakeLock
        (Decode.field "label" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "checking" textDecoder)
        (Decode.field "notSupported" textDecoder)


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
    , wakeLock : WakeLock
    , feedbackVibration : FeedbackVibration
    }


uiSectionDecoder : Decode.Decoder UiSection
uiSectionDecoder =
    Decode.map8
        UiSection
        (Decode.field "title" textDecoder)
        (Decode.field "language" fieldDecoder)
        (Decode.field "theme" fieldDecoder)
        (Decode.field "systemDefaultTheme" textDecoder)
        (Decode.field "dark" textDecoder)
        (Decode.field "light" textDecoder)
        (Decode.field "wakeLock" wakeLockDecoder)
        (Decode.field "feedbackVibration" feedbackVibrationDecoder)


decoder : Decode.Decoder Translation
decoder =
    Decode.map4
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "general" generalSectionDecoder)
        (Decode.field "ui" uiSectionDecoder)
