module App.App exposing (main)

import App.Duration as Duration
import App.Layout
import App.PackageInfo as PackageInfo
import App.Pages.Config as ConfigPage
import App.Pages.Dashboard as DashboardPage
import App.Pages.NewTimer as NewTimerPage
import App.Pages.NotFound as NotFoundPage
import App.Pages.RandomEventCounter as RandomEventCounterPage
import App.Pages.Timer as TimerPage
import App.Preference as Preference
import App.Profile as Profile
import App.RandomEventReward as RandomEventReward
import App.ReferenceServer as ReferenceServer
import App.Route as Route
import App.Session as Session
import App.Timer as Timer
import App.Translation
import App.UiTheme
import Browser
import Browser.Navigation
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Html5 exposing (..)
import Json.Decode as Decode
import Notifications
import Time
import Translation exposing (fmt)
import Url
import Vibration



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



-- FLAGS


type LaunchMode
    = Production
    | Development


launchModeDecoder : Decode.Decoder LaunchMode
launchModeDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "production" ->
                        Decode.succeed Production

                    "development" ->
                        Decode.succeed Development

                    _ ->
                        Decode.succeed Production
            )


type alias FlagDecodeResult =
    { cssModules : Result Decode.Error CssModules.CssModules
    , servers : Result Decode.Error (List ReferenceServer.ReferenceServer)
    , packageInfo : Result Decode.Error PackageInfo.PackageJson
    , profile : Result Decode.Error (Maybe Profile.Profile)
    , mode : LaunchMode
    , vibrationApi : Session.Capability
    , translation : Result Decode.Error App.Translation.Translation
    }


decodeFlags : Decode.Value -> FlagDecodeResult
decodeFlags v =
    { cssModules = Decode.decodeValue (Decode.field "cssModules" CssModules.cssModulesDecoder) v
    , servers = Decode.decodeValue (Decode.field "servers" (Decode.list ReferenceServer.decoder)) v
    , packageInfo = Decode.decodeValue (Decode.field "packageInfo" PackageInfo.packageJsonDecoder) v
    , profile = Decode.decodeValue (Decode.field "profile" (Decode.nullable Profile.decoder)) v
    , mode = Decode.decodeValue (Decode.field "mode" launchModeDecoder) v |> Result.withDefault Production
    , vibrationApi = Decode.decodeValue (Decode.field "vibrationApi" Session.capabilityDecoder) v |> Result.withDefault Session.NotSupported
    , translation = Decode.decodeValue (Decode.field "translation" App.Translation.decoder) v
    }



-- MODEL


{-| Critical errors the app unable to launch.
-}
type BootstrapError
    = NoGameServersAvailable
    | FailedToDecodeCssModules String
    | FailedToDecodeServers String
    | FailedToDecodePackageMeta String
    | FailedToDecodeInitialTranslation String
    | Unknown


bootstrapErrorCode : BootstrapError -> String
bootstrapErrorCode error =
    case error of
        NoGameServersAvailable ->
            "E-201"

        FailedToDecodeCssModules _ ->
            "E-101"

        FailedToDecodeServers _ ->
            "E-102"

        FailedToDecodePackageMeta _ ->
            "E-103"

        FailedToDecodeInitialTranslation _ ->
            "E-104"

        Unknown ->
            "E-999"


type Page
    = ConfigPage ConfigPage.Model
    | NotFoundPage NotFoundPage.Model
    | DashboardPage DashboardPage.Model
    | RandomEventCounterPage RandomEventCounterPage.Model
    | TimerPage TimerPage.Model
    | NewTimerPage NewTimerPage.Model


type Model
    = FailedToBoot LaunchMode BootstrapError
    | Booted Notifications.Model Page


initPage : Session.Session -> Route.Route -> ( Page, Cmd Msg )
initPage session route =
    case route of
        Route.Configuration ->
            ConfigPage.init session
                |> Tuple.mapFirst ConfigPage
                |> Tuple.mapSecond (Cmd.map ConfigPageMsg)

        Route.NotFound ->
            NotFoundPage.init session
                |> Tuple.mapFirst NotFoundPage
                |> Tuple.mapSecond (Cmd.map NotFoundPageMsg)

        Route.Dashboard ->
            DashboardPage.init session
                |> Tuple.mapFirst DashboardPage
                |> Tuple.mapSecond (Cmd.map DashboardPageMsg)

        Route.RandomEventCounter ->
            RandomEventCounterPage.init session
                |> Tuple.mapFirst RandomEventCounterPage
                |> Tuple.mapSecond (Cmd.map RandomEventCounterPageMsg)

        Route.Timer ->
            TimerPage.init session
                |> Tuple.mapFirst TimerPage
                |> Tuple.mapSecond (Cmd.map TimerPageMsg)

        Route.NewTimer ->
            NewTimerPage.init session
                |> Tuple.mapFirst NewTimerPage
                |> Tuple.mapSecond (Cmd.map NewTimerPageMsg)


