module Adw.Input exposing (..)

import Html exposing (..)


input : List (Attribute msg) -> Html msg -> Html msg
input attrs child =
    node "adw-input" attrs [ child ]
