module App.Types.LaunchMode exposing (..)

import Json.Decode as Decode


type LaunchMode
    = Production
    | Development


decoder : Decode.Decoder LaunchMode
decoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "production" ->
                        Decode.succeed Production

                    "development" ->
                        Decode.succeed Development

                    _ ->
                        Decode.succeed Production
            )
