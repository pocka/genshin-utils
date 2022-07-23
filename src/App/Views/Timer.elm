module App.Views.Timer exposing (view)

import Adw.Button
import Adw.Dropdown
import Adw.Menu
import Adw.MenuItem
import Adw.Progress
import App.Booted exposing (Model, Msg(..))
import App.Timer as Timer exposing (Timer)
import App.Types.Duration as Duration
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.Keyed
import RadixIcons.Icon as Icon
import Time
import Translation exposing (fmt)


cssModules : CssModules.CssModules -> String -> Attribute msg
cssModules =
    CssModules.class "Views.Timer"


empty : Model -> Html msg
empty model =
    let
        class =
            cssModules model.system.cssModules

        t key =
            fmt [] (key model.system.translation.timerPage.empty)

        ta key =
            fmt [] (key model.system.translation.timerPage.actions)
    in
    div [ class "empty" ]
        [ h2 [ class "emptyTitle" ] [ text (t .title) ]
        , p [ class "emptyDescription" ] [ text (t .description) ]
        , Adw.Button.button
            [ Adw.Button.variant Adw.Button.Primary, Adw.Button.size Adw.Button.Large, disabled True ]
            [ a [ href "#timers/presets" ] [ text (ta .presets) ] ]
        , Adw.Button.button
            [ Adw.Button.size Adw.Button.Large ]
            [ a [ href "#timers/new" ] [ text (ta .create) ] ]
        ]


timerCard : Model -> Timer -> Html Msg
timerCard model timer =
    let
        language =
            model.app.profile.preference.language

        class =
            cssModules model.system.cssModules

        dict =
            model.system.translation.timerPage

        t key =
            fmt [] (key model.system.translation.timerPage)

        ta key =
            t (\d -> key d.actions)

        menu =
            Adw.Dropdown.dropdown
                []
                [ Adw.Button.button
                    [ Adw.Dropdown.triggerSlot
                    , Adw.Button.iconOnly True
                    , title (ta .menu)
                    ]
                    [ button [] [ Icon.icon Icon.DotsVertical [] ] ]
                , Adw.Menu.menu [ id ("timer_entry_" ++ Timer.idToString timer.id) ]
                    [ Adw.MenuItem.menuItem []
                        [ Icon.icon Icon.Trash [ Adw.MenuItem.iconSlot ]
                        , button [ onClick (DeleteTimer timer) ] [ text (ta .delete) ]
                        ]
                    ]
                ]
    in
    case timer.state of
        Timer.Idle ->
            li [ class "timer" ]
                [ div [ class "timer--header" ]
                    [ div
                        [ class "timer--header--info" ]
                        [ span [ class "timer--header--info--title" ] [ text timer.name ]
                        , div [ class "timer--header--info--status" ]
                            [ Adw.Progress.progress []
                            , span []
                                [ text
                                    (fmt
                                        [ Duration.toString language (Duration.Detailed Duration.Minutes) timer.duration ]
                                        dict.timerCard.duration
                                    )
                                ]
                            ]
                        ]
                    , menu
                    ]
                , Adw.Button.button
                    [ Adw.Button.size Adw.Button.Large
                    ]
                    [ button
                        [ onClick (StartTimer timer) ]
                        [ text (ta .start) ]
                    ]
                ]

        Timer.Running start ->
            let
                remains =
                    (Time.posixToMillis start + Duration.toInt timer.duration)
                        - Time.posixToMillis model.system.now
                        |> Duration.fromInt
                        |> Duration.toString language (Duration.Detailed Duration.Seconds)

                progress =
                    let
                        a =
                            Time.posixToMillis model.system.now
                                - Time.posixToMillis start
                                |> toFloat

                        b =
                            timer.duration
                                |> Duration.toInt
                                |> toFloat
                    in
                    a
                        / b
                        |> Basics.min 1.0
                        |> Basics.max 0.0
            in
            li [ class "timer" ]
                [ div
                    [ class "timer--header" ]
                    [ div [ class "timer--header--info" ]
                        [ span [ class "timer--header--info--title" ] [ text timer.name ]
                        , div [ class "timer--header--info--status" ]
                            [ Adw.Progress.progress [ Adw.Progress.value progress ]
                            , span [] [ text (fmt [ remains ] dict.timerCard.remains) ]
                            ]
                        ]
                    ]
                , Adw.Button.button [ Adw.Button.size Adw.Button.Large ]
                    [ button [ onClick (StopTimer timer) ] [ text (ta .stop) ]
                    ]
                ]

        Timer.Completed _ _ ->
            li [ class "timer" ]
                [ div [ class "timer--header" ]
                    [ div
                        [ class "timer--header--info" ]
                        [ span [ class "timer--header--info--title" ] [ text timer.name ]
                        , div [ class "timer--header--info--status" ]
                            [ Adw.Progress.progress [ Adw.Progress.value 1.0 ]
                            , span []
                                [ text "Completed!"
                                ]
                            ]
                        ]
                    , menu
                    ]
                , Adw.Button.button
                    [ Adw.Button.size Adw.Button.Large
                    , Adw.Button.variant Adw.Button.Primary
                    ]
                    [ button
                        [ onClick (StopTimer timer) ]
                        [ text (ta .clear) ]
                    ]
                ]


timerList : Model -> List Timer -> Html Msg
timerList model timers =
    let
        class =
            cssModules model.system.cssModules
    in
    timers
        |> List.map (\timer -> ( Timer.idToString timer.id, timerCard model timer ))
        |> Html.Keyed.node "ul" [ class "timers" ]


view : Model -> Html Msg
view model =
    let
        class =
            cssModules model.system.cssModules

        t key =
            fmt [] (key model.system.translation.timerPage)
    in
    if List.isEmpty model.app.profile.timers then
        empty model

    else
        div [ class "container" ]
            [ div [ class "header" ]
                [ div [ class "actions" ]
                    [ Adw.Button.button
                        [ Adw.Button.variant Adw.Button.Primary, disabled True ]
                        [ a [ href "#timers/presets" ] [ text (t (\d -> d.actions.presets)) ] ]
                    , Adw.Button.button
                        []
                        [ a [ href "#timers/new" ] [ text (t (\d -> d.actions.create)) ] ]
                    ]
                , p [ class "description" ] [ text (t .description) ]
                ]
            , timerList model model.app.profile.timers
            ]
