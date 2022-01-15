module App.Pages.TimerTranslation exposing (Translation, decoder)

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
    }


actionsDecoder : Decode.Decoder Actions
actionsDecoder =
    Decode.map5
        Actions
        (Decode.field "create" textDecoder)
        (Decode.field "start" textDecoder)
        (Decode.field "delete" textDecoder)
        (Decode.field "stop" textDecoder)
        (Decode.field "clear" textDecoder)


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


type alias Section =
    { heading : Text
    , empty : Empty
    }


sectionDecoder : Decode.Decoder Section
sectionDecoder =
    Decode.map2
        Section
        (Decode.field "heading" textDecoder)
        (Decode.field "empty" emptyDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , empty : Empty
    , actions : Actions
    , timerCard : TimerCard
    , active : Section
    , inactive : Section
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map7
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "empty" emptyDecoder)
        (Decode.field "actions" actionsDecoder)
        (Decode.field "timerCard" timerCardDecoder)
        (Decode.field "active" sectionDecoder)
        (Decode.field "inactive" sectionDecoder)
