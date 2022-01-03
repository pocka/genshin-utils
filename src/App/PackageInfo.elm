module App.PackageInfo exposing (Author, PackageJson, empty, packageJsonDecoder)

import Json.Decode as Decode
import Url


type alias Author =
    { name : String
    , email : Maybe String
    }


authorDecoder : Decode.Decoder Author
authorDecoder =
    Decode.oneOf
        [ Decode.map (\name -> { name = name, email = Nothing }) Decode.string
        , Decode.map2 Author (Decode.field "name" Decode.string) (Decode.maybe (Decode.field "email" Decode.string))
        ]


type alias PackageJson =
    { version : String
    , license : String
    , author : Author
    , contributors : List Author
    , homepage : Url.Url
    , repository : Url.Url
    }


dummyUrl : Url.Url
dummyUrl =
    { protocol = Url.Https
    , path = "/"
    , host = "example.com"
    , port_ = Nothing
    , query = Nothing
    , fragment = Nothing
    }


empty : PackageJson
empty =
    { version = ""
    , license = ""
    , author = { name = "", email = Nothing }
    , contributors = []
    , homepage = dummyUrl
    , repository = dummyUrl
    }


urlDecoder : Decode.Decoder Url.Url
urlDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case Url.fromString str of
                    Just url ->
                        Decode.succeed url

                    Nothing ->
                        Decode.fail "Could not parse given string as a URL"
            )


repositoryFieldDecoder : Decode.Decoder Url.Url
repositoryFieldDecoder =
    Decode.oneOf
        [ urlDecoder
        , Decode.field "url" urlDecoder
        ]


packageJsonDecoder : Decode.Decoder PackageJson
packageJsonDecoder =
    Decode.map6
        PackageJson
        (Decode.field "version" Decode.string)
        (Decode.field "license" Decode.string)
        (Decode.field "author" authorDecoder)
        (Decode.field "contributors" (Decode.list authorDecoder))
        (Decode.field "homepage" urlDecoder)
        (Decode.field "repository" repositoryFieldDecoder)
