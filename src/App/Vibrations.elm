module App.Vibrations exposing (quickKnock)

import Vibration exposing (PulsePattern, pulse)


quickKnock : PulsePattern
quickKnock =
    [ pulse 8 ]
