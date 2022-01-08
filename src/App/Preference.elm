module App.Preference exposing (OnOffFeature(..), Preference, boolToOnOff, decoder, default, encode)

import App.Language as Language exposing (Language)
import Json.Decode as Decode
import Json.Encode as Encode


type OnOffFeature
    = Enabled
    | Disabled


onOffToBool : OnOffFeature -> Bool
onOffToBool o =
    case o of
        Enabled ->
            True

        Disabled ->
            False


boolToOnOff : Bool -> OnOffFeature
boolToOnOff b =
    if b then
        Enabled

    else
        Disabled


togglePreferenceDecoder : Decode.Decoder OnOffFeature
togglePreferenceDecoder =
    Decode.bool |> Decode.map boolToOnOff


type alias Preference =
    { feedbackVibration : OnOffFeature
    , language : Language
    }


v1Decoder : Decode.Decoder Preference
v1Decoder =
    Decode.map
        (\v -> Preference v Language.enGB)
        (Decode.field "feedbackVibration" togglePreferenceDecoder)


v2Decoder : Decode.Decoder Preference
v2Decoder =
    Decode.map2
        Preference
        (Decode.field "feedbackVibration" togglePreferenceDecoder)
        (Decode.field "language" Language.decoder)


decoder : Decode.Decoder Preference
decoder =
    Decode.field "version" Decode.string
        |> Decode.andThen
            (\v ->
                case v of
                    "1" ->
                        v1Decoder

                    "2" ->
                        v2Decoder

                    _ ->
                        v1Decoder
            )


encode : Preference -> Encode.Value
encode p =
    Encode.object
        [ ( "version", Encode.string "2" )
        , ( "feedbackVibration", Encode.bool (onOffToBool p.feedbackVibration) )
        , ( "language", Language.encode p.language )
        ]


default : Preference
default =
    { feedbackVibration = Disabled
    , language = Language.enGB
    }
