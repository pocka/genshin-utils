module App.Vibrations exposing (quickKnock)

import Browser.Extra.Vibration exposing (PulsePattern, pulse)


quickKnock : PulsePattern
quickKnock =
    [ pulse 8 ]
