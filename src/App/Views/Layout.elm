module App.Views.Layout exposing (..)

import App.Booted exposing (Model)
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)


layout : Model -> Html msg -> List (Html msg) -> List (Html msg)
layout { system } menu body =
    let
        class =
            CssModules.class "Views.Layout" system.cssModules
    in
    [ node "main" [ class "main" ] body
    , nav [ class "nav" ] [ menu ]
    ]
