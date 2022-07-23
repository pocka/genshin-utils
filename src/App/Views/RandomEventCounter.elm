module App.Views.RandomEventCounter exposing (view)

import Adw.Button as Button
import Adw.GlowDot as GlowDot
import App.Booted exposing (Model, Msg(..))
import App.RandomEventReward as RandomEventReward
import App.Types.Duration as Duration
import App.Vibrations exposing (quickKnock)
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html5 exposing (..)
import Json.Decode as Decode
import String
import Time
import Translation exposing (fmt)


view : Model -> Html Msg
view model =
    let
        remains =
            case model.app.profile.randomEvent of
                Just randomEvent ->
                    randomEvent.remains

                Nothing ->
                    RandomEventReward.max

        class =
            CssModules.class "Views.RandomEventCounter" model.system.cssModules

        dict =
            model.system.translation.randomEventCounterPage

        t key =
            fmt [] (key dict)
    in
    div [ class "container" ]
        [ div [ class "menus" ]
            [ Button.button
                [ Button.disabled (remains == RandomEventReward.max)
                ]
                [ button
                    [ onClick UndoRandomEventReward ]
                    [ text (t (\d -> d.actions.undo)) ]
                ]
            ]
        , div
            [ class "header" ]
            [ div [ class "dots" ]
                (List.range 1 RandomEventReward.max |> List.map (\n -> GlowDot.glowDot (remains >= n) [] []))
            , span [ class "number" ] [ text (String.fromInt remains) ]
            ]
        , div [ class "control" ]
            [ div [ class "texts" ]
                [ span [] [ text (t .description) ]
                , let
                    delta =
                        case model.app.profile.randomEvent of
                            Just { loggedAt } ->
                                Time.posixToMillis model.system.now
                                    - Time.posixToMillis loggedAt
                                    |> Duration.fromInt
                                    |> Duration.toString model.app.profile.preference.language Duration.Rough
                                    |> (\d -> fmt [ d ] dict.ago)

                            Nothing ->
                                "---"
                  in
                  span [ class "delta" ]
                    [ text (t .lastClaimedLabel)
                    , text ": "
                    , text delta
                    ]
                ]
            , div [ class "actions" ]
                [ Button.button
                    [ Button.variant Button.Primary
                    , Button.size Button.Large
                    , Button.disabled (remains == 0)
                    , on "touchstart"
                        (Decode.succeed
                            (if remains > 0 then
                                Delay 30 (Vibrate quickKnock)

                             else
                                NoOp
                            )
                        )
                    ]
                    [ button
                        [ onClick ConsumeRandomEventReward ]
                        [ text (t (\d -> d.actions.claim)) ]
                    ]
                ]
            ]
        ]
