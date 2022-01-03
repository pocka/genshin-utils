module App.Pages.Dashboard exposing (Model, Msg, init, subscriptions, update, view)

import App.Session as Session
import Browser
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html5 exposing (..)



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


link : (String -> Attribute msg) -> { title : String, description : String, href : String } -> Html msg
link class { title, description, href } =
    a [ class "link", Html.Attributes.href href ]
        [ span [ class "link-title" ]
            [ span [] [ text title ]
            , node "turtle-arrow-icon" [ class "link-icon", attribute "direction" "right", aria "hidden" "true" ] []
            ]
        , span [ class "link-description" ] [ text description ]
        ]


view : Model -> Browser.Document Msg
view { session } =
    let
        class =
            CssModules.class "App.Pages.Dashboard" session.cssModules
    in
    { title = "Dashboard"
    , body =
        [ div [ class "container" ]
            [ div [ class "links" ]
                [ link class
                    { title = "Random Event Counter"
                    , description = "Log and Manage how many times left you can get a reward by completing a random event/quest."
                    , href = "#randoms"
                    }
                , link class
                    { title = "Config"
                    , description = "Configure this application."
                    , href = "#config"
                    }
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
