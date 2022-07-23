module App.Views.NewTimer exposing (view)

import Adw.Button
import Adw.Input
import App.Booted exposing (Model, Msg(..), NewTimerErrors(..))
import App.Types.Duration as Duration
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Translation exposing (fmt)


view : Model -> Html Msg
view { newTimerForm, app, system } =
    let
        ( fields, result ) =
            newTimerForm

        class =
            CssModules.class "Views.NewTimer" system.cssModules

        t key =
            fmt [] (key system.translation.newTimerPage)
    in
    Html.form [ class "form", onSubmit SubmitNewTimerForm ]
        [ div [ class "field" ]
            [ label [ class "label", for "timer_name" ] [ text (t (\d -> d.form.name.label)) ]
            , Adw.Input.input []
                (input
                    [ id "timer_name"
                    , value fields.name
                    , required True
                    , placeholder (t (\d -> d.form.name.placeholder))
                    , attribute "enterkeyhint" "next"
                    , onInput (\s -> UpdateNewTimerFields (\f -> { f | name = s }))
                    ]
                    []
                )
            ]
        , div [ class "field" ]
            [ span [ class "label" ] [ text (t (\d -> d.form.duration.title)) ]
            , div [ class "fieldGroup" ]
                [ div [ class "suffixField" ]
                    [ Adw.Input.input []
                        (input
                            [ id "timer_days"
                            , value fields.days
                            , type_ "number"
                            , Html.Attributes.min "0"
                            , Html.Attributes.max "365"
                            , step "1"
                            , attribute "enterkeyhint" "next"
                            , onInput (\s -> UpdateNewTimerFields (\f -> { f | days = s }))
                            ]
                            []
                        )
                    , label [ for "timer_days" ] [ text "days" ]
                    ]
                , div [ class "suffixField" ]
                    [ Adw.Input.input []
                        (input
                            [ id "timer_hours"
                            , value fields.hours
                            , type_ "number"
                            , Html.Attributes.min "-999"
                            , Html.Attributes.max "999"
                            , step "1"
                            , attribute "enterkeyhint" "next"
                            , onInput (\s -> UpdateNewTimerFields (\f -> { f | hours = s }))
                            ]
                            []
                        )
                    , label [ for "timer_hours" ] [ text "hours" ]
                    ]
                , div [ class "suffixField" ]
                    [ Adw.Input.input []
                        (input
                            [ id "timer_minutes"
                            , attribute "value" fields.minutes
                            , type_ "number"
                            , Html.Attributes.min "-999"
                            , Html.Attributes.max "999"
                            , step "1"
                            , attribute "enterkeyhint" "done"
                            , onInput (\s -> UpdateNewTimerFields (\f -> { f | minutes = s }))
                            ]
                            []
                        )
                    , label [ for "timer_minutes" ] [ text "minutes" ]
                    ]
                , case result of
                    Ok ( _, duration ) ->
                        let
                            d =
                                Duration.toString app.profile.preference.language (Duration.Detailed Duration.Minutes) duration
                        in
                        span [ class "duration" ]
                            [ text (fmt [ d ] system.translation.newTimerPage.form.duration.tips) ]

                    Err err ->
                        span [ class "error" ]
                            [ text
                                (case err of
                                    EmptyName ->
                                        t (\d -> d.form.errors.emptyName)

                                    NegativeDuration ->
                                        t (\d -> d.form.errors.negativeDuration)

                                    ZeroDuration ->
                                        t (\d -> d.form.errors.zeroDuration)
                                )
                            ]
                ]
            ]
        , Adw.Button.button
            [ Adw.Button.disabled
                (case result of
                    Ok _ ->
                        False

                    Err _ ->
                        True
                )
            , Adw.Button.variant Adw.Button.Primary
            , Adw.Button.size Adw.Button.Large
            ]
            [ button [ type_ "submit" ] [ text (t (\d -> d.form.submit)) ] ]
        ]
