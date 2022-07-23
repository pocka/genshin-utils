module Adw.Progress exposing (progress, value)

import Html exposing (Attribute, Html, node)
import Html.Attributes exposing (property)
import Json.Encode


progress : List (Attribute msg) -> Html msg
progress attrs =
    node "adw-progress" attrs []


value : Float -> Attribute msg
value v =
    property "value" (Json.Encode.float v)
