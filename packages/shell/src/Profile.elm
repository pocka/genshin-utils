module Profile exposing (GenshinServer, Profile, ProfileLoadError(..), decodeProfile, encodeProfile)

import Json.Decode as Decode
import Json.Encode as Encode


type alias GenshinServer =
    { name : String
    , tzOffset : Int
    }


type alias Profile =
    { id : String
    , name : String
    , color : Maybe String
    , server : GenshinServer
    }


type ProfileLoadError
    = NoAvailableRemoteError -- Remote container is not available
    | RuntimeError -- An error happened during calling remote function
    | InvalidPayloadError -- Failed to decode


decodeProfile : Decode.Decoder Profile
decodeProfile =
    Decode.map4 Profile
        (Decode.field "id" Decode.string)
        (Decode.field "name" Decode.string)
        (Decode.maybe (Decode.field "color" Decode.string))
        (Decode.map2 GenshinServer
            (Decode.at [ "server", "name" ] Decode.string)
            (Decode.at [ "server", "tzOffset" ] Decode.int)
        )


encodeProfile : Profile -> Encode.Value
encodeProfile profile =
    let
        baseProps =
            [ ( "id", Encode.string profile.id )
            , ( "name", Encode.string profile.name )
            , ( "server"
              , Encode.object
                    [ ( "name", Encode.string profile.server.name )
                    , ( "tzOffset", Encode.int profile.server.tzOffset )
                    ]
              )
            ]
    in
    Encode.object
        (case profile.color of
            Just color ->
                ( "color", Encode.string color ) :: baseProps

            Nothing ->
                baseProps
        )
