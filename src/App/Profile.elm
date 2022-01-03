port module App.Profile exposing (Profile, decoder, persist)

import App.RandomEventReward as RandomEventReward exposing (RandomEventReward)
import App.ReferenceServer as ReferenceServer
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


persist : Profile -> Cmd msg
persist profile =
    sendEvent (PersistProfile profile)



-- MODEL


type alias Profile =
    { server : ReferenceServer.ReferenceServer
    , theme : UiTheme.UiTheme
    , randomEvent : Maybe RandomEventReward
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
        ]


decoder : Decode.Decoder Profile
decoder =
    Decode.map3
        Profile
        (Decode.field "server" ReferenceServer.decoder)
        (Decode.field "theme" UiTheme.decoder)
        (Decode.field "randomEvent" (Decode.maybe RandomEventReward.decoder))
