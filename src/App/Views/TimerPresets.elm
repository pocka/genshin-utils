module App.Views.TimerPresets exposing (view)

import Adw.Button
import App.Booted exposing (Model, Msg(..))
import App.Types.Duration as Duration
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Translation exposing (fmt)


cssModules : CssModules.CssModules -> String -> Attribute msg
cssModules =
    CssModules.class "Views.TimerPresets"


view : Model -> Html Msg
view model =
    let
        { language } =
            model.app.profile.preference

        t key =
            fmt [] (key model.system.translation.timerPresetsPage)

        class =
            cssModules model.system.cssModules
    in
    div [ class "container" ]
        [ p [ class "description" ] [ text (t .description) ]
        , ul [ class "list" ]
            (List.map
                (\preset ->
                    li [ class "item" ]
                        [ span [] [ text (preset.name model.app.profile.preference.language) ]
                        , span [ class "duration" ] [ text (Duration.toString language (Duration.Detailed Duration.Minutes) preset.duration) ]
                        , Adw.Button.button [ Adw.Button.variant Adw.Button.Primary ]
                            [ button [ onClick (CreateTimerFromPreset preset) ] [ text (t .create) ] ]
                        ]
                )
                model.app.timerPresets
            )
        ]
