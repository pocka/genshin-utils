module Translation exposing (Text, fmt, textDecoder)

import Json.Decode as Decode


type Text
    = Text String


fmt : List String -> Text -> String
fmt params t =
    case t of
        Text txt ->
            case params of
                [] ->
                    txt

                _ ->
                    List.foldl (String.replace "%s") txt params


textDecoder : Decode.Decoder Text
textDecoder =
    Decode.map Text Decode.string
