module App.Pages.Config exposing (..)

import App.Preference as Preference
import App.Profile as Profile
import App.ReferenceServer as ReferenceServer
import App.Session as Session
import App.UI.Common exposing (pageHeader)
import App.UiTheme as UiTheme
import App.Vibrations
import App.WakeLock as WakeLock
import Browser
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html5 exposing (..)
import Vibration



-- MODEL


type alias Model =
    { session : Session.Session
    , wakeLock : WakeLock.Model
    }


init : Session.Session -> ( Model, Cmd Msg )
init session =
    let
        ( wakeLock, wakeLockCmd ) =
            WakeLock.init
    in
    ( { session = session, wakeLock = wakeLock }, Cmd.map WakeLockMsg wakeLockCmd )



-- UPDATE


type Msg
    = TrySelectServer String
    | ChangeTheme UiTheme.UiTheme
    | WakeLockMsg WakeLock.Msg
    | ChangeFeedbackVibration Bool


mapPreference : (Preference.Preference -> Preference.Preference) -> Session.Session -> Session.Session
mapPreference f =
    mapProfile (\profile -> { profile | preference = f profile.preference })


mapProfile : (Profile.Profile -> Profile.Profile) -> Session.Session -> Session.Session
mapProfile f session =
    { session | profile = f session.profile }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TrySelectServer id ->
            case List.head (List.filter (\s -> s.id == id) model.session.servers) of
                Just match ->
                    let
                        session =
                            mapProfile (\p -> { p | server = match }) model.session
                    in
                    ( { model | session = session }, Profile.persist session.profile )

                Nothing ->
                    ( model, Cmd.none )

        ChangeTheme theme ->
            let
                session =
                    mapProfile (\p -> { p | theme = theme }) model.session
            in
            ( { model | session = session }, Profile.persist session.profile )

        WakeLockMsg subMsg ->
            WakeLock.update subMsg model.wakeLock
                |> Tuple.mapFirst (Model model.session)
                |> Tuple.mapSecond (Cmd.map WakeLockMsg)

        ChangeFeedbackVibration enabled ->
            let
                session =
                    mapPreference (\p -> { p | feedbackVibration = Preference.boolToOnOff enabled }) model.session
            in
            ( { model | session = session }
            , Cmd.batch
                [ Profile.persist session.profile
                , if enabled then
                    Vibration.vibrate App.Vibrations.quickKnock

                  else
                    Cmd.none
                ]
            )



-- VIEW


scopedClass : CssModules.CssModules -> String -> Attribute msg
scopedClass =
    CssModules.class "App.Pages.Config"


serverOption : ReferenceServer.ReferenceServer -> ReferenceServer.ReferenceServer -> Html Msg
serverOption selected server =
    option [ value server.id, Html.Attributes.selected (selected == server) ] [ text server.name ]


wakeLockField : WakeLock.Model -> Html Msg
wakeLockField model =
    let
        isDisabled =
            case model of
                WakeLock.NotSupported ->
                    True

                WakeLock.CheckingSupport ->
                    True

                WakeLock.Supported WakeLock.Locking _ ->
                    True

                WakeLock.Supported WakeLock.Releasing _ ->
                    True

                _ ->
                    False

        isChecked =
            case model of
                WakeLock.NotSupported ->
                    False

                WakeLock.CheckingSupport ->
                    False

                WakeLock.Supported WakeLock.Locked _ ->
                    True

                WakeLock.Supported WakeLock.Locking _ ->
                    True

                WakeLock.Supported WakeLock.Released _ ->
                    False

                WakeLock.Supported WakeLock.Releasing _ ->
                    False

        description =
            case model of
                WakeLock.CheckingSupport ->
                    "Checking whether your browser supports WakeLock API..."

                WakeLock.NotSupported ->
                    "Your browser does not support WakeLock API."

                _ ->
                    "Prevent your device from dimming or locking the screen while this application is running. Will be released when the tab is closed, hidden, or reloaded."
    in
    node "turtle-form-field"
        []
        [ label [ slot "label", for "config_wakelock" ] [ text "WakeLock" ]
        , node "turtle-toggle-switch"
            []
            [ input
                [ type_ "checkbox"
                , id "config_wakelock"
                , if isChecked then
                    attribute "checked" ""

                  else
                    class ""

                -- NOTE: This is required due to browser have no way to detect the change of DOM properties so
                -- <turtle-toggle-switch> can't decide when to toggle style.
                , checked isChecked
                , disabled isDisabled
                , aria "describedby" "config_wakelock_description"
                , onCheck
                    (\v ->
                        if v then
                            WakeLockMsg WakeLock.TryLock

                        else
                            WakeLockMsg WakeLock.TryRelease
                    )
                ]
                []
            ]
        , span [ slot "description", id "config_wakelock_description" ] [ text description ]
        ]


