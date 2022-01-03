module App.ReferenceServer exposing (ReferenceServer, TzOffset(..), decoder, encode)

import Json.Decode as Decode
import Json.Encode as Encode


type TzOffset
    = TzOffset Int


encodeTzOffset : TzOffset -> Encode.Value
encodeTzOffset tzOffset =
    case tzOffset of
        TzOffset x ->
            Encode.int x


type alias ReferenceServer =
    { id : String
    , tzOffset : TzOffset
    , name : String
    , shortName : String
    }


encode : ReferenceServer -> Encode.Value
encode server =
    Encode.object
        [ ( "id", Encode.string server.id )
        , ( "tzOffset", encodeTzOffset server.tzOffset )
        , ( "name", Encode.string server.name )
        , ( "shortName", Encode.string server.shortName )
        ]


decoder : Decode.Decoder ReferenceServer
decoder =
    Decode.map4
        ReferenceServer
        (Decode.field "id" Decode.string)
        (Decode.field "tzOffset" (Decode.map TzOffset Decode.int))
        (Decode.field "name" Decode.string)
        (Decode.field "shortName" Decode.string)
