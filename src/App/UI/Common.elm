module App.UI.Common exposing (pageHeader)

import App.Session as Session
import CssModules
import Html exposing (..)
import Html.Attributes as Attrs exposing (..)
import Html5 exposing (..)


scopedClass : CssModules.CssModules -> String -> Attribute msg
scopedClass =
    CssModules.class "App.UI.Common"


pageHeader : Session.Session -> { title : String } -> List (Attribute msg) -> Html msg
pageHeader { cssModules } { title } attrs =
    let
        class =
            scopedClass cssModules
    in
    div (class "pageHeader" :: attrs)
        [ node "turtle-button"
            [ Attrs.title "Back to top", attribute "icon-only" "", attribute "lightdom" "", attribute "rounded" "" ]
            [ node "turtle-arrow-icon" [ attribute "direction" "left", slot "icon" ] []
            , a [ href "." ] [ text "Back to top" ]
            ]
        , h1 [ class "pageHeader-text" ] [ text title ]
        ]
