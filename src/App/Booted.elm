module App.Booted exposing (AppData, Model, Msg(..), NewTimerErrors(..), System, init, subscriptions, update)

import App.PackageInfo exposing (PackageJson)
import App.Preference as Preference exposing (Preference)
import App.Profile as Profile exposing (Profile)
import App.RandomEventReward as RandomEventReward exposing (RandomEventReward)
import App.ReferenceServer exposing (ReferenceServer)
import App.Route
import App.Timer as Timer exposing (Timer)
import App.Translation as Translation exposing (Translation)
import App.Types.Duration as Duration exposing (Duration)
import App.Types.Language exposing (Language)
import App.Types.PlatformCapability exposing (PlatformCapability)
import App.UiTheme exposing (UiTheme)
import Browser.Extra.Notifications as Notifications
import Browser.Extra.Vibration as Vibration exposing (vibrate)
import Browser.Extra.WakeLock as WakeLock
import Browser.Navigation
import CssModules exposing (CssModules)
import Process
import Task
import Time
import Translation exposing (fmt)
import Url



-- MODEL


type alias AppData =
    { profile : Profile
    , servers : List ReferenceServer
    }


type alias PlatformCapabilities =
    { vibrationApi : PlatformCapability
    }


type alias System =
    { cssModules : CssModules
    , packageInfo : PackageJson
    , navKey : Browser.Navigation.Key
    , url : Url.Url
    , translation : Translation
    , platformCapability : PlatformCapabilities
    , now : Time.Posix
    }


type alias NewTimerFields =
    { name : String
    , days : String
    , hours : String
    , minutes : String
    }


type NewTimerErrors
    = EmptyName
    | NegativeDuration
    | ZeroDuration


emptyNewTimerForm : NewTimerFields
emptyNewTimerForm =
    { name = ""
    , days = "0"
    , hours = "1"
    , minutes = "0"
    }


type alias Model =
    { app : AppData
    , system : System
    , wakeLock : WakeLock.Model
    , notification : Notifications.Model
    , newTimerForm : ( NewTimerFields, Result NewTimerErrors ( String, Duration ) )
    }


init : AppData -> System -> ( Model, Cmd Msg )
init app system =
    let
        ( wakeLock, wakeLockMsg ) =
            WakeLock.init

        ( notification, notificationMsg ) =
            Notifications.init
    in
    ( { app = app, system = system, wakeLock = wakeLock, notification = notification, newTimerForm = ( emptyNewTimerForm, Err EmptyName ) }
    , Cmd.batch [ Cmd.map WakeLockMsg wakeLockMsg, Cmd.map NotificationMsg notificationMsg ]
    )



-- UPDATE


type Msg
    = StartTimer Timer
    | StopTimer Timer
    | DeleteTimer Timer
    | ConsumeRandomEventReward
    | UndoRandomEventReward
    | Tick Time.Posix
    | PersistProfile Model
    | SendNotification Model
    | Vibrate Vibration.PulsePattern
    | Delay Float Msg
    | WakeLockMsg WakeLock.Msg
    | NotificationMsg Notifications.Msg
    | RequestWakeLock
    | ReleaseWakeLock
    | SetUiTheme UiTheme
    | SetLanguage Language
    | SetFeedbackVibration Preference.OnOffFeature
    | SetBrowserNotification Preference.OnOffFeature
    | UpdateTranslation Translation
    | RequestBrowserNotificationPermission
    | UpdateNewTimerFields (NewTimerFields -> NewTimerFields)
    | EmptyNewTimerFields
    | SubmitNewTimerForm
    | ChangeServer ReferenceServer
    | NoOp


{-| Change the timer's state to completed if it run out time.
The first argument, `now`, should be as close to the current time as possible.
-}
tickTimer : Time.Posix -> Timer -> Timer
tickTimer now timer =
    case timer.state of
        Timer.Running start ->
            let
                endAt =
                    Time.posixToMillis start + Duration.toInt timer.duration
            in
            if Time.posixToMillis now >= endAt then
                { timer | state = Timer.Completed start (Time.millisToPosix endAt) }

            else
                timer

        _ ->
            timer


updateTimer : (Timer -> Timer) -> Timer -> Model -> Model
updateTimer f timer =
    updateProfile
        (\p ->
            { p
                | timers =
                    List.map
                        (\t ->
                            if t.id == timer.id then
                                f t

                            else
                                t
                        )
                        p.timers
            }
        )


