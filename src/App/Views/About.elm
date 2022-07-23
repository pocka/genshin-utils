module App.Views.About exposing (..)

import App.Booted exposing (Model)
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Translation exposing (fmt)
import Url


cm : Model -> String -> Attribute msg
cm { system } =
    CssModules.class "Views.About" system.cssModules


label : Model -> String -> Html msg
label model content =
    let
        class =
            cm model
    in
    dt [ class "label" ] [ text content ]


value : Model -> List (Html msg) -> Html msg
value model =
    dd [ cm model "value" ]


view : Model -> Html msg
view model =
    let
        t key =
            fmt [] (key model.system.translation.aboutPage)

        pkg =
            model.system.packageInfo

        repository =
            Url.toString pkg.repository

        ( issuesLabel, issuesValue ) =
            case pkg.bugs.url of
                Just url ->
                    ( label model (t .issues), value model [ a [ cm model "link", href url ] [ text url ] ] )

                Nothing ->
                    ( text "", text "" )
    in
    dl [ cm model "container" ]
        [ label model (t .version)
        , value model [ text pkg.version ]
        , label model (t .license)
        , value model [ text pkg.license ]
        , label model (t .repository)
        , value model [ a [ cm model "link", href repository ] [ text repository ] ]
        , label model (t .author)
        , value model
            [ case pkg.author.email of
                Just email ->
                    a [ cm model "link", href ("mailto:" ++ email) ] [ text pkg.author.name ]

                Nothing ->
                    text pkg.author.name
            ]
        , issuesLabel
        , issuesValue
        , label model (t .thirdPartyNotice)
        , value model [ a [ cm model "link", href "ThirdPartyNotice.txt" ] [ text "ThirdPartyNotice.txt" ] ]
        ]
