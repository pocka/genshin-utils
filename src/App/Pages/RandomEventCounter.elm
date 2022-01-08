module App.Pages.RandomEventCounter exposing (Model, Msg, init, subscriptions, update, view)

import App.Preference as Preference
import App.Profile as Profile
import App.RandomEventReward as RandomEventReward
import App.Session as Session
import App.UI.Common exposing (pageHeader)
import App.Vibrations exposing (quickKnock)
import Browser
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html5 exposing (..)
import Json.Decode as Decode
import Process
import String
import Task
import Time
import Translation exposing (fmt)
import Vibration



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
    | Increment Time.Posix
    | WaitAndUpdate Msg Float
    | Vibrate
    | Noop


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


incrementRemains : Time.Posix -> Profile.Profile -> Profile.Profile
incrementRemains now profile =
    case profile.randomEvent of
        Just randomEvent ->
            let
                latest =
                    RandomEventReward.refresh profile.server now randomEvent
            in
            if latest.remains == RandomEventReward.max then
                profile

            else
                { profile | randomEvent = Just { remains = latest.remains + 1, loggedAt = now } }

        Nothing ->
            profile


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

        Increment now ->
            { model | session = Session.mapProfile (incrementRemains now) model.session }
                |> update PersistProfile

        ManualReset now ->
            { model | session = Session.mapProfile (resetRemains now) model.session }
                |> update PersistProfile

        PersistProfile ->
            ( model, Profile.persist model.session.profile )

        WaitAndUpdate nextMsg ms ->
            ( model, Task.perform (\_ -> nextMsg) (Process.sleep ms) )

        Vibrate ->
            case model.session.profile.preference.feedbackVibration of
                Preference.Enabled ->
                    ( model, Vibration.vibrate quickKnock )

                Preference.Disabled ->
                    ( model, Cmd.none )

        Noop ->
            ( model, Cmd.none )



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

        t key =
            fmt [] (key model.session.translation.randomEventCounterPage)
    in
    { title = t .title
    , body =
        [ pageHeader model.session { title = t .title } []
        , div []
            [ div [ class "globalActions" ]
                [ node "turtle-pill"
                    [ attribute "pressable" "", onClick (UpdateWithTimestamp Increment) ]
                    [ text (t (\d -> d.actions.undo))
                    , node "turtle-circle-plus-icon" [ slot "action-icon" ] []
                    ]
                , node "turtle-pill"
                    [ attribute "pressable" "", onClick (UpdateWithTimestamp ManualReset) ]
                    [ text (t (\d -> d.actions.reset))
                    , node "turtle-reload-icon" [ slot "action-icon" ] []
                    ]
                ]
            , button
                [ class "counter"
                , disabled (remains == 0)
                , onClick (UpdateWithTimestamp Decrement)
                , on "touchstart"
                    (Decode.succeed
                        (if remains > 0 then
                            WaitAndUpdate Vibrate 30

                         else
                            Noop
                        )
                    )
                ]
                [ span [ class "counter--count" ] [ text (String.fromInt remains) ]
                , span [ class "counter--description" ]
                    [ if remains > 0 then
                        span []
                            [ span [ class "tap" ] [ text (fmt [ t (\d -> d.actions.tap) ] model.session.translation.randomEventCounterPage.buttonDescription) ]
                            , span [ class "click" ] [ text (fmt [ t (\d -> d.actions.click) ] model.session.translation.randomEventCounterPage.buttonDescription) ]
                            ]

                      else
                        text (t .noMoreLeft)
                    ]
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
