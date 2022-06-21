module Adw.GlowDot exposing (glowDot)

import Html exposing (..)
import Html.Attributes exposing (property)
import Json.Encode as Encode


glowDot : Bool -> List (Attribute msg) -> List (Html msg) -> Html msg
glowDot glowing attrs =
    node "adw-glow-dot" (property "glowing" (Encode.bool glowing) :: attrs)
