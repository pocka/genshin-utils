module Adw.Dropdown exposing (..)

import Html exposing (..)
import Html.Attributes exposing (attribute)


dropdown : List (Attribute msg) -> List (Html msg) -> Html msg
dropdown =
    node "adw-dropdown"


triggerSlot : Attribute msg
triggerSlot =
    attribute "slot" "trigger"
