module App.Layout exposing (footer, layout)

import App.Session as Session
import App.UiTheme as UiTheme
import CssModules exposing (CssModules)
import Html exposing (..)
import Html.Attributes exposing (..)
import Translation exposing (fmt)
import Url


scopedClass : CssModules -> String -> Attribute msg
scopedClass =
    CssModules.class "App.Layout"


footer : Session.Session -> List (Attribute msg) -> Html msg
footer { cssModules, packageInfo, translation } attrs =
    let
        class =
            scopedClass cssModules

        authors =
            packageInfo.author :: packageInfo.contributors

        t key =
            fmt [] (key translation.shell)
    in
    Html.footer (class "footer" :: attrs)
        [ p [ class "footer-line" ] [ text (t .disclaimer) ]
        , div [ class "footer-line" ]
            [ span [ class "footer-copyright" ] [ text ("© 2021 " ++ String.join ", " (List.map .name authors) ++ " / " ++ packageInfo.license) ]
            , ul [ class "footer-links" ]
                [ footerLinkItem cssModules (t .thirdPartyNotice) "ThirdPartyNotice.txt"
                , footerLinkItem cssModules (t .sourceCode) (Url.toString packageInfo.repository)
                ]
            ]
        ]


footerLinkItem : CssModules -> String -> String -> Html msg
footerLinkItem cssModules label href =
    let
        class =
            scopedClass cssModules
    in
    li [ class "footer-link-item" ]
        [ a [ class "footer-link", Html.Attributes.href href ] [ text label ] ]


theme : UiTheme.UiTheme -> Attribute msg
theme t =
    case t of
        UiTheme.Dark ->
            attribute "theme" "dark"

        UiTheme.Light ->
            attribute "theme" "light"

        UiTheme.SystemDefault ->
            class ""


layout : Session.Session -> List (Html msg) -> List (Html msg) -> Html msg
layout session notifications children =
    let
        class =
            scopedClass session.cssModules
    in
    node "turtle-design-system"
        [ theme session.profile.theme ]
        [ div [ class "layout" ]
            [ div [ class "body" ] children
            , footer session []
            ]
        , div [ class "notifications" ] notifications
        ]
