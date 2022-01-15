module App.Pages.NewTimer exposing (Model, Msg, init, subscriptions, update, view)

import App.Duration as Duration exposing (Duration)
import App.Profile as Profile exposing (Profile)
import App.Session exposing (Session)
import App.Timer as Timer exposing (Timer)
import App.Translation exposing (Translation)
import App.UI.Common exposing (pageHeader)
import Browser
import Browser.Navigation
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html5 exposing (..)
import String
import Task
import Time
import Translation exposing (fmt)



-- MODEL


type alias Form =
    { name : String
    , day : String
    , hour : String
    , minute : String
    }


emptyForm : Form
emptyForm =
    { name = ""
    , day = "0"
    , hour = "1"
    , minute = "0"
    }


type alias Model =
    { session : Session
    , form : Form
    , now : Time.Posix
    }


init : Session -> ( Model, Cmd Msg )
init session =
    let
        now =
            Time.millisToPosix 0
    in
    ( { session = session, form = emptyForm, now = now }, Task.perform GetTime Time.now )



-- UPDATE


type Field
    = Name
    | Day
    | Hour
    | Minute


type Msg
    = UpdateField Field String
    | Submit Timer
    | GetTime Time.Posix
    | Noop


mapProfile : (Profile -> Profile) -> Session -> Session
mapProfile f session =
    { session | profile = f session.profile }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateField field value ->
            let
                form =
                    model.form

                updated =
                    case field of
                        Name ->
                            { form | name = value }

                        Day ->
                            { form | day = value }

                        Hour ->
                            { form | hour = value }

                        Minute ->
                            { form | minute = value }
            in
            ( { model | form = updated }, Cmd.none )

        Submit timer ->
            let
                session =
                    mapProfile (\p -> { p | timers = timer :: p.timers }) model.session
            in
            ( { model | session = session }
            , Cmd.batch
                [ Profile.persist session.profile
                , Browser.Navigation.pushUrl model.session.navKey "#timers"
                ]
            )

        GetTime t ->
            ( { model | now = t }, Cmd.none )

        Noop ->
            ( model, Cmd.none )



-- VIEW


segmentsToDuration : Int -> Int -> Int -> Duration
segmentsToDuration day hour minutes =
    Duration.fromInt ((minutes + ((hour + day * 24) * 60)) * 60 * 1000)


validateMin : Int -> String -> Result String Int -> Result String Int
validateMin min error n =
    case n of
        Ok x ->
            if x < min then
                Err error

            else
                Ok x

        _ ->
            n


formToTimer : Translation -> Time.Posix -> Form -> Result String Timer.Timer
formToTimer tr t form =
    let
        day =
            let
                label =
                    fmt [] tr.newTimerPage.form.duration.day.label
            in
            String.toInt form.day
                |> Result.fromMaybe (fmt [ label ] tr.validation.int)
                |> validateMin 0 (fmt [ label, "0" ] tr.validation.gte)

        hour =
            let
                label =
                    fmt [] tr.newTimerPage.form.duration.day.label
            in
            String.toInt form.hour
                |> Result.fromMaybe (fmt [ label ] tr.validation.int)
                |> validateMin 0 (fmt [ label, "0" ] tr.validation.gte)

        minute =
            let
                label =
                    fmt [] tr.newTimerPage.form.duration.day.label
            in
            String.toInt form.minute
                |> Result.fromMaybe (fmt [ label ] tr.validation.int)
                |> validateMin 0 (fmt [ label, "0" ] tr.validation.gte)

        duration =
            Result.map3
                segmentsToDuration
                day
                hour
                minute

        name =
            let
                label =
                    fmt [] tr.newTimerPage.form.general.name.label
            in
            case String.trim form.name of
                "" ->
                    Err (fmt [ label ] tr.validation.required)

                str ->
                    Ok str
    in
    Result.map3
        (Timer.Timer (Timer.posixToId t))
        name
        duration
        (Ok Timer.Idle)


