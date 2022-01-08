module App.Language exposing (..)

import Json.Decode as Decode
import Json.Encode as Encode


type alias Language =
    -- IETF language tag, e.g. en-US
    { code : String

    -- Display name in its language
    , name : String
    }


fromString : String -> Maybe Language
fromString str =
    languages
        |> List.filter (\l -> l.code == str)
        |> List.head


decoder : Decode.Decoder Language
decoder =
    Decode.string
        |> Decode.andThen
            (\code ->
                fromString code
                    |> Maybe.map Decode.succeed
                    |> Maybe.withDefault (Decode.fail ("[App.Language] Unknown language code: " ++ code))
            )


encode : Language -> Encode.Value
encode lang =
    Encode.string lang.code


enGB : Language
enGB =
    { code = "en-GB"
    , name = "English"
    }


jaJp : Language
jaJp =
    { code = "ja-JP"
    , name = "日本語"
    }


languages : List Language
languages =
    [ enGB, jaJp ]