vibrationField : Model -> Html Msg
vibrationField { session } =
    let
        { profile, platformCapability } =
            session

        { vibrationApi } =
            platformCapability

        isDisabled =
            vibrationApi == Session.NotSupported

        isChecked =
            case ( vibrationApi, profile.preference.feedbackVibration ) of
                ( Session.NotSupported, _ ) ->
                    False

                ( _, Preference.Disabled ) ->
                    False

                ( _, Preference.Enabled ) ->
                    True

        description =
            case vibrationApi of
                Session.NotSupported ->
                    "Your browser does not support Vibration API."

                Session.Supported ->
                    "When turned on, the device perform short feedback vibration for primary actions. On devices without vibration mechanism, this setting has no effect."
    in
    node "turtle-form-field"
        []
        [ label [ slot "label", for "config_feedback_vibration" ] [ text "Feedback Vibration" ]
        , node "turtle-toggle-switch"
            []
            [ input
                [ type_ "checkbox"
                , id "config_feedback_vibration"
                , if isChecked then
                    attribute "checked" ""

                  else
                    class ""

                -- NOTE: This is required due to browser have no way to detect the change of DOM properties so
                -- <turtle-toggle-switch> can't decide when to toggle style.
                , checked isChecked
                , disabled isDisabled
                , aria "describedby" "config_feedback_vibration_description"
                , onCheck ChangeFeedbackVibration
                ]
                []
            ]
        , span [ slot "description", id "config_feedback_vibration_description" ] [ text description ]
        ]


view : Model -> Browser.Document Msg
view model =
    let
        class =
            scopedClass model.session.cssModules

        { profile, servers } =
            model.session
    in
    { title = "Config"
    , body =
        [ pageHeader model.session { title = "Config" } []
        , div [ class "container" ]
            [ div [ class "fields" ]
                [ h2 [ class "heading" ] [ text "General" ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "config_server" ] [ text "Reference Server" ]
                    , node "turtle-selectbox"
                        [ attribute "novalidity" "" ]
                        [ select
                            [ id "config_server"
                            , aria "describedby" "config_server_description"
                            , onInput TrySelectServer
                            ]
                            (List.map (serverOption profile.server) servers)
                        ]
                    , span [ slot "description", id "config_server_description" ] [ text "Select Genshin Game Server used for timer resets." ]
                    ]
                , h2 [ class "heading" ] [ text "User Interface" ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "config_theme" ] [ text "UI Theme" ]
                    , node "turtle-selectbox"
                        [ attribute "novalidity" "" ]
                        [ select
                            [ id "config_theme"
                            , aria "describedby" "config_theme_description"
                            , onInput (\str -> ChangeTheme (UiTheme.fromString str))
                            ]
                            [ option [ selected (profile.theme == UiTheme.SystemDefault), value (UiTheme.toString UiTheme.SystemDefault) ] [ text "System default" ]
                            , option [ selected (profile.theme == UiTheme.Light), value (UiTheme.toString UiTheme.Light) ] [ text "Light" ]
                            , option [ selected (profile.theme == UiTheme.Dark), value (UiTheme.toString UiTheme.Dark) ] [ text "Dark" ]
                            ]
                        ]
                    , span [ slot "description", id "config_theme_description" ] [ text "Select your preferred application theme." ]
                    ]
                , wakeLockField model.wakeLock
                , vibrationField model
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    WakeLock.subscriptions model.wakeLock |> Sub.map WakeLockMsg
