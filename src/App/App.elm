module App.App exposing (main)

import App.Booted as Booted
import App.PackageInfo as PackageInfo
import App.Preference as Preference
import App.Profile as Profile
import App.ReferenceServer as ReferenceServer
import App.Route as Route exposing (Route(..))
import App.Translation
import App.Types.LaunchMode as LaunchMode exposing (LaunchMode(..))
import App.Types.PlatformCapability as PlatformCapability exposing (PlatformCapability)
import App.UiTheme
import App.Views.About
import App.Views.Config
import App.Views.Layout as Layout
import App.Views.Nav as Nav
import App.Views.NewTimer
import App.Views.NotFound
import App.Views.RandomEventCounter
import App.Views.Timer
import Browser
import Browser.Navigation
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Html5 exposing (..)
import Json.Decode as Decode
import Time
import Translation exposing (fmt)
import Url



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


type alias FlagDecodeResult =
    { cssModules : Result Decode.Error CssModules.CssModules
    , servers : Result Decode.Error (List ReferenceServer.ReferenceServer)
    , packageInfo : Result Decode.Error PackageInfo.PackageJson
    , profile : Result Decode.Error (Maybe Profile.Profile)
    , mode : LaunchMode
    , vibrationApi : PlatformCapability
    , translation : Result Decode.Error App.Translation.Translation
    }


decodeFlags : Decode.Value -> FlagDecodeResult
decodeFlags v =
    { cssModules = Decode.decodeValue (Decode.field "cssModules" CssModules.cssModulesDecoder) v
    , servers = Decode.decodeValue (Decode.field "servers" (Decode.list ReferenceServer.decoder)) v
    , packageInfo = Decode.decodeValue (Decode.field "packageInfo" PackageInfo.packageJsonDecoder) v
    , profile = Decode.decodeValue (Decode.field "profile" (Decode.nullable Profile.decoder)) v
    , mode = Decode.decodeValue (Decode.field "mode" LaunchMode.decoder) v |> Result.withDefault Production
    , vibrationApi = Decode.decodeValue (Decode.field "vibrationApi" PlatformCapability.decoder) v |> Result.withDefault PlatformCapability.NotSupported
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


type Model
    = FailedToBoot LaunchMode BootstrapError
    | Booted Route Booted.Model


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
                                app : Booted.AppData
                                app =
                                    { profile =
                                        case flags.profile of
                                            Ok (Just profile) ->
                                                profile

                                            _ ->
                                                { server = head, theme = App.UiTheme.SystemDefault, randomEvent = Nothing, preference = Preference.default, timers = [] }
                                    , servers = servers
                                    }

                                system : Booted.System
                                system =
                                    { packageInfo = packageInfo
                                    , cssModules = cssModules
                                    , navKey = navKey
                                    , url = url
                                    , platformCapability =
                                        { vibrationApi = flags.vibrationApi
                                        }
                                    , translation = translation
                                    , now = Time.millisToPosix 0
                                    }

                                ( model, cmd ) =
                                    Booted.init app system
                            in
                            ( Booted (Route.fromUrl url) model, Cmd.map BootedMsg cmd )

                Err error ->
                    ( failedToBoot (FailedToDecodeInitialTranslation (Decode.errorToString error)), Cmd.none )

        ( Err error, _, _ ) ->
            ( failedToBoot (FailedToDecodeCssModules (Decode.errorToString error)), Cmd.none )

        ( _, Err error, _ ) ->
            ( failedToBoot (FailedToDecodeServers (Decode.errorToString error)), Cmd.none )

        ( _, _, Err error ) ->
            ( failedToBoot (FailedToDecodePackageMeta (Decode.errorToString error)), Cmd.none )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | UpdateTranslation App.Translation.Translation
    | BootedMsg Booted.Msg
    | Noop


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( LinkClicked (Browser.External url), _ ) ->
            ( model, Browser.Navigation.load url )

        ( LinkClicked req, Booted _ { system } ) ->
            case req of
                Browser.Internal url ->
                    if String.endsWith ".txt" url.path then
                        ( model, Browser.Navigation.load (Url.toString url) )

                    else
                        ( model, Browser.Navigation.pushUrl system.navKey (Url.toString url) )

                Browser.External url ->
                    ( model, Browser.Navigation.load url )

        ( UrlChanged url, Booted _ subModel ) ->
            let
                { system } =
                    subModel
            in
            ( Booted (Route.fromUrl url) { subModel | system = { system | url = url } }, Cmd.none )

        -- TODO: Move to Booted.elm
        ( UpdateTranslation translation, Booted route subModel ) ->
            let
                { system } =
                    subModel
            in
            ( Booted route { subModel | system = { system | translation = translation } }, Cmd.none )

        ( BootedMsg subMsg, Booted route subModel ) ->
            let
                ( nextModel, nextCmd ) =
                    Booted.update subMsg subModel
            in
            ( Booted route nextModel, Cmd.map BootedMsg nextCmd )

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


view : Model -> Browser.Document Msg
view model =
    case model of
        Booted route subModel ->
            let
                t key =
                    fmt [] (key subModel.system.translation)

                title =
                    case route of
                        Route.NotFound ->
                            "Not Found"

                        Route.About ->
                            t (\d -> d.aboutPage.title)

                        Route.Configuration ->
                            t (\d -> d.configPage.title)

                        Route.NewTimer ->
                            t (\d -> d.newTimerPage.title)

                        Route.RandomEventCounter ->
                            t (\d -> d.randomEventCounterPage.title)

                        Route.Timer ->
                            t (\d -> d.timerPage.title)
            in
            { title = title ++ " - Genshin Utils"
            , body =
                Layout.layout subModel
                    (Nav.nav route subModel)
                    [ case route of
                        Route.NotFound ->
                            App.Views.NotFound.view subModel

                        Route.About ->
                            App.Views.About.view subModel

                        Route.RandomEventCounter ->
                            App.Views.RandomEventCounter.view subModel

                        Route.Timer ->
                            App.Views.Timer.view subModel

                        Route.NewTimer ->
                            App.Views.NewTimer.view subModel

                        Route.Configuration ->
                            App.Views.Config.view subModel
                    ]
                    |> List.map (Html.map BootedMsg)
            }

        FailedToBoot mode error ->
            bootError mode error



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ App.Translation.on
            (\ev ->
                case ev of
                    App.Translation.RecievedTranslation translation ->
                        UpdateTranslation translation

                    _ ->
                        -- TODO: Handle error
                        Noop
            )
        , case model of
            Booted _ subModel ->
                Booted.subscriptions subModel |> Sub.map BootedMsg

            _ ->
                Sub.none
        ]
