port module App exposing (..)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Json.Decode as Decode
import Profile exposing (..)
import Scene
import Url
import Views



-- MAIN


main : Program Decode.Value Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- PORTS


port retryProfileLoad : () -> Cmd msg


port loadCustomElement : String -> Cmd msg


port profileObserver : (Decode.Value -> msg) -> Sub msg


port wakeLockAvailability : (Decode.Value -> msg) -> Sub msg


port updateWakeLockStatus : (Decode.Value -> msg) -> Sub msg


port requestWakeLock : Bool -> Cmd msg



-- MODEL


{-| Represents a network resource
-}
type Remote a
    = Pending -- Resource is not loaded yet
    | Loaded a -- Resource is loaded (despite of succesful or not)


type WakeLockStatus
    = Locked
    | Free
    | Requesting


type WakeLockApi
    = Supported WakeLockStatus
    | NotSupported
    | Detecting


type alias Model =
    { key : Nav.Key
    , profile : Remote (Result ProfileLoadError (Maybe Profile))
    , scene : Scene.Scene
    , repositoryUrl : Maybe String
    , wakeLock : WakeLockApi
    }


decodeRepositoryUrlFlag : Decode.Value -> Maybe String
decodeRepositoryUrlFlag value =
    case Decode.decodeValue (Decode.maybe (Decode.field "repositoryUrl" Decode.string)) value of
        Ok result ->
            result

        Err _ ->
            Nothing


init : Decode.Value -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        scene =
            Scene.route url
    in
    ( Model key Pending scene (decodeRepositoryUrlFlag flags) Detecting
    , case Scene.requiredCustomElement scene of
        Just tagName ->
            loadCustomElement tagName

        Nothing ->
            Cmd.none
    )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest -- When a user clicked a link
    | UrlChanged Url.Url -- Triggered by clicking internal link or programmatic changes
    | SetProfile (Result ProfileLoadError (Maybe Profile)) -- Update current profile
    | SetScene Scene.Scene
    | RetryProfileLoad
    | SetWakeLockApi WakeLockApi
    | RequestWakeLock WakeLockStatus
    | Noop


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.replaceUrl model.key (Url.toString url) )

                Browser.External url ->
                    ( model, Nav.load url )

        UrlChanged url ->
            let
                scene =
                    Scene.route url
            in
            ( { model | scene = scene }
            , case Scene.requiredCustomElement scene of
                Just tagName ->
                    loadCustomElement tagName

                Nothing ->
                    Cmd.none
            )

        SetProfile profile ->
            ( { model | profile = Loaded profile }
            , case profile of
                Ok Nothing ->
                    loadCustomElement "app-profile"

                _ ->
                    Cmd.none
            )

        SetScene scene ->
            ( { model | scene = scene }, Cmd.none )

        RetryProfileLoad ->
            ( { model | profile = Pending }, retryProfileLoad () )

        SetWakeLockApi support ->
            ( { model | wakeLock = support }, Cmd.none )

        RequestWakeLock status ->
            ( { model | wakeLock = Supported Requesting }, requestWakeLock (status == Locked) )

        Noop ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


decodeProfileError : Decode.Decoder (Result ProfileLoadError a)
decodeProfileError =
    Decode.map
        (\err ->
            Err
                (case err of
                    "no_remote_available" ->
                        NoAvailableRemoteError

                    "remote_runtime" ->
                        RuntimeError

                    _ ->
                        RuntimeError
                )
        )
        (Decode.field "error" Decode.string)


decodeProfilePort : Decode.Decoder (Result ProfileLoadError (Maybe Profile))
decodeProfilePort =
    Decode.oneOf
        [ Decode.map Ok (Decode.nullable decodeProfile)
        , decodeProfileError
        ]


observeProfile : Decode.Value -> Msg
observeProfile value =
    case Decode.decodeValue decodeProfilePort value of
        Ok result ->
            SetProfile result

        Err _ ->
            SetProfile (Err InvalidPayloadError)


listenWakeLockAvailability : Decode.Value -> Msg
listenWakeLockAvailability value =
    SetWakeLockApi
        (case Decode.decodeValue Decode.bool value of
            Ok True ->
                Supported Free

            _ ->
                NotSupported
        )


