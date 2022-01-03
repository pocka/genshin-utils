module Html5 exposing (..)

import Html
import Html.Attributes exposing (attribute)


slot : String -> Html.Attribute msg
slot name =
    attribute "slot" name


aria : String -> String -> Html.Attribute msg
aria name =
    attribute ("aria-" ++ name)
