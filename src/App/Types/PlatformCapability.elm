module App.Types.PlatformCapability exposing (..)

import Json.Decode as Decode


type PlatformCapability
    = Supported
    | NotSupported


decoder : Decode.Decoder PlatformCapability
decoder =
    Decode.bool
        |> Decode.map
            (\b ->
                if b then
                    Supported

                else
                    NotSupported
            )
