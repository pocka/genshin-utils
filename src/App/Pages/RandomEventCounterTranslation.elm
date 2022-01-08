module App.Pages.RandomEventCounterTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Actions =
    { reset : Text
    , undo : Text
    , click : Text
    , tap : Text
    }


actionsDecoder : Decode.Decoder Actions
actionsDecoder =
    Decode.map4
        Actions
        (Decode.field "reset" textDecoder)
        (Decode.field "undo" textDecoder)
        (Decode.field "click" textDecoder)
        (Decode.field "tap" textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , actions : Actions
    , buttonDescription : Text
    , noMoreLeft : Text
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map5
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "actions" actionsDecoder)
        (Decode.field "buttonDescription" textDecoder)
        (Decode.field "noMoreLeft" textDecoder)
