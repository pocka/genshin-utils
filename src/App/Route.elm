module App.Route exposing (Route(..), fromUrl)

import Url
import Url.Parser as Parser


type Route
    = NotFound
    | Configuration
    | Dashboard
    | RandomEventCounter
    | Timer
    | NewTimer


fragmentToRoute : Maybe String -> Route
fragmentToRoute fragment =
    case fragment of
        Just "" ->
            Dashboard

        Nothing ->
            Dashboard

        Just "config" ->
            Configuration

        Just "randoms" ->
            RandomEventCounter

        Just "timers" ->
            Timer

        Just "timers/new" ->
            NewTimer

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
