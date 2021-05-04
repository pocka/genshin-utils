module Scene exposing (..)

import Color.Accessibility
import Color.Convert
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


{-| <https://discourse.elm-lang.org/t/css-custom-properties/5554/3>
-}
profileColorVars : Profile.Profile -> Attribute msg
profileColorVars profile =
    case Maybe.map Color.Convert.hexToColor profile.color of
        Just (Ok color) ->
            attribute "style"
                ("--theme-primary: "
                    ++ Color.Convert.colorToHex color
                    ++ "; --theme-primary-contrast: "
                    ++ (if Color.Accessibility.luminance color > 0.5 then
                            "var(--color-midnight-blue)"

                        else
                            "var(--color-clouds)"
                       )
                    ++ ";"
                )

        _ ->
            class ""


view : Scene -> Profile.Profile -> Html msg
view scene profile =
    case scene of
        Profile ->
            node "app-profile" [ profileColorVars profile ] []

        RandomEventCounter ->
            node "app-random-event-counter"
                [ property "profile" (Profile.encodeProfile profile)
                , profileColorVars profile
                ]
                []

        NotFound ->
            div [ profileColorVars profile ]
                [ Views.error "Page Not Found"
                    Nothing
                    [ p [] [ text "I'm sorry that I can't process this URL." ]
                    , a [ class "button error-action", href "?profile" ] [ text "Go to profile page" ]
                    ]
                ]