init : Decode.Value -> Url.Url -> Browser.Navigation.Key -> ( Model, Cmd Msg )
init rawFlags url navKey =
    let
        flags =
            decodeFlags rawFlags

        failedToBoot =
            FailedToBoot flags.mode
    in
    case ( flags.cssModules, flags.servers, flags.packageInfo ) of
        ( Ok cssModules, Ok servers, Ok packageInfo ) ->
            case flags.translation of
                Ok translation ->
                    case servers of
                        [] ->
                            ( failedToBoot NoGameServersAvailable, Cmd.none )

                        head :: _ ->
                            let
                                session : Session.Session
                                session =
                                    { profile =
                                        case flags.profile of
                                            Ok (Just profile) ->
                                                profile

                                            _ ->
                                                { server = head, theme = App.UiTheme.SystemDefault, randomEvent = Nothing, preference = Preference.default, timers = [] }
                                    , servers = servers
                                    , packageInfo = packageInfo
                                    , cssModules = cssModules
                                    , navKey = navKey
                                    , url = url
                                    , platformCapability =
                                        { vibrationApi = flags.vibrationApi
                                        }
                                    , translation = translation
                                    , warnings =
                                        case flags.profile of
                                            Ok _ ->
                                                []

                                            Err error ->
                                                [ "Failed to restore saved profile: " ++ Decode.errorToString error ]
                                    , inAppNotifications = []
                                    }

                                ( notifications, nCmd ) =
                                    Notifications.init

                                ( page, cmd ) =
                                    initPage session (Route.fromUrl url)
                            in
                            ( Booted notifications page, Cmd.batch [ cmd, Cmd.map NotificationsMsg nCmd ] )

                Err error ->
                    ( failedToBoot (FailedToDecodeInitialTranslation (Decode.errorToString error)), Cmd.none )

        ( Err error, _, _ ) ->
            ( failedToBoot (FailedToDecodeCssModules (Decode.errorToString error)), Cmd.none )

        ( _, Err error, _ ) ->
            ( failedToBoot (FailedToDecodeServers (Decode.errorToString error)), Cmd.none )

        ( _, _, Err error ) ->
            ( failedToBoot (FailedToDecodePackageMeta (Decode.errorToString error)), Cmd.none )



-- UPDATE


toSession : Page -> Session.Session
toSession page =
    case page of
        ConfigPage model ->
            model.session

        NotFoundPage model ->
            model.session

        DashboardPage model ->
            model.session

        RandomEventCounterPage model ->
            model.session

        TimerPage model ->
            model.session

        NewTimerPage model ->
            model.session


updateSession : Page -> Session.Session -> Page
updateSession page session =
    case page of
        ConfigPage model ->
            ConfigPage { model | session = session }

        NotFoundPage model ->
            NotFoundPage { model | session = session }

        DashboardPage model ->
            DashboardPage { model | session = session }

        RandomEventCounterPage model ->
            RandomEventCounterPage { model | session = session }

        TimerPage model ->
            TimerPage { model | session = session }

        NewTimerPage model ->
            NewTimerPage { model | session = session }


updateTimer : Time.Posix -> Timer.Timer -> ( Timer.Timer, Bool )
updateTimer now timer =
    case timer.state of
        Timer.Running start ->
            let
                endAt =
                    Time.posixToMillis start + Duration.toInt timer.duration
            in
            if Time.posixToMillis now >= endAt then
                -- TODO: Show notification
                ( { timer | state = Timer.Completed start (Time.millisToPosix endAt) }, True )

            else
                ( timer, False )

        _ ->
            ( timer, False )


