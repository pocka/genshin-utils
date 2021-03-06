port module App.Profile exposing (Profile, decoder, persist)

import App.Preference as Preference exposing (Preference)
import App.RandomEventReward as RandomEventReward exposing (RandomEventReward)
import App.ReferenceServer as ReferenceServer
import App.Timer as Timer exposing (Timer)
import App.UiTheme as UiTheme
import Json.Decode as Decode
import Json.Encode as Encode



-- PORTS (OUT)


type OutgoingEvent
    = PersistProfile Profile


encodeOutgoingEvent : OutgoingEvent -> Encode.Value
encodeOutgoingEvent ev =
    case ev of
        PersistProfile profile ->
            Encode.object
                [ ( "type", Encode.string "PersistProfile" )
                , ( "profile", encodeProfile profile )
                ]


port sendAppProfileEvent : Encode.Value -> Cmd msg


sendEvent : OutgoingEvent -> Cmd msg
sendEvent ev =
    sendAppProfileEvent (encodeOutgoingEvent ev)


{-| Save the current profile data to client storage.
-}
persist : Profile -> Cmd msg
persist profile =
    sendEvent (PersistProfile profile)



-- MODEL


type alias Profile =
    { server : ReferenceServer.ReferenceServer
    , theme : UiTheme.UiTheme
    , randomEvent : Maybe RandomEventReward
    , preference : Preference
    , timers : List Timer
    }


encodeMaybe : (a -> Encode.Value) -> Maybe a -> Encode.Value
encodeMaybe f maybe =
    case maybe of
        Just value ->
            f value

        Nothing ->
            Encode.null


encodeProfile : Profile -> Encode.Value
encodeProfile profile =
    Encode.object
        [ ( "server", ReferenceServer.encode profile.server )
        , ( "theme", UiTheme.encode profile.theme )
        , ( "randomEvent", encodeMaybe RandomEventReward.encode profile.randomEvent )
        , ( "preference", Preference.encode profile.preference )
        , ( "timers", Encode.list Timer.encode profile.timers )
        ]


decoder : Decode.Decoder Profile
decoder =
    Decode.map5
        Profile
        (Decode.field "server" ReferenceServer.decoder)
        (Decode.field "theme" UiTheme.decoder)
        (Decode.field "randomEvent" (Decode.maybe RandomEventReward.decoder))
        (Decode.field "preference" (Decode.oneOf [ Preference.decoder, Decode.succeed Preference.default ]))
        (Decode.field "timers" (Decode.oneOf [ Decode.list Timer.decoder, Decode.succeed [] ]))
