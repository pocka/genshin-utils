module App.Pages.RandomEventCounter exposing (Model, Msg, init, subscriptions, update, view)

import App.Profile as Profile
import App.RandomEventReward as RandomEventReward
import App.Session as Session
import App.UI.Common exposing (pageHeader)
import Browser
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html5 exposing (..)
import String
import Task
import Time



-- MODEL


type alias Model =
    { session : Session.Session
    }


init : Session.Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }, Cmd.none )



-- UPDATE


type Msg
    = UpdateWithTimestamp (Time.Posix -> Msg)
    | Decrement Time.Posix
    | ManualReset Time.Posix
    | PersistProfile


decrementRemains : Time.Posix -> Profile.Profile -> Profile.Profile
decrementRemains now profile =
    case profile.randomEvent of
        Just randomEvent ->
            let
                latest =
                    RandomEventReward.refresh profile.server now randomEvent
            in
            if latest.remains == 0 then
                profile

            else
                { profile | randomEvent = Just { remains = latest.remains - 1, loggedAt = now } }

        Nothing ->
            { profile | randomEvent = Just { remains = RandomEventReward.max - 1, loggedAt = now } }


resetRemains : Time.Posix -> Profile.Profile -> Profile.Profile
resetRemains now profile =
    { profile | randomEvent = Just { remains = RandomEventReward.max, loggedAt = now } }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateWithTimestamp nextMsg ->
            ( model, Task.perform nextMsg Time.now )

        Decrement now ->
            { model | session = Session.mapProfile (decrementRemains now) model.session }
                |> update PersistProfile

        ManualReset now ->
            { model | session = Session.mapProfile (resetRemains now) model.session }
                |> update PersistProfile

        PersistProfile ->
            ( model, Profile.persist model.session.profile )



-- VIEW


view : Model -> Browser.Document Msg
view model =
    let
        remains =
            case model.session.profile.randomEvent of
                Just randomEvent ->
                    randomEvent.remains

                Nothing ->
                    RandomEventReward.max

        class =
            CssModules.class "App.Pages.RandomEventCounter" model.session.cssModules
    in
    { title = "Random event counter"
    , body =
        [ pageHeader model.session { title = "Random event counter" } []
        , div []
            [ div [ class "globalActions" ]
                [ node "turtle-button"
                    [ attribute "variant" "danger"
                    , disabled (remains == RandomEventReward.max)
                    , onClick (UpdateWithTimestamp ManualReset)
                    ]
                    [ node "turtle-reload-icon" [ slot "icon" ] []
                    , text "Reset"
                    ]
                ]
            , button
                [ class "counter"
                , disabled (remains == 0)
                , aria "label" ("You have " ++ String.fromInt remains ++ " rewards left today. Click this button to consume one.")
                , onClick (UpdateWithTimestamp Decrement)
                ]
                [ span [ class "counter--count" ] [ text (String.fromInt remains) ]
                , span [ class "counter--description" ]
                    [ if remains > 0 then
                        span []
                            [ span [ class "tapOrClick" ] []
                            , text " to consume one"
                            ]

                      else
                        text "You claimed all rewards you have today"
                    ]
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