updateTimers : Time.Posix -> List Timer.Timer -> ( List Timer.Timer, List Timer.Timer )
updateTimers now timers =
    let
        t =
            List.map (updateTimer now) timers
    in
    ( List.map Tuple.first t
    , List.filterMap
        (\( timer, isCompleted ) ->
            if isCompleted then
                Just timer

            else
                Nothing
        )
        t
    )


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | UpdateTranslation App.Translation.Translation
    | ConfigPageMsg ConfigPage.Msg
    | NotFoundPageMsg NotFoundPage.Msg
    | DashboardPageMsg DashboardPage.Msg
    | RandomEventCounterPageMsg RandomEventCounterPage.Msg
    | TimerPageMsg TimerPage.Msg
    | NewTimerPageMsg NewTimerPage.Msg
    | RefreshRandomEventReward Time.Posix
    | RefreshTimer Time.Posix
    | NotificationsMsg Notifications.Msg
    | DismissInAppNotification Session.InAppNotification
    | Noop


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( LinkClicked (Browser.External url), _ ) ->
            ( model, Browser.Navigation.load url )

        ( LinkClicked req, Booted _ page ) ->
            case req of
                Browser.Internal url ->
                    if String.endsWith ".txt" url.path then
                        ( model, Browser.Navigation.load (Url.toString url) )

                    else
                        let
                            { navKey } =
                                toSession page
                        in
                        ( model, Browser.Navigation.pushUrl navKey (Url.toString url) )

                Browser.External url ->
                    ( model, Browser.Navigation.load url )

        ( UrlChanged url, Booted notifications page ) ->
            let
                session =
                    toSession page
            in
            initPage { session | url = url } (Route.fromUrl url)
                |> Tuple.mapFirst (Booted notifications)

        ( UpdateTranslation translation, Booted notifications page ) ->
            let
                session =
                    toSession page
            in
            ( Booted notifications (updateSession page { session | translation = translation }), Cmd.none )

        ( ConfigPageMsg subMsg, Booted notifications (ConfigPage subModel) ) ->
            ConfigPage.update subMsg subModel
                |> Tuple.mapFirst ConfigPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map ConfigPageMsg)

        ( NotFoundPageMsg subMsg, Booted notifications (NotFoundPage subModel) ) ->
            NotFoundPage.update subMsg subModel
                |> Tuple.mapFirst NotFoundPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map NotFoundPageMsg)

        ( DashboardPageMsg subMsg, Booted notifications (DashboardPage subModel) ) ->
            DashboardPage.update subMsg subModel
                |> Tuple.mapFirst DashboardPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map DashboardPageMsg)

        ( RandomEventCounterPageMsg subMsg, Booted notifications (RandomEventCounterPage subModel) ) ->
            RandomEventCounterPage.update subMsg subModel
                |> Tuple.mapFirst RandomEventCounterPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map RandomEventCounterPageMsg)

        ( TimerPageMsg subMsg, Booted notifications (TimerPage subModel) ) ->
            TimerPage.update subMsg subModel
                |> Tuple.mapFirst TimerPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map TimerPageMsg)

        ( NewTimerPageMsg subMsg, Booted notifications (NewTimerPage subModel) ) ->
            NewTimerPage.update subMsg subModel
                |> Tuple.mapFirst NewTimerPage
                |> Tuple.mapFirst (Booted notifications)
                |> Tuple.mapSecond (Cmd.map NewTimerPageMsg)

        ( RefreshRandomEventReward now, Booted notifications page ) ->
            let
                session =
                    toSession page

                profile =
                    session.profile

                newProfile =
                    case profile.randomEvent of
                        Just randomEvent ->
                            { profile | randomEvent = Just (RandomEventReward.refresh profile.server now randomEvent) }

                        Nothing ->
                            { profile | randomEvent = Nothing }
            in
            ( Booted notifications (updateSession page { session | profile = newProfile }), Cmd.none )

        ( RefreshTimer now, Booted notifications page ) ->
            let
                session =
                    toSession page

                profile =
                    session.profile

                ( newTimers, completedTimers ) =
                    updateTimers now profile.timers

                newProfile =
                    { profile | timers = newTimers }

                translation =
                    session.translation.notifications.timer

                newInAppNotifications =
                    if profile.preference.inAppNotification == Preference.Enabled then
                        session.inAppNotifications
                            ++ List.map
                                (\t ->
                                    Session.InAppNotification (fmt [ t.name ] translation.body)
                                )
                                completedTimers

                    else
                        []

                systemNotificationCmd =
                    if profile.preference.browserNotification == Preference.Enabled then
                        Cmd.batch
                            (List.map
                                (\t ->
                                    Notifications.send
                                        (Notifications.notification (fmt [ t.name ] translation.title)
                                            [ Notifications.body (fmt [ t.name ] translation.body)
                                            , Notifications.lang profile.preference.language.code
                                            , Notifications.vibrate (Vibration.repeat (Vibration.pulse 8 |> Vibration.pause 8) 3)
                                            ]
                                        )
                                )
                                completedTimers
                            )

                    else
                        Cmd.none
            in
            ( Booted notifications (updateSession page { session | profile = newProfile, inAppNotifications = newInAppNotifications })
            , Cmd.batch
                [ if profile == newProfile then
                    Cmd.none

                  else
                    Profile.persist newProfile
                , systemNotificationCmd
                ]
            )

        ( NotificationsMsg subMsg, Booted notifications page ) ->
            let
                ( next, cmd ) =
                    Notifications.update subMsg notifications

                session =
                    toSession page

                newSession =
                    if next.availability == Notifications.Available then
                        session

                    else
                        Session.mapProfile
                            (\p ->
                                let
                                    preference =
                                        p.preference
                                in
                                { p | preference = { preference | browserNotification = Preference.Disabled } }
                            )
                            session
            in
            ( Booted next (updateSession page newSession)
            , Cmd.batch
                [ Cmd.map NotificationsMsg cmd
                , if session.profile == newSession.profile then
                    Cmd.none

                  else
                    Profile.persist newSession.profile
                ]
            )

        ( DismissInAppNotification notification, Booted notifications page ) ->
            let
                session =
                    toSession page

                inAppNotifications =
                    List.filter (\n -> not (n == notification)) session.inAppNotifications
            in
            ( Booted notifications (updateSession page { session | inAppNotifications = inAppNotifications }), Cmd.none )

        _ ->
            ( model, Cmd.none )



