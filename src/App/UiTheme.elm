module App.UiTheme exposing (..)

import Json.Decode as Decode
import Json.Encode as Encode


type UiTheme
    = SystemDefault
    | Dark
    | Light


toString : UiTheme -> String
toString theme =
    case theme of
        SystemDefault ->
            "system"

        Dark ->
            "dark"

        Light ->
            "light"


encode : UiTheme -> Encode.Value
encode theme =
    Encode.string (toString theme)


{-| Converts from string. All unsupported value will be turned to SystemDefault.
-}
fromString : String -> UiTheme
fromString str =
    case str of
        "dark" ->
            Dark

        "light" ->
            Light

        _ ->
            SystemDefault


decoder : Decode.Decoder UiTheme
decoder =
    Decode.string |> Decode.map fromString
