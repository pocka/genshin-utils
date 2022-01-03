module CssModules exposing (CssModules, class, cssModulesDecoder, empty)

import Dict
import Html exposing (Attribute)
import Html.Attributes as Attrs
import Json.Decode as Decode


type Class
    = Class String


classDecoder : Decode.Decoder Class
classDecoder =
    Decode.map Class Decode.string


unwrap : Class -> String
unwrap c =
    case c of
        Class str ->
            str


type alias CssModules =
    Dict.Dict String (Dict.Dict String Class)


cssModulesDecoder : Decode.Decoder CssModules
cssModulesDecoder =
    Decode.dict (Decode.dict classDecoder)


class : String -> CssModules -> String -> Attribute msg
class namespace map key =
    Dict.get namespace map
        |> Maybe.withDefault Dict.empty
        |> Dict.get key
        |> Maybe.withDefault (Class "")
        |> unwrap
        |> Attrs.class


empty : CssModules
empty =
    Dict.empty
