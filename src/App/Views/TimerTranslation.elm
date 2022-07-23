module App.Views.TimerTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Empty =
    { title : Text
    , description : Text
    }


emptyDecoder : Decode.Decoder Empty
emptyDecoder =
    Decode.map2
        Empty
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)


type alias Actions =
    { create : Text
    , start : Text
    , delete : Text
    , stop : Text
    , clear : Text
    , menu : Text
    , presets : Text
    }


actionsDecoder : Decode.Decoder Actions
actionsDecoder =
    Decode.map7
        Actions
        (Decode.field "create" textDecoder)
        (Decode.field "start" textDecoder)
        (Decode.field "delete" textDecoder)
        (Decode.field "stop" textDecoder)
        (Decode.field "clear" textDecoder)
        (Decode.field "menu" textDecoder)
        (Decode.field "presets" textDecoder)


type alias TimerCard =
    { duration : Text
    , remains : Text
    , ended : Text
    }


timerCardDecoder : Decode.Decoder TimerCard
timerCardDecoder =
    Decode.map3
        TimerCard
        (Decode.field "duration" textDecoder)
        (Decode.field "remains" textDecoder)
        (Decode.field "ended" textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , empty : Empty
    , actions : Actions
    , timerCard : TimerCard
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map5
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "empty" emptyDecoder)
        (Decode.field "actions" actionsDecoder)
        (Decode.field "timerCard" timerCardDecoder)
