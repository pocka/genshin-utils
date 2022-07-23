module App.Views.RandomEventCounterTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Actions =
    { claim : Text
    , undo : Text
    }


actionsDecoder : Decode.Decoder Actions
actionsDecoder =
    Decode.map2
        Actions
        (Decode.field "claim" textDecoder)
        (Decode.field "undo" textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , actions : Actions
    , lastClaimedLabel : Text
    , ago : Text
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map5
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "actions" actionsDecoder)
        (Decode.field "lastClaimedLabel" textDecoder)
        (Decode.field "ago" textDecoder)
