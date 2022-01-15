module App.Pages.Timer exposing (Model, Msg, init, subscriptions, update, view)

import App.Duration as Duration
import App.Profile as Profile
import App.Session as Session
import App.Timer as Timer exposing (Timer)
import App.UI.Common exposing (pageHeader)
import Browser
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.Keyed
import Html5 exposing (..)
import Task
import Time
import Translation exposing (fmt)



-- MODEL


type alias Model =
    { session : Session.Session
    , now : Maybe Time.Posix
    }


init : Session.Session -> ( Model, Cmd Msg )
init session =
    ( { session = session, now = Nothing }, Task.perform Tick Time.now )



-- UPDATE


type Msg
    = Noop
    | UpdateWithTimestamp (Time.Posix -> Msg)
    | StartTimer Timer Time.Posix
    | IdleTimer Timer
    | Tick Time.Posix
    | DeleteTimer Timer


updateTimer : (Timer -> Timer) -> Timer -> List Timer -> List Timer
updateTimer f timer list =
    list
        |> List.map
            (\t ->
                if timer.id == t.id then
                    f t

                else
                    t
            )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        UpdateWithTimestamp nextMsg ->
            ( model, Task.perform nextMsg Time.now )

        StartTimer timer now ->
            let
                session =
                    Session.mapProfile (\p -> { p | timers = updateTimer (\t -> { t | state = Timer.Running now }) timer p.timers }) model.session
            in
            ( { model | session = session }, Profile.persist session.profile )

        IdleTimer timer ->
            let
                session =
                    Session.mapProfile (\p -> { p | timers = updateTimer (\t -> { t | state = Timer.Idle }) timer p.timers }) model.session
            in
            ( { model | session = session }, Profile.persist session.profile )

        Tick now ->
            ( { model | now = Just now }, Cmd.none )

        DeleteTimer timer ->
            let
                session =
                    Session.mapProfile (\p -> { p | timers = List.filter (\t -> not (t.id == timer.id)) p.timers }) model.session
            in
            ( { model | session = session }, Profile.persist session.profile )



-- VIEW


cssModules : CssModules.CssModules -> String -> Attribute msg
cssModules =
    CssModules.class "App.Pages.Timer"


empty : Model -> Html msg
empty model =
    let
        class =
            cssModules model.session.cssModules

        t key =
            fmt [] (key model.session.translation.timerPage.empty)

        ta key =
            fmt [] (key model.session.translation.timerPage.actions)
    in
    div [ class "empty" ]
        [ h2 [ class "empty--title" ] [ text (t .title) ]
        , p [ class "empty--description" ] [ text (t .description) ]
        , div [ class "empty--action" ]
            [ node "turtle-button"
                [ attribute "variant" "primary", attribute "lightdom" "" ]
                [ a [ href "#timers/new" ] [ text (ta .create) ]
                ]
            ]
        ]