-- VIEW


textWithErrorCode : BootstrapError -> String -> String
textWithErrorCode error str =
    str ++ " (" ++ bootstrapErrorCode error ++ ")"


bootError : LaunchMode -> BootstrapError -> Browser.Document Msg
bootError mode error =
    let
        withErrorCode =
            textWithErrorCode error

        ( title, body ) =
            case ( mode, error ) of
                ( Development, FailedToDecodeCssModules message ) ->
                    ( "Failed to decode CSS Modules object"
                    , [ p [ class "app--error--description" ] [ text "You passed an invalid CSS Modules object via flag. Check the ", code [] [ text "cssModules" ], text " property." ]
                      , pre [ class "app--error--details" ] [ text message ]
                      ]
                    )

                ( Development, NoGameServersAvailable ) ->
                    ( "No game servers available"
                    , [ p [ class "app--error--description" ] [ text "You passed an empty list of game servers. Please include more than or equal to one server configuration in ", code [] [ text "servers" ], text " property." ]
                      ]
                    )

                ( Development, FailedToDecodeServers message ) ->
                    ( "Failed to decode server list"
                    , [ p [ class "app--error--description" ] [ text "You passed an invalid server list via flag. Check the ", code [] [ text "servers" ], text " property." ]
                      , pre [ class "app--error--details" ] [ text message ]
                      ]
                    )

                ( Development, FailedToDecodePackageMeta message ) ->
                    ( "Failed to decode package.json"
                    , [ p [ class "app--error--description" ] [ text "Cannot parse contents of the package.json file. See details below." ]
                      , pre [ class "app--error--details" ] [ text message ]
                      ]
                    )

                ( Development, FailedToDecodeInitialTranslation message ) ->
                    ( "Failed to decode initial translation dictionary"
                    , [ p [ class "app--error--description" ] [ text "Cannot parse `defaultTranslation` flag. Please make sure you passed it correctly." ]
                      , pre [ class "app--error--details" ] [ text message ]
                      ]
                    )

                ( _, Unknown ) ->
                    ( "Failed to launch application"
                    , [ p [ class "app--error--description" ] [ text "Sorry, application encountered an unexpected error during booting process." ]
                      ]
                    )

                ( Production, _ ) ->
                    ( "Failed to launch application"
                    , [ p [ class "app--error--description" ] [ text "Sorry, application has an unexpected error during booting process. This is due to misconfiguration slipped into production code." ] ]
                    )
    in
    { title = withErrorCode "Failed to launch application"
    , body =
        [ node "turtle-design-system"
            [ class "app--error" ]
            [ node "turtle-snackbar"
                [ attribute "severity" "danger" ]
                (h1 [ class "app--error--title" ]
                    [ node "turtle-attention-icon" [ class "app--error--icon" ] []
                    , span [] [ text title ]
                    ]
                    :: body
                )
            ]
        ]
    }


