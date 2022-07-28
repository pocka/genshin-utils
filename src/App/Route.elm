module App.Route exposing (Route(..), fromUrl, hash)

import Url
import Url.Parser as Parser


type Route
    = NotFound
    | About
    | Configuration
    | RandomEventCounter
    | Timer
    | NewTimer
    | TimerPresets


hash : Route -> String
hash route =
    case route of
        NotFound ->
            "#"

        About ->
            "#about"

        Configuration ->
            "#config"

        RandomEventCounter ->
            "#randoms"

        Timer ->
            "#timers"

        NewTimer ->
            "#timers/new"

        TimerPresets ->
            "#timers/presets"


fragmentToRoute : Maybe String -> Route
fragmentToRoute fragment =
    case fragment of
        Just "" ->
            Timer

        Nothing ->
            Timer

        Just "about" ->
            About

        Just "config" ->
            Configuration

        Just "randoms" ->
            RandomEventCounter

        Just "timers" ->
            Timer

        Just "timers/new" ->
            NewTimer

        Just "timers/presets" ->
            TimerPresets

        _ ->
            NotFound


parser : Parser.Parser (Route -> a) a
parser =
    Parser.fragment fragmentToRoute


fromUrl : Url.Url -> Route
fromUrl url =
    -- elm/url cannot skip path parsing while docs says it can
    -- https://github.com/elm/url/issues/36
    -- https://github.com/elm/url/issues/17
    Parser.parse parser { url | path = "" } |> Maybe.withDefault NotFound