updateRandomEventReward : (Maybe RandomEventReward -> Maybe RandomEventReward) -> Model -> Model
updateRandomEventReward f model =
    updateProfile
        (\p ->
            { p
                | randomEvent =
                    p.randomEvent
                        |> Maybe.map (\r -> RandomEventReward.refresh p.server model.system.now r)
                        |> f
            }
        )
        model


updatePreference : (Preference -> Preference) -> Model -> Model
updatePreference f =
    updateProfile (\p -> { p | preference = f p.preference })


updateProfile : (Profile -> Profile) -> Model -> Model
updateProfile f =
    updateAppData (\app -> { app | profile = f app.profile })


updateSystem : (System -> System) -> Model -> Model
updateSystem f model =
    { model | system = f model.system }


updateAppData : (AppData -> AppData) -> Model -> Model
updateAppData f model =
    { model | app = f model.app }


findTimer : Timer -> List Timer -> Maybe Timer
findTimer src list =
    case list of
        x :: xs ->
            if x.id == src.id then
                Just x

            else
                findTimer src xs

        _ ->
            Nothing


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        -- Timer
        StartTimer timer ->
            ( updateTimer (\t -> { t | state = Timer.Running model.system.now }) timer model
            , Cmd.none
            )
                |> chain (PersistProfile model)

        StopTimer timer ->
            ( updateTimer (\t -> { t | state = Timer.Idle }) timer model
            , Cmd.none
            )
                |> chain (PersistProfile model)

        DeleteTimer timer ->
            ( updateProfile (\p -> { p | timers = List.filter (\t -> not (t.id == timer.id)) p.timers }) model
            , Cmd.none
            )
                |> chain (PersistProfile model)

        UpdateNewTimerFields f ->
            let
                fields =
                    f (Tuple.first model.newTimerForm)

                result =
                    if String.trim fields.name == "" then
                        Err EmptyName

                    else
                        let
                            days =
                                String.toInt fields.days |> Maybe.withDefault 0

                            hours =
                                String.toInt fields.hours |> Maybe.withDefault 0

                            minutes =
                                String.toInt fields.minutes |> Maybe.withDefault 0

                            duration =
                                Duration.fromFragments { day = days, hour = hours, minute = minutes, second = 0 }

                            di =
                                Duration.toInt duration
                        in
                        if di < 0 then
                            Err NegativeDuration

                        else if di == 0 then
                            Err ZeroDuration

                        else
                            Ok ( fields.name, duration )
            in
            ( { model | newTimerForm = ( fields, result ) }, Cmd.none )

        EmptyNewTimerFields ->
            update (UpdateNewTimerFields (\_ -> emptyNewTimerForm)) model

        SubmitNewTimerForm ->
            case model.newTimerForm of
                ( _, Ok ( name, duration ) ) ->
                    let
                        timer : Timer.Timer
                        timer =
                            { id = Timer.posixToId model.system.now
                            , name = name
                            , duration = duration
                            , state = Timer.Idle
                            }
                    in
                    ( { model
                        | newTimerForm = ( emptyNewTimerForm, Err EmptyName )
                      }
                        |> updateProfile (\p -> { p | timers = timer :: p.timers })
                    , Browser.Navigation.pushUrl model.system.navKey (App.Route.hash App.Route.Timer)
                    )
                        |> chain (PersistProfile model)

                _ ->
                    ( model, Cmd.none )

        -- Random event reward
        ConsumeRandomEventReward ->
            ( updateRandomEventReward
                (\r ->
                    case r of
                        Just { remains } ->
                            case remains of
                                0 ->
                                    r

                                _ ->
                                    Just { remains = remains - 1, loggedAt = model.system.now }

                        Nothing ->
                            Just { remains = RandomEventReward.max - 1, loggedAt = model.system.now }
                )
                model
            , Cmd.none
            )
                |> chain (PersistProfile model)

        UndoRandomEventReward ->
            ( updateRandomEventReward
                (Maybe.map
                    (\{ remains, loggedAt } ->
                        { remains = min (remains + 1) RandomEventReward.max
                        , loggedAt = loggedAt
                        }
                    )
                )
                model
            , Cmd.none
            )

        -- Subscription handler
        Tick now ->
            ( model
                |> updateSystem (\system -> { system | now = now })
                |> updateProfile (\p -> { p | timers = List.map (tickTimer now) p.timers })
                |> updateRandomEventReward identity
            , Cmd.none
            )
                |> chain (PersistProfile model)

        -- Profile changes
        SetUiTheme theme ->
            ( updateProfile (\p -> { p | theme = theme }) model, Cmd.none )
                |> chain (PersistProfile model)

        ChangeServer server ->
            ( updateProfile (\p -> { p | server = server }) model, Cmd.none )
                |> chain (PersistProfile model)

        -- Preference changes
        SetLanguage language ->
            ( updatePreference (\p -> { p | language = language }) model, Translation.request language )
                |> chain (PersistProfile model)

        SetFeedbackVibration state ->
            ( updatePreference (\p -> { p | feedbackVibration = state }) model, Cmd.none )
                |> chain (PersistProfile model)

        -- Side effect utilities
        Vibrate pattern ->
            case model.app.profile.preference.feedbackVibration of
                Preference.Enabled ->
                    ( model, vibrate pattern )

                Preference.Disabled ->
                    ( model, Cmd.none )

        PersistProfile prev ->
            ( model
            , if prev.app.profile == model.app.profile then
                Cmd.none

              else
                Profile.persist model.app.profile
            )

        SendNotification prev ->
            if model.app.profile.preference.browserNotification == Preference.Disabled then
                ( model, Cmd.none )

            else
                let
                    completedTimer =
                        List.filter
                            (\timer ->
                                case ( timer.state, findTimer timer prev.app.profile.timers ) of
                                    ( Timer.Completed _ _, Just prevTimer ) ->
                                        not (prevTimer.state == timer.state)

                                    _ ->
                                        False
                            )
                            model.app.profile.timers

                    t params key =
                        fmt params (key model.system.translation.notifications.timer)

                    cmd =
                        completedTimer
                            |> List.map
                                (\timer ->
                                    Notifications.notification
                                        (t [ timer.name ] .title)
                                        [ Notifications.body (t [ timer.name ] .body)
                                        , Notifications.lang model.app.profile.preference.language.code
                                        , Notifications.vibrate (Vibration.repeat (Vibration.pulse 8 |> Vibration.pause 8) 3)
                                        ]
                                        |> Notifications.send
                                )
                            |> Cmd.batch
                in
                ( model, cmd )

        -- WakeLock
        WakeLockMsg subMsg ->
            let
                ( wakeLock, subCmd ) =
                    WakeLock.update subMsg model.wakeLock
            in
            ( { model | wakeLock = wakeLock }, Cmd.map WakeLockMsg subCmd )

        RequestWakeLock ->
            update (WakeLockMsg WakeLock.TryLock) model

        ReleaseWakeLock ->
            update (WakeLockMsg WakeLock.TryRelease) model

        -- Notification
        NotificationMsg subMsg ->
            let
                ( notification, cmd ) =
                    Notifications.update subMsg model.notification
            in
            ( { model | notification = notification }, Cmd.map NotificationMsg cmd )

        SetBrowserNotification enabled ->
            ( updatePreference (\p -> { p | browserNotification = enabled }) model, Cmd.none )
                |> chain (PersistProfile model)

        RequestBrowserNotificationPermission ->
            ( model, Notifications.requestPermission )

        -- MISC
        UpdateTranslation translation ->
            let
                { system } =
                    model
            in
            ( { model | system = { system | translation = translation } }, Cmd.none )

        Delay ms nextMsg ->
            ( model, Task.perform (\_ -> nextMsg) (Process.sleep ms) )

        NoOp ->
            ( model, Cmd.none )


{-| Perform an additional update with a message.

    update msgA model
        |> chain msgB

-}
chain : Msg -> ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
chain msg ( model, cmd ) =
    let
        ( nextModel, nextCmd ) =
            update msg model
    in
    ( nextModel, Cmd.batch [ cmd, nextCmd ] )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ WakeLock.subscriptions model.wakeLock |> Sub.map WakeLockMsg
        , Notifications.subscriptions model.notification |> Sub.map NotificationMsg
        , Time.every 500.0 Tick
        , Translation.on
            (\ev ->
                case ev of
                    Translation.RecievedTranslation translation ->
                        UpdateTranslation translation

                    _ ->
                        NoOp
            )
        ]
