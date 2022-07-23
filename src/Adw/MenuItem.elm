module Adw.MenuItem exposing (..)

import Html exposing (Attribute, Html, node)
import Html.Attributes exposing (attribute)


menuItem : List (Attribute msg) -> List (Html msg) -> Html msg
menuItem =
    node "adw-menu-item"


iconSlot : Attribute msg
iconSlot =
    attribute "slot" "icon"
