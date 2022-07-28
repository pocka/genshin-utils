module App.Views.TimerPresetsTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Translation =
    { title : Text
    , description : Text
    , create : Text
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map3
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "description" textDecoder)
        (Decode.field "create" textDecoder)
