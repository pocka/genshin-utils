module App.Views.Config exposing (view)

import Adw.Button
import Adw.Select
import Adw.Switch
import App.Booted exposing (Model, Msg(..))
import App.Preference exposing (OnOffFeature(..), boolToOnOff)
import App.Types.Language as Lang
import App.Types.PlatformCapability exposing (PlatformCapability(..))
import App.UiTheme as UiTheme
import Browser.Extra.Notifications as Notifications
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Translation exposing (fmt)


find : (a -> Bool) -> List a -> Maybe a
find f list =
    case list of
        x :: xs ->
            if f x then
                Just x

            else
                find f xs

        _ ->
            Nothing


view : Model -> Html Msg
view { app, system, notification } =
    let
        t key =
            fmt [] (key system.translation.configPage)

        class =
            CssModules.class "Views.Config" system.cssModules

        field =
            class "field"

        labelClass =
            class "label"

        tips =
            class "tips"
    in
    div [ class "container" ]
        [ div [ field ]
            [ label [ labelClass, for "reference_server" ] [ text (t (\d -> d.general.referenceServer.label)) ]
            , Adw.Select.select []
                (select
                    [ id "reference_server"
                    , attribute "aria-describedby" "reference_server_tips"
                    , value app.profile.server.id
                    , onInput
                        (\id ->
                            find (\server -> server.id == id) app.servers
                                |> Maybe.map ChangeServer
                                |> Maybe.withDefault NoOp
                        )
                    ]
                    (List.map
                        (\server -> option [ value server.id ] [ text server.name ])
                        app.servers
                    )
                )
            , span
                [ tips, id "reference_server_tips" ]
                [ text (t (\d -> d.general.referenceServer.description)) ]
            ]
        , div [ field ]
            [ label [ labelClass, for "language" ] [ text (t (\d -> d.ui.language.label)) ]
            , Adw.Select.select []
                (select
                    [ id "language"
                    , attribute "aria-describedby" "language_tips"
                    , value (Lang.toString app.profile.preference.language)
                    , onInput
                        (\code ->
                            Lang.fromString code
                                |> Maybe.map SetLanguage
                                |> Maybe.withDefault NoOp
                        )
                    ]
                    (List.map
                        (\lang ->
                            option [ value (Lang.toString lang) ] [ text lang.name ]
                        )
                        Lang.languages
                    )
                )
            , span
                [ tips, id "language_tips" ]
                [ text (t (\d -> d.ui.language.description)) ]
            ]
        , div [ field ]
            [ label [ labelClass, for "ui_theme" ] [ text (t (\d -> d.ui.theme.label)) ]
            , Adw.Select.select []
                (select
                    [ id "ui_theme"
                    , attribute "aria-describedby" "ui_theme_tips"
                    , value (UiTheme.toString app.profile.theme)
                    , onInput
                        (\str ->
                            UiTheme.fromString str
                                |> SetUiTheme
                        )
                    ]
                    [ option [ value (UiTheme.toString UiTheme.SystemDefault) ] [ text (t (\d -> d.ui.systemDefaultTheme)) ]
                    , option [ value (UiTheme.toString UiTheme.Dark) ] [ text (t (\d -> d.ui.dark)) ]
                    , option [ value (UiTheme.toString UiTheme.Light) ] [ text (t (\d -> d.ui.light)) ]
                    ]
                )
            , span
                [ tips, id "ui_theme_tips" ]
                [ text (t (\d -> d.ui.theme.description)) ]
            ]
        , div [ field ]
            [ label [ labelClass, for "feedback_vibration" ] [ text (t <| \d -> d.ui.feedbackVibration.label) ]
            , Adw.Switch.switch
                [ id "feedback_vibration"
                , attribute "aria-describedby" "feedback_vibration_tips"
                , class "switch"
                , Adw.Switch.disabled (system.platformCapability.vibrationApi == NotSupported)
                , Adw.Switch.checked (app.profile.preference.feedbackVibration == Enabled)
                , onCheck (\b -> SetFeedbackVibration (boolToOnOff b))
                ]
            , span
                [ tips, id "feedback_vibration_tips" ]
                [ text
                    (t <|
                        \d ->
                            case system.platformCapability.vibrationApi of
                                Supported ->
                                    d.ui.feedbackVibration.description

                                NotSupported ->
                                    d.ui.feedbackVibration.notSupported
                    )
                ]
            ]
        , div [ field ]
            [ label [ labelClass, for "os_notification" ] [ text (t <| \d -> d.notification.browserNotification.label) ]
            , let
                baseAttrs =
                    [ id "os_notification"
                    , class "switch"
                    , attribute "aria-describedby" "os_notification_tips"
                    ]

                active =
                    Adw.Switch.switch
                        ([ Adw.Switch.checked (app.profile.preference.browserNotification == Enabled)
                         , onCheck (\b -> SetBrowserNotification (boolToOnOff b))
                         ]
                            ++ baseAttrs
                        )

                permissionTrigger =
                    Adw.Button.button
                        [ onClick RequestBrowserNotificationPermission ]
                        [ button [] [ text (t <| \d -> d.notification.browserNotification.requestPermission) ] ]

                inactive =
                    Adw.Button.button
                        [ Adw.Button.loading True ]
                        [ button [] [ text (t <| \d -> d.notification.browserNotification.requestPermission) ] ]
              in
              case notification.availability of
                Notifications.Available ->
                    active

                Notifications.RequiresPermission ->
                    permissionTrigger

                Notifications.PermissionRequestDenied ->
                    permissionTrigger

                Notifications.Checking ->
                    inactive

                Notifications.PlatformNotSupported ->
                    inactive

                Notifications.RequestingPermission ->
                    inactive
            , span
                [ tips, id "os_notification_tips" ]
                [ text
                    (t <|
                        \d ->
                            case notification.availability of
                                Notifications.Available ->
                                    d.notification.browserNotification.description

                                Notifications.Checking ->
                                    d.notification.browserNotification.checking

                                Notifications.PlatformNotSupported ->
                                    d.notification.browserNotification.notSupported

                                Notifications.RequiresPermission ->
                                    d.notification.browserNotification.description

                                Notifications.PermissionRequestDenied ->
                                    d.notification.browserNotification.denied

                                Notifications.RequestingPermission ->
                                    d.notification.browserNotification.permissionRequesting
                    )
                ]
            ]
        ]
