module Adw.Menu exposing (..)

import Html exposing (..)


menu : List (Attribute msg) -> List (Html msg) -> Html msg
menu =
    node "adw-menu"
