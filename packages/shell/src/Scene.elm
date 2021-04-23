module Scene exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Profile
import Query
import Url
import Views


{-| Which page the user is in?
-}
type Scene
    = Profile
    | RandomEventCounter
    | NotFound -- Soft 404


requiredCustomElement : Scene -> Maybe String
requiredCustomElement scene =
    case scene of
        Profile ->
            Just "app-profile"

        RandomEventCounter ->
            Just "app-random-event-counter"

        NotFound ->
            Nothing


processors : List (Query.QueryProcessor Scene)
processors =
    [ Query.has "profile" Profile
    , Query.has "randomevent" RandomEventCounter
    ]


route : Url.Url -> Scene
route url =
    case url.query of
        Just query ->
            Query.parseQueryString query
                |> Query.processQueries processors
                |> Maybe.withDefault NotFound

        Nothing ->
            -- TODO: Replace with dashboard
            Profile


view : Scene -> Profile.Profile -> Html msg
view scene profile =
    case scene of
        Profile ->
            node "app-profile" [] []

        RandomEventCounter ->
            node "app-random-event-counter"
                [ property "profile" (Profile.encodeProfile profile)
                ]
                []

        NotFound ->
            Views.error "Page Not Found"
                Nothing
                [ p [] [ text "I'm sorry that I can't process this URL." ]
                , a [ class "button error-action", href "?profile" ] [ text "Go to profile page" ]
                ]
