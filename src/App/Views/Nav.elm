module App.Views.Nav exposing (..)

import Adw.Button
import Adw.Dropdown
import Adw.Menu
import Adw.MenuItem
import Adw.Nav
import Adw.NavItem
import App.Booted exposing (Model, Msg(..))
import App.Route as Route
import Browser.Extra.WakeLock as WakeLock
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import RadixIcons.Icon as Icon
import Translation exposing (fmt)


nav : Route.Route -> Model -> Html Msg
nav route model =
    let
        t key =
            fmt [] (key model.system.translation)
    in
    Adw.Nav.nav []
        [ Adw.NavItem.navItem
            [ Adw.NavItem.active (route == Route.Timer) ]
            [ Icon.icon Icon.Timer
                [ Adw.NavItem.iconSlot
                ]
            , a [ href (Route.hash Route.Timer) ] [ text "Timer" ]
            ]
        , Adw.NavItem.navItem
            [ Adw.NavItem.active (route == Route.RandomEventCounter) ]
            [ Icon.icon Icon.Backpack
                [ Adw.NavItem.iconSlot
                ]
            , a [ href (Route.hash Route.RandomEventCounter) ] [ text "Rewards" ]
            ]
        , Adw.Dropdown.dropdown
            [ Adw.Nav.actionSlot
            ]
            [ Adw.Button.button [ Adw.Dropdown.triggerSlot, Adw.Button.iconOnly True ] [ button [] [ Icon.icon Icon.DotsVertical [] ] ]
            , Adw.Menu.menu
                [ id "app_nav_menu" ]
                [ Adw.MenuItem.menuItem
                    (case model.wakeLock of
                        WakeLock.Supported WakeLock.Locked _ ->
                            [ disabled False, onClick ReleaseWakeLock ]

                        WakeLock.Supported WakeLock.Released _ ->
                            [ disabled False, onClick RequestWakeLock ]

                        WakeLock.NotSupported ->
                            [ disabled True ]

                        _ ->
                            [ Adw.Button.loading True ]
                    )
                    [ case model.wakeLock of
                        WakeLock.Supported WakeLock.Locked _ ->
                            Icon.icon Icon.Check [ Adw.MenuItem.iconSlot ]

                        _ ->
                            text ""
                    , button
                        [ if model.wakeLock == WakeLock.NotSupported then
                            title (t (\d -> d.appMenu.wakeLockNotSupported))

                          else
                            class ""
                        ]
                        [ text (t (\d -> d.appMenu.wakeLock)) ]
                    ]
                , Adw.MenuItem.menuItem [] [ a [ href (Route.hash Route.Configuration) ] [ text (t (\d -> d.appMenu.preference)) ] ]
                , Adw.MenuItem.menuItem [] [ a [ href "#about" ] [ text (t (\d -> d.appMenu.about)) ] ]
                ]
            ]
        ]
