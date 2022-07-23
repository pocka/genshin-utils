module Adw.Nav exposing (actionSlot, nav)

import Html exposing (Attribute, Html, node)
import Html.Attributes exposing (attribute)


nav : List (Attribute msg) -> List (Html msg) -> Html msg
nav =
    node "adw-nav"


actionSlot : Attribute msg
actionSlot =
    attribute "slot" "action"
