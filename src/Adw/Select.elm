module Adw.Select exposing (..)

import Html exposing (..)


select : List (Attribute msg) -> Html msg -> Html msg
select attrs child =
    node "adw-select" attrs [ child ]
