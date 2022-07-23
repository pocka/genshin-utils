module Adw.Switch exposing (..)

import Html exposing (..)
import Html.Attributes exposing (property)
import Json.Encode


switch : List (Attribute msg) -> Html msg
switch attrs =
    node "adw-switch" attrs []


checked : Bool -> Attribute msg
checked v =
    property "checked" (Json.Encode.bool v)


readOnly : Bool -> Attribute msg
readOnly v =
    property "readOnly" (Json.Encode.bool v)


disabled : Bool -> Attribute msg
disabled v =
    property "disabled" (Json.Encode.bool v)
