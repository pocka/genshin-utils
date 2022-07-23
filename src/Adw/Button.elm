module Adw.Button exposing (Size(..), Variant(..), button, disabled, iconOnly, loading, size, variant)

import Html exposing (..)
import Html.Attributes exposing (attribute, property)
import Json.Encode as Encode


button : List (Attribute msg) -> List (Html msg) -> Html msg
button =
    node "adw-button"


type Variant
    = Primary
    | Neutral


variant : Variant -> Attribute msg
variant v =
    attribute "variant"
        (case v of
            Primary ->
                "primary"

            Neutral ->
                "neutral"
        )


type Size
    = Large
    | Medium


size : Size -> Attribute msg
size s =
    attribute "size"
        (case s of
            Large ->
                "large"

            Medium ->
                "medium"
        )


loading : Bool -> Attribute msg
loading v =
    property "loading" (Encode.bool v)


disabled : Bool -> Attribute msg
disabled v =
    property "disabled" (Encode.bool v)


iconOnly : Bool -> Attribute msg
iconOnly v =
    property "iconOnly" (Encode.bool v)
