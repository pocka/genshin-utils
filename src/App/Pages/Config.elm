module App.Pages.Config exposing (..)

import App.Language as Language exposing (Language)
import App.Preference as Preference
import App.Profile as Profile
import App.ReferenceServer as ReferenceServer
import App.Session as Session
import App.Translation
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
import Translation exposing (fmt)
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
    | ChangeLanguage Language


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

        ChangeLanguage lang ->
            let
                session =
                    mapPreference (\p -> { p | language = lang }) model.session
            in
            ( { model | session = session }
            , Cmd.batch
                [ Profile.persist session.profile
                , App.Translation.request lang
                ]
            )



-- VIEW


scopedClass : CssModules.CssModules -> String -> Attribute msg
scopedClass =
    CssModules.class "App.Pages.Config"


serverOption : ReferenceServer.ReferenceServer -> ReferenceServer.ReferenceServer -> Html Msg
serverOption selected server =
    option [ value server.id, Html.Attributes.selected (selected == server) ] [ text server.name ]


wakeLockField : Model -> Html Msg
wakeLockField model =
    let
        t key =
            fmt [] (key model.session.translation.configPage.ui.wakeLock)

        isDisabled =
            case model.wakeLock of
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
            case model.wakeLock of
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
            case model.wakeLock of
                WakeLock.CheckingSupport ->
                    t .checking

                WakeLock.NotSupported ->
                    t .notSupported

                _ ->
                    t .description
    in
    node "turtle-form-field"
        []
        [ label [ slot "label", for "config_wakelock" ] [ text (t .label) ]
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

        t key =
            fmt [] (key session.translation.configPage.ui.feedbackVibration)

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
                    t .notSupported

                Session.Supported ->
                    t .description
    in
    node "turtle-form-field"
        []
        [ label [ slot "label", for "config_feedback_vibration" ] [ text (t .label) ]
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

        t key =
            fmt [] (key model.session.translation.configPage)
    in
    { title = t .title
    , body =
        [ pageHeader model.session { title = t .title } []
        , div [ class "container" ]
            [ div [ class "fields" ]
                [ h2 [ class "heading" ] [ text (t (\d -> d.general.title)) ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "config_server" ] [ text (t (\d -> d.general.referenceServer.label)) ]
                    , node "turtle-selectbox"
                        [ attribute "novalidity" "" ]
                        [ select
                            [ id "config_server"
                            , aria "describedby" "config_server_description"
                            , onInput TrySelectServer
                            ]
                            (List.map (serverOption profile.server) servers)
                        ]
                    , span [ slot "description", id "config_server_description" ] [ text (t (\d -> d.general.referenceServer.description)) ]
                    ]
                , h2 [ class "heading" ] [ text (t (\d -> d.ui.title)) ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "config_lang" ] [ text (t (\d -> d.ui.language.label)) ]
                    , node "turtle-selectbox"
                        [ attribute "novalidity" "" ]
                        [ select
                            [ id "config_lang"
                            , aria "describedby" "config_lang_description"
                            , onInput (\str -> ChangeLanguage (Language.fromString str |> Maybe.withDefault Language.enGB))
                            ]
                            (List.map
                                (\lang ->
                                    option [ selected (profile.preference.language == lang), value lang.code, attribute "lang" lang.code ] [ text lang.name ]
                                )
                                Language.languages
                            )
                        ]
                    , span [ slot "description", id "config_lang_description" ] [ text (t (\d -> d.ui.language.description)) ]
                    ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "config_theme" ] [ text (t (\d -> d.ui.theme.label)) ]
                    , node "turtle-selectbox"
                        [ attribute "novalidity" "" ]
                        [ select
                            [ id "config_theme"
                            , aria "describedby" "config_theme_description"
                            , onInput (\str -> ChangeTheme (UiTheme.fromString str))
                            ]
                            [ option [ selected (profile.theme == UiTheme.SystemDefault), value (UiTheme.toString UiTheme.SystemDefault) ] [ text (t (\d -> d.ui.systemDefaultTheme)) ]
                            , option [ selected (profile.theme == UiTheme.Light), value (UiTheme.toString UiTheme.Light) ] [ text (t (\d -> d.ui.light)) ]
                            , option [ selected (profile.theme == UiTheme.Dark), value (UiTheme.toString UiTheme.Dark) ] [ text (t (\d -> d.ui.dark)) ]
                            ]
                        ]
                    , span [ slot "description", id "config_theme_description" ] [ text (t (\d -> d.ui.theme.description)) ]
                    ]
                , wakeLockField model
                , vibrationField model
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    WakeLock.subscriptions model.wakeLock |> Sub.map WakeLockMsg
