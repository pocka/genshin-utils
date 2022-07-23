module Adw.NavItem exposing (active, iconSlot, navItem)

import Html exposing (Attribute, Html, node)
import Html.Attributes exposing (attribute, property)
import Json.Encode as Encode


navItem : List (Attribute msg) -> List (Html msg) -> Html msg
navItem =
    node "adw-nav-item"


active : Bool -> Attribute msg
active v =
    property "active" (Encode.bool v)


iconSlot : Attribute msg
iconSlot =
    attribute "slot" "icon"
