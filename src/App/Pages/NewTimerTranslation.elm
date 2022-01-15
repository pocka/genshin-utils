module App.Pages.NewTimerTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


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


type alias General =
    { title : Text
    , name : Field
    }


generalDecoder : Decode.Decoder General
generalDecoder =
    Decode.map2
        General
        (Decode.field "title" textDecoder)
        (Decode.field "name" fieldDecoder)


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


type alias Form =
    { general : General
    , duration : Duration
    , submit : Text
    }


formDecoder : Decode.Decoder Form
formDecoder =
    Decode.map3
        Form
        (Decode.field "general" generalDecoder)
        (Decode.field "duration" durationDecoder)
        (Decode.field "submit" textDecoder)


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
