module App.Pages.NotFound exposing (Model, Msg, init, subscriptions, update, view)

import App.Session as Session
import App.UI.Common exposing (pageHeader)
import Browser
import CssModules
import Html exposing (..)
import Url



-- MODEL


type alias Model =
    { session : Session.Session
    }


init : Session.Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }, Cmd.none )



-- UPDATE


type alias Msg =
    ()


update : Msg -> Model -> ( Model, Cmd Msg )
update _ model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Browser.Document Msg
view { session } =
    let
        class =
            CssModules.class "App.Pages.NotFound" session.cssModules
    in
    { title = "Page not found"
    , body =
        [ pageHeader session { title = "Page Not Found" } []
        , div [ class "container" ]
            [ p [ class "paragraph" ] [ text "Sorry, this page does not exist." ]
            , pre [ class "url" ]
                [ code [] [ text (Url.toString session.url) ] ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
