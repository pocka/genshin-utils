module App.Views.AboutTranslation exposing (Translation, decoder)

import Json.Decode as Decode
import Translation exposing (Text, textDecoder)


type alias Translation =
    { title : Text
    , version : Text
    , license : Text
    , repository : Text
    , author : Text
    , issues : Text
    , thirdPartyNotice : Text
    }


decoder : Decode.Decoder Translation
decoder =
    Decode.map7
        Translation
        (Decode.field "title" textDecoder)
        (Decode.field "version" textDecoder)
        (Decode.field "license" textDecoder)
        (Decode.field "repository" textDecoder)
        (Decode.field "author" textDecoder)
        (Decode.field "issues" textDecoder)
        (Decode.field "thirdPartyNotice" textDecoder)
