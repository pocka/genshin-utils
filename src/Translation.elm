module Translation exposing (Text, fmt, textDecoder)

import Json.Decode as Decode


type Text
    = Text String


alternate : List String -> List String -> List String
alternate a b =
    case ( a, b ) of
        ( ah :: ax, bh :: bx ) ->
            ah :: bh :: alternate ax bx

        ( ah :: ax, [] ) ->
            ah :: ax

        ( [], bh :: bx ) ->
            bh :: bx

        ( [], [] ) ->
            []


fmt : List String -> Text -> String
fmt params t =
    case t of
        Text txt ->
            case params of
                [] ->
                    txt

                _ ->
                    params
                        |> alternate (String.split "%s" txt)
                        |> String.join ""


textDecoder : Decode.Decoder Text
textDecoder =
    Decode.map Text Decode.string