mapDocument : (a -> b) -> Browser.Document a -> Browser.Document b
mapDocument f doc =
    { title = doc.title
    , body = List.map (Html.map f) doc.body
    }


inAppNotificationCards : Session.Session -> List (Html Msg)
inAppNotificationCards { inAppNotifications, translation } =
    let
        t key =
            fmt [] (key translation.notifications.timer)
    in
    inAppNotifications
        |> List.map
            (\n ->
                node "turtle-notification"
                    []
                    [ node "turtle-info-icon" [ slot "icon" ] []
                    , case n of
                        Session.InAppNotification message ->
                            text message
                    , node "turtle-notification-action"
                        [ slot "action", attribute "lightdom" "" ]
                        [ a [ href "#timers", onClick (DismissInAppNotification n) ] [ text (t .open) ]
                        ]
                    , node "turtle-notification-action" [ slot "action", onClick (DismissInAppNotification n) ] [ text (t .dismiss) ]
                    ]
            )


view : Model -> Browser.Document Msg
view model =
    case model of
        Booted _ page ->
            let
                session =
                    toSession page

                doc =
                    case page of
                        ConfigPage subModel ->
                            ConfigPage.view subModel
                                |> mapDocument ConfigPageMsg

                        DashboardPage subModel ->
                            DashboardPage.view subModel
                                |> mapDocument DashboardPageMsg

                        RandomEventCounterPage subModel ->
                            RandomEventCounterPage.view subModel
                                |> mapDocument RandomEventCounterPageMsg

                        TimerPage subModel ->
                            TimerPage.view subModel
                                |> mapDocument TimerPageMsg

                        NewTimerPage subModel ->
                            NewTimerPage.view subModel
                                |> mapDocument NewTimerPageMsg

                        NotFoundPage subModel ->
                            NotFoundPage.view subModel
                                |> mapDocument NotFoundPageMsg
            in
            { title = doc.title ++ " - Genshin Utils"
            , body =
                [ App.Layout.layout session (inAppNotificationCards session) doc.body ]
            }

        FailedToBoot mode error ->
            bootError mode error



-- SUBSCRIPTIONS


pollRandomEventReward : Model -> Sub Msg
pollRandomEventReward model =
    case model of
        Booted _ page ->
            let
                interval =
                    case page of
                        RandomEventCounterPage _ ->
                            1000

                        _ ->
                            3000
            in
            Time.every interval RefreshRandomEventReward

        _ ->
            Sub.none


pollTimer : Model -> Sub Msg
pollTimer model =
    case model of
        Booted _ page ->
            let
                session =
                    toSession page
            in
            case session.profile.timers of
                [] ->
                    Sub.none

                _ ->
                    let
                        interval =
                            case page of
                                TimerPage _ ->
                                    1000

                                _ ->
                                    2000
                    in
                    Time.every interval RefreshTimer

        _ ->
            Sub.none


toSubscriptions : Page -> Sub Msg
toSubscriptions page =
    case page of
        ConfigPage subModel ->
            ConfigPage.subscriptions subModel |> Sub.map ConfigPageMsg

        DashboardPage subModel ->
            DashboardPage.subscriptions subModel |> Sub.map DashboardPageMsg

        NotFoundPage subModel ->
            NotFoundPage.subscriptions subModel |> Sub.map NotFoundPageMsg

        RandomEventCounterPage subModel ->
            RandomEventCounterPage.subscriptions subModel |> Sub.map RandomEventCounterPageMsg

        TimerPage subModel ->
            TimerPage.subscriptions subModel |> Sub.map TimerPageMsg

        NewTimerPage subModel ->
            NewTimerPage.subscriptions subModel |> Sub.map NewTimerPageMsg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ case model of
            Booted notifications page ->
                Sub.batch
                    [ toSubscriptions page
                    , Notifications.subscriptions notifications |> Sub.map NotificationsMsg
                    ]

            _ ->
                Sub.none
        , pollRandomEventReward model
        , pollTimer model
        , App.Translation.on
            (\ev ->
                case ev of
                    App.Translation.RecievedTranslation translation ->
                        UpdateTranslation translation

                    _ ->
                        -- TODO: Handle error
                        Noop
            )
        ]