timerCard : Model -> Timer -> Html Msg
timerCard model timer =
    let
        language =
            model.session.profile.preference.language

        class =
            cssModules model.session.cssModules

        dict =
            model.session.translation.timerPage

        t key =
            fmt [] (key model.session.translation.timerPage)

        ta key =
            t (\d -> key d.actions)
    in
    node "turtle-card"
        [ attribute "bordered" "", role "listitem" ]
        (span [ slot "title" ] [ text timer.name ]
            :: (case timer.state of
                    Timer.Idle ->
                        [ p [ class "timer--text" ] [ text (fmt [ Duration.toString language (Duration.Detailed Duration.Minutes) timer.duration ] dict.timerCard.duration) ]
                        , node "turtle-card-action" [ slot "action", onClick (UpdateWithTimestamp (StartTimer timer)) ] [ text (ta .start) ]
                        , node "turtle-card-action" [ slot "action", onClick (DeleteTimer timer) ] [ text (ta .delete) ]
                        ]

                    Timer.Running start ->
                        let
                            remains =
                                case model.now of
                                    Nothing ->
                                        "---"

                                    Just now ->
                                        (Time.posixToMillis start + Duration.toInt timer.duration)
                                            - Time.posixToMillis now
                                            |> Duration.fromInt
                                            |> Duration.toString language (Duration.Detailed Duration.Seconds)

                            current =
                                case model.now of
                                    Nothing ->
                                        0

                                    Just now ->
                                        Time.posixToMillis now
                                            - Time.posixToMillis start
                                            |> Basics.max 0
                        in
                        [ p [ class "timer--text" ] [ text (fmt [ remains ] dict.timerCard.remains) ]
                        , node "turtle-progressbar"
                            [ class "timer--progress" ]
                            [ progress
                                [ Html.Attributes.max (String.fromInt (Duration.toInt timer.duration))
                                , value (String.fromInt current)
                                ]
                                []
                            ]
                        , node "turtle-card-action" [ slot "action", onClick (IdleTimer timer) ] [ text (ta .stop) ]
                        ]

                    Timer.Completed _ end ->
                        let
                            remains =
                                case model.now of
                                    Nothing ->
                                        "---"

                                    Just now ->
                                        Time.posixToMillis now
                                            - Time.posixToMillis end
                                            |> Duration.fromInt
                                            |> Duration.toString language Duration.Rough
                        in
                        [ p [ class "timer--text" ] [ text (fmt [ remains ] dict.timerCard.ended) ]
                        , node "turtle-progressbar" [ class "timer--progress--completed" ] [ progress [ Html.Attributes.max "100", value "100" ] [] ]
                        , node "turtle-card-action" [ slot "action", onClick (IdleTimer timer) ] [ text (ta .clear) ]
                        ]
               )
        )


timerList : Model -> List Timer -> Html Msg
timerList model timers =
    let
        class =
            cssModules model.session.cssModules
    in
    timers
        |> List.map (\timer -> ( Timer.idToString timer.id, timerCard model timer ))
        |> Html.Keyed.node "ul" [ class "list" ]


view : Model -> Browser.Document Msg
view model =
    let
        class =
            CssModules.class "App.Pages.Timer" model.session.cssModules

        t key =
            fmt [] (key model.session.translation.timerPage)
    in
    { title = t .title
    , body =
        [ pageHeader model.session { title = t .title } []
        , if List.isEmpty model.session.profile.timers then
            empty model

          else
            let
                ( inactiveTimers, activeTimers ) =
                    List.partition (\timer -> timer.state == Timer.Idle) model.session.profile.timers
            in
            div [ class "container" ]
                [ div [ class "actions" ]
                    [ node "turtle-button" [ attribute "variant" "primary", attribute "lightdom" "" ] [ a [ href "#timers/new" ] [ text (t (\d -> d.actions.create)) ] ]
                    ]
                , case activeTimers of
                    [] ->
                        div [ class "empty", class "section" ]
                            [ h2 [ class "empty--title" ] [ text (t (\d -> d.active.empty.title)) ]
                            , p [ class "empty--description" ] [ text (t (\d -> d.active.empty.description)) ]
                            ]

                    _ ->
                        div [ class "section" ]
                            [ h2 [ class "section--title" ]
                                [ text (t (\d -> d.active.heading))
                                ]
                            , timerList model activeTimers
                            ]
                , case inactiveTimers of
                    [] ->
                        div [ class "empty", class "section" ]
                            [ h2 [ class "empty--title" ] [ text (t (\d -> d.inactive.empty.title)) ]
                            , p [ class "empty--description" ] [ text (t (\d -> d.inactive.empty.description)) ]
                            ]

                    _ ->
                        div [ class "section" ]
                            [ h2 [ class "section--title" ]
                                [ text (t (\d -> d.inactive.heading))
                                ]
                            , timerList model inactiveTimers
                            ]
                ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    case model.session.profile.timers of
        [] ->
            Sub.none

        _ ->
            Time.every 1000 Tick
