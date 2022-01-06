port module Vibration exposing (PulsePattern, PulseUnit, joinPatterns, patternPause, pause, pulse, repeat, vibrate)

import Json.Encode as Encode



-- PORTS (OUT)


type OutgoingEvent
    = Vibrate PulsePattern


encodeOutgoingEvent : OutgoingEvent -> Encode.Value
encodeOutgoingEvent ev =
    case ev of
        Vibrate pattern ->
            Encode.object
                [ ( "type", Encode.string "Vibrate" )
                , ( "pattern", encodePulsePattern pattern )
                ]


port sendVibrationEvent : Encode.Value -> Cmd msg


vibrate : PulsePattern -> Cmd msg
vibrate pattern =
    pattern
        |> Vibrate
        |> encodeOutgoingEvent
        |> sendVibrationEvent



-- DATA


type alias PulseUnit =
    ( Int, Int )


type alias PulsePattern =
    List PulseUnit


pulsePatternToArray : PulsePattern -> List Int
pulsePatternToArray pattern =
    case pattern of
        [] ->
            []

        ( pa, _ ) :: [] ->
            [ pa ]

        ( pa, pu ) :: xs ->
            pa :: (pu :: pulsePatternToArray xs)


encodePulsePattern : PulsePattern -> Encode.Value
encodePulsePattern pattern =
    pattern
        |> pulsePatternToArray
        |> Encode.list Encode.int


pulse : Int -> PulseUnit
pulse ms =
    ( ms, 0 )


pause : Int -> PulseUnit -> PulseUnit
pause ms ( pulseMs, _ ) =
    ( pulseMs, ms )


repeat : ( Int, Int ) -> Int -> PulsePattern
repeat unit times =
    List.repeat times unit


patternPause : Int -> PulsePattern -> PulsePattern
patternPause ms pattern =
    case pattern of
        [] ->
            []

        ( pa, _ ) :: [] ->
            [ ( pa, ms ) ]

        x :: xs ->
            x :: patternPause ms xs


joinPatterns : List PulsePattern -> PulsePattern
joinPatterns list =
    List.foldr (++) [] list
