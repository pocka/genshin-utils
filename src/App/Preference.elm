module App.Preference exposing (OnOffFeature(..), Preference, boolToOnOff, decoder, default, encode)

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
    }


decoder : Decode.Decoder Preference
decoder =
    Decode.map
        Preference
        (Decode.field "feedbackVibration" togglePreferenceDecoder)


encode : Preference -> Encode.Value
encode p =
    Encode.object
        [ ( "version", Encode.string "1" )
        , ( "feedbackVibration", Encode.bool (onOffToBool p.feedbackVibration) )
        ]


default : Preference
default =
    { feedbackVibration = Disabled
    }
