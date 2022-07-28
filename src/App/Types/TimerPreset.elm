module App.Types.TimerPreset exposing (TimerPreset, decoder)

import App.Types.Duration as Duration
import App.Types.Language as Lang
import Dict
import Json.Decode as Decode


type alias TimerPreset =
    { name : Lang.Language -> String
    , duration : Duration.Duration
    }


decoder : Decode.Decoder TimerPreset
decoder =
    Decode.map2
        TimerPreset
        (Decode.map2 (\default -> \map -> \lang -> Dict.get (Lang.toString lang) map |> Maybe.withDefault default) (Decode.at [ "name", "default" ] Decode.string) (Decode.field "name" (Decode.dict Decode.string)))
        (Decode.field "duration" Duration.decoder)
