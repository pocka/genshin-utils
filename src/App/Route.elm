module App.Route exposing (Route(..), fromUrl)

import Url
import Url.Parser as Parser


type Route
    = NotFound
    | Configuration
    | Dashboard
    | RandomEventCounter


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

        _ ->
            NotFound


parser : Parser.Parser (Route -> a) a
parser =
    Parser.fragment fragmentToRoute


fromUrl : Url.Url -> Route
fromUrl url =
    Parser.parse parser url |> Maybe.withDefault NotFound
