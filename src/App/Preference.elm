module App.Preference exposing (OnOffFeature(..), Preference, boolToOnOff, decoder, default, encode)

import App.Types.Language as Language exposing (Language)
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
    , inAppNotification : OnOffFeature
    , browserNotification : OnOffFeature
    }


v1Decoder : Decode.Decoder Preference
v1Decoder =
    Decode.map
        (\v -> Preference v Language.enGB Enabled Disabled)
        (Decode.field "feedbackVibration" togglePreferenceDecoder)


v2Decoder : Decode.Decoder Preference
v2Decoder =
    Decode.map2
        Preference
        (Decode.field "feedbackVibration" togglePreferenceDecoder)
        (Decode.field "language" Language.decoder)
        |> Decode.map (\p -> p Enabled Disabled)


v3Decoder : Decode.Decoder Preference
v3Decoder =
    Decode.map4
        Preference
        (Decode.field "feedbackVibration" togglePreferenceDecoder)
        (Decode.field "language" Language.decoder)
        (Decode.field "inAppNotification" togglePreferenceDecoder)
        (Decode.field "browserNotification" togglePreferenceDecoder)


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

                    "3" ->
                        v3Decoder

                    _ ->
                        v1Decoder
            )


encode : Preference -> Encode.Value
encode p =
    Encode.object
        [ ( "version", Encode.string "3" )
        , ( "feedbackVibration", Encode.bool (onOffToBool p.feedbackVibration) )
        , ( "language", Language.encode p.language )
        , ( "inAppNotification", Encode.bool (onOffToBool p.inAppNotification) )
        , ( "browserNotification", Encode.bool (onOffToBool p.browserNotification) )
        ]


default : Preference
default =
    { feedbackVibration = Disabled
    , language = Language.enGB
    , inAppNotification = Enabled
    , browserNotification = Disabled
    }