view : Model -> Browser.Document Msg
view model =
    let
        t key =
            fmt [] (key model.session.translation.newTimerPage)

        class =
            CssModules.class "App.Pages.NewTimer" model.session.cssModules

        timerResult =
            formToTimer model.session.translation model.now model.form

        canSubmit =
            case timerResult of
                Ok { duration } ->
                    Duration.toInt duration > 0

                Err _ ->
                    False
    in
    { title = t .title
    , body =
        [ pageHeader model.session { title = t .title } []
        , div [ class "container" ]
            [ case timerResult of
                Ok { duration } ->
                    if Duration.toInt duration <= 0 then
                        node "turtle-snackbar" [ attribute "severity" "danger" ] [ text (fmt [ t (\d -> d.form.duration.title), "0" ] model.session.translation.validation.gte) ]

                    else
                        node "turtle-snackbar" [ attribute "severity" "info" ] [ text (fmt [ Duration.toString model.session.profile.preference.language (Duration.Detailed Duration.Minutes) duration ] model.session.translation.newTimerPage.form.duration.tips) ]

                Err message ->
                    node "turtle-snackbar" [ attribute "severity" "danger" ] [ text message ]
            , Html.form
                [ class "form"
                , onSubmit
                    (case timerResult of
                        Ok timer ->
                            Submit timer

                        Err _ ->
                            Noop
                    )
                ]
                [ node "turtle-form-field"
                    [ class "name" ]
                    [ label [ slot "label", for "new_timer__name" ] [ text (t (\d -> d.form.general.name.label)) ]
                    , node "turtle-textbox"
                        []
                        [ input [ id "new_timer__name", type_ "text", aria "describedby" "new_timer__name__description", required True, value model.form.name, placeholder "Parametric transformer", onInput (UpdateField Name) ] [] ]
                    , span [ slot "description", id "new_timer__name__description" ] [ text (t (\d -> d.form.general.name.description)) ]
                    ]
                , h2 [ class "heading" ] [ text (t (\d -> d.form.duration.title)) ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "new_timer__day" ] [ text (t (\d -> d.form.duration.day.label)) ]
                    , node "turtle-textbox"
                        []
                        [ input [ id "new_timer__day", type_ "number", aria "describedby" "new_timer__day__description", required True, Html.Attributes.min "0", value model.form.day, onInput (UpdateField Day) ] [] ]
                    , span [ slot "description", id "new_timer__day__description" ] [ text (t (\d -> d.form.duration.day.description)) ]
                    ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "new_timer__hour" ] [ text (t (\d -> d.form.duration.hour.label)) ]
                    , node "turtle-textbox"
                        []
                        [ input [ id "new_timer__hour", type_ "number", aria "describedby" "new_timer__hour__description", required True, Html.Attributes.min "0", value model.form.hour, onInput (UpdateField Hour) ] [] ]
                    , span [ slot "description", id "new_timer__hour__description" ] [ text (t (\d -> d.form.duration.hour.description)) ]
                    ]
                , node "turtle-form-field"
                    []
                    [ label [ slot "label", for "new_timer__minute" ] [ text (t (\d -> d.form.duration.minute.label)) ]
                    , node "turtle-textbox"
                        []
                        [ input [ id "new_timer__minute", type_ "number", aria "describedby" "new_timer__minute__description", required True, Html.Attributes.min "0", value model.form.minute, onInput (UpdateField Minute) ] [] ]
                    , span [ slot "description", id "new_timer__minute__description" ] [ text (t (\d -> d.form.duration.minute.description)) ]
                    ]
                , node "turtle-button"
                    [ class "submit", attribute "variant" "primary", attribute "lightdom" "" ]
                    [ button [ type_ "submit", disabled (not canSubmit) ] [ text (t (\d -> d.form.submit)) ] ]
                ]
            ]
        ]
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
