module App.RandomEventReward exposing (RandomEventReward, decoder, encode, max, nextResetAt, refresh)

import App.ReferenceServer exposing (ReferenceServer, TzOffset(..))
import Json.Decode as Decode
import Json.Encode as Encode
import Time
import Time.Extra as TimeExtra


type alias RandomEventReward =
    { remains : Int
    , loggedAt : Time.Posix
    }


encode : RandomEventReward -> Encode.Value
encode value =
    Encode.object
        [ ( "remains", Encode.int value.remains )
        , ( "loggedAt", Encode.int (Time.posixToMillis value.loggedAt) )
        ]


decoder : Decode.Decoder RandomEventReward
decoder =
    Decode.map2
        RandomEventReward
        (Decode.field "remains" Decode.int)
        (Decode.field "loggedAt" Decode.int |> Decode.map Time.millisToPosix)


{-| When will the counter resets at next? (UTC)
NOTE: Server resets at 4AM on server time zone.
-}
nextResetAt : Time.Posix -> ReferenceServer -> Time.Posix
nextResetAt date server =
    let
        resetHour =
            case server.tzOffset of
                TzOffset offset ->
                    modBy 24 (4 - offset)

        dayOffset =
            if Time.toHour Time.utc date >= resetHour then
                1

            else
                0
    in
    date
        |> TimeExtra.add TimeExtra.Day dayOffset Time.utc
        |> TimeExtra.floor TimeExtra.Day Time.utc
        |> TimeExtra.add TimeExtra.Hour resetHour Time.utc


max : Int
max =
    10


{-| Reset counter if necessary.
-}
refresh : ReferenceServer -> Time.Posix -> RandomEventReward -> RandomEventReward
refresh server now source =
    if Time.posixToMillis now >= Time.posixToMillis (nextResetAt source.loggedAt server) then
        { remains = max, loggedAt = now }

    else
        source
