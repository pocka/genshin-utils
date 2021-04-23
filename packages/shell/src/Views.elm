module Views exposing (error)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


error : String -> Maybe msg -> List (Html msg) -> Html msg
error title maybeRetry children =
    div [ class "error" ]
        [ h1 [ class "error-title" ] [ text title ]
        , p [ class "error-details" ] children
        , case maybeRetry of
            Just retry ->
                button [ class "button error-action", onClick retry ] [ text "retry" ]

            Nothing ->
                text ""
        ]