listenWakeLockStatus : Decode.Value -> Msg
listenWakeLockStatus value =
    SetWakeLockApi
        (Supported
            (case Decode.decodeValue Decode.bool value of
                Ok True ->
                    Locked

                Ok False ->
                    Free

                _ ->
                    Requesting
            )
        )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ profileObserver observeProfile
        , wakeLockAvailability listenWakeLockAvailability
        , updateWakeLockStatus listenWakeLockStatus
        ]



-- VIEW


classIf : String -> Bool -> Attribute msg
classIf className cond =
    if cond then
        class className

    else
        class ""


dataDisabled : Bool -> Attribute msg
dataDisabled disabled =
    attribute "data-disabled"
        (if disabled then
            "disabled"

         else
            ""
        )


appbar : Model -> Html Msg
appbar model =
    let
        navigatable =
            case model.profile of
                Loaded (Ok (Just _)) ->
                    True

                _ ->
                    False
    in
    footer [ class "appbar" ]
        [ nav [ class "appbar-grid" ]
            [ a
                [ class "button button-circle shellicons shellicons-profile"
                , classIf "button-fill" (model.scene == Scene.Profile)
                , dataDisabled (not navigatable)
                , href "?profile"
                , title "Profile"
                ]
                []
            , a
                [ class "button button-circle shellicons shellicons-quest"
                , classIf "button-fill" (model.scene == Scene.RandomEventCounter)
                , dataDisabled (not navigatable)
                , href "?randomevent"
                , title "Random Event Counter"
                ]
                []
            , div
                [ class "appbar-separator"
                , attribute "aria-hidden" "true"
                ]
                []
            , button
                [ class "button button-circle shellicons shellicons-phone-lock-line"
                , classIf "button-fill" (model.wakeLock == Supported Locked)
                , disabled (model.wakeLock == NotSupported || model.wakeLock == Supported Requesting)
                , onClick
                    (case model.wakeLock of
                        Supported Free ->
                            RequestWakeLock Locked

                        Supported Locked ->
                            RequestWakeLock Free

                        _ ->
                            Noop
                    )
                , title
                    (case model.wakeLock of
                        Detecting ->
                            "Checking Wake Lock API support..."

                        NotSupported ->
                            "Your browser does not support Wake Lock API"

                        Supported status ->
                            case status of
                                Locked ->
                                    "Click to disable Wake Lock"

                                Free ->
                                    "Click to prevent device from going to sleep"

                                Requesting ->
                                    "Changing Wake Lock status..."
                    )
                ]
                []
            ]
        , div [ class "appbar-text" ]
            [ span [ attribute "translate" "no" ] [ text "©︎ 2021 Shota Fuji (pocka)" ]
            , ul [ class "appbar-text-link-list" ]
                [ li [] [ a [ href "ThirdPartyNotice.txt", target "_blank" ] [ text "Third party notice" ] ]
                , case model.repositoryUrl of
                    Just url ->
                        li [] [ a [ href url, target "_blank" ] [ text "Source code" ] ]

                    Nothing ->
                        text ""
                ]
            ]
        ]


view : Model -> Browser.Document Msg
view model =
    { title = "Genshin Utils"
    , body =
        case model.profile of
            Pending ->
                [ node "shell-loading" [] [] ]

            Loaded result ->
                [ case result of
                    Ok maybeProfile ->
                        case maybeProfile of
                            Nothing ->
                                node "app-profile" [] []

                            Just profile ->
                                Scene.view model.scene profile

                    Err err ->
                        Views.error "Error"
                            (Just RetryProfileLoad)
                            (case err of
                                NoAvailableRemoteError ->
                                    [ p []
                                        [ text "Could not access to the profile system. Please try it again later. (SH-E-01)"
                                        ]
                                    ]

                                RuntimeError ->
                                    [ p []
                                        [ text "Failed to retrieve current active profile. Please try it again later. (SH-E-02)" ]
                                    ]

                                InvalidPayloadError ->
                                    [ text "Unexpected data passed to the application. Please make sure your profile data is not corrupted in profile page. (SH-E-03)" ]
                            )
                , appbar model
                ]
    }
