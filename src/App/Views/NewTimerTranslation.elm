module App.Views.NewTimerTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Field =
    { label : Text
    , placeholder : Text
    }


fieldDecoder : Decode.Decoder Field
fieldDecoder =
    Decode.map2
        Field
        (Decode.field "label" textDecoder)
        (Decode.field "placeholder" textDecoder)


type alias Duration =
    { title : Text
    , tips : Text
    , day : Field
    , hour : Field
    , minute : Field
    }


durationDecoder : Decode.Decoder Duration
durationDecoder =
    Decode.map5
        Duration
        (Decode.field "title" textDecoder)
        (Decode.field "tips" textDecoder)
        (Decode.field "day" fieldDecoder)
        (Decode.field "hour" fieldDecoder)
        (Decode.field "minute" fieldDecoder)


type alias Errors =
    { emptyName : Text
    , negativeDuration : Text
    , zeroDuration : Text
    }


errorsDecoder : Decode.Decoder Errors
errorsDecoder =
    Decode.map3
        Errors
        (Decode.field "emptyName" textDecoder)
        (Decode.field "negativeDuration" textDecoder)
        (Decode.field "zeroDuration" textDecoder)


type alias Form =
    { name : Field
    , duration : Duration
    , submit : Text
    , errors : Errors
    }


formDecoder : Decode.Decoder Form
formDecoder =
    Decode.map4
        Form
        (Decode.field "name" fieldDecoder)
        (Decode.field "duration" durationDecoder)
        (Decode.field "submit" textDecoder)
        (Decode.field "errors" errorsDecoder)


type alias Translation =
    { title : Text
    , form : Form
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map2
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "form" formDecoder)
