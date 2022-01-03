module App.App exposing (main)

import App.Layout
import App.PackageInfo as PackageInfo
import App.Pages.Config as ConfigPage
import App.Pages.Dashboard as DashboardPage
import App.Pages.NotFound as NotFoundPage
import App.Pages.RandomEventCounter as RandomEventCounterPage
import App.Profile as Profile
import App.RandomEventReward as RandomEventReward
import App.ReferenceServer as ReferenceServer
import App.Route as Route
import App.Session as Session
import App.UiTheme
import Browser
import Browser.Navigation
import CssModules
import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as Decode
import Time
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
    }


decodeFlags : Decode.Value -> FlagDecodeResult
decodeFlags v =
    { cssModules = Decode.decodeValue (Decode.field "cssModules" CssModules.cssModulesDecoder) v
    , servers = Decode.decodeValue (Decode.field "servers" (Decode.list ReferenceServer.decoder)) v
    , packageInfo = Decode.decodeValue (Decode.field "packageInfo" PackageInfo.packageJsonDecoder) v
    , profile = Decode.decodeValue (Decode.field "profile" (Decode.nullable Profile.decoder)) v
    , mode = Decode.decodeValue (Decode.field "mode" launchModeDecoder) v |> Result.withDefault Production
    }



-- MODEL


{-| Critical errors the app unable to launch.
-}
type BootstrapError
    = NoGameServersAvailable
    | FailedToDecodeCssModules String
    | FailedToDecodeServers String
    | FailedToDecodePackageMeta String
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

        Unknown ->
            "E-999"


type Page
    = ConfigPage ConfigPage.Model
    | NotFoundPage NotFoundPage.Model
    | DashboardPage DashboardPage.Model
    | RandomEventCounterPage RandomEventCounterPage.Model


type Model
    = FailedToBoot LaunchMode BootstrapError
    | Booted Page


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
                                        { server = head, theme = App.UiTheme.SystemDefault, randomEvent = Nothing }
                            , servers = servers
                            , packageInfo = packageInfo
                            , cssModules = cssModules
                            , navKey = navKey
                            , url = url
                            , warnings =
                                case flags.profile of
                                    Ok _ ->
                                        []

                                    Err error ->
                                        [ "Failed to restore saved profile: " ++ Decode.errorToString error ]
                            }

                        ( page, cmd ) =
                            initPage session (Route.fromUrl url)
                    in
                    ( Booted page, cmd )

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


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | ConfigPageMsg ConfigPage.Msg
    | NotFoundPageMsg NotFoundPage.Msg
    | DashboardPageMsg DashboardPage.Msg
    | RandomEventCounterPageMsg RandomEventCounterPage.Msg
    | RefreshRandomEventReward Time.Posix


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( LinkClicked (Browser.External url), _ ) ->
            ( model, Browser.Navigation.load url )

        ( LinkClicked req, Booted page ) ->
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

        ( UrlChanged url, Booted page ) ->
            let
                session =
                    toSession page
            in
            initPage { session | url = url } (Route.fromUrl url)
                |> Tuple.mapFirst Booted

        ( ConfigPageMsg subMsg, Booted (ConfigPage subModel) ) ->
            ConfigPage.update subMsg subModel
                |> Tuple.mapFirst ConfigPage
                |> Tuple.mapFirst Booted
                |> Tuple.mapSecond (Cmd.map ConfigPageMsg)

        ( NotFoundPageMsg subMsg, Booted (NotFoundPage subModel) ) ->
            NotFoundPage.update subMsg subModel
                |> Tuple.mapFirst NotFoundPage
                |> Tuple.mapFirst Booted
                |> Tuple.mapSecond (Cmd.map NotFoundPageMsg)

        ( DashboardPageMsg subMsg, Booted (DashboardPage subModel) ) ->
            DashboardPage.update subMsg subModel
                |> Tuple.mapFirst DashboardPage
                |> Tuple.mapFirst Booted
                |> Tuple.mapSecond (Cmd.map DashboardPageMsg)

        ( RandomEventCounterPageMsg subMsg, Booted (RandomEventCounterPage subModel) ) ->
            RandomEventCounterPage.update subMsg subModel
                |> Tuple.mapFirst RandomEventCounterPage
                |> Tuple.mapFirst Booted
                |> Tuple.mapSecond (Cmd.map RandomEventCounterPageMsg)

        ( RefreshRandomEventReward now, Booted page ) ->
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
            ( Booted (updateSession page { session | profile = newProfile }), Cmd.none )

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


view : Model -> Browser.Document Msg
view model =
    case model of
        Booted page ->
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

                        NotFoundPage subModel ->
                            NotFoundPage.view subModel
                                |> mapDocument NotFoundPageMsg
            in
            { title = doc.title ++ " - Genshin Utils"
            , body =
                [ App.Layout.layout session doc.body ]
            }

        FailedToBoot mode error ->
            bootError mode error



-- SUBSCRIPTIONS


pollRandomEventReward : Model -> Sub Msg
pollRandomEventReward model =
    case model of
        Booted page ->
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


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ case model of
            Booted page ->
                toSubscriptions page

            _ ->
                Sub.none
        , pollRandomEventReward model
        ]
