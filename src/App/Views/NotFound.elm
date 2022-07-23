module App.Views.NotFound exposing (view)

import App.Booted exposing (Model, Msg(..))
import CssModules
import Html exposing (..)
import Url


view : Model -> Html Msg
view { system } =
    let
        class =
            CssModules.class "Views.NotFound" system.cssModules
    in
    div [ class "container" ]
        [ p [ class "paragraph" ] [ text "Sorry, this page does not exist." ]
        , pre [ class "url" ]
            [ code [] [ text (Url.toString system.url) ] ]
        ]
