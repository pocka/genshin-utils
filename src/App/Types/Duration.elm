module App.Types.Duration exposing
    ( Duration
    , Format(..)
    , Fragments
    , Segment(..)
    , decoder
    , encode
    , fromFragments
    , fromInt
    , toFragments
    , toInt
    , toString
    )

import App.Types.Language exposing (Language)
import Json.Decode as Decode
import Json.Encode as Encode
import String


type Duration
    = Duration Int


fromInt : Int -> Duration
fromInt =
    Duration


toInt : Duration -> Int
toInt d =
    case d of
        Duration x ->
            x


decoder : Decode.Decoder Duration
decoder =
    Decode.int |> Decode.map fromInt


encode : Duration -> Encode.Value
encode d =
    case d of
        Duration x ->
            Encode.int x


type alias Fragments =
    { day : Int
    , hour : Int
    , minute : Int
    , second : Int
    }


toFragments : Duration -> Fragments
toFragments d =
    let
        x =
            toInt d

        sec =
            x // secInMs |> remainderBy 60

        min =
            x // minInMs |> remainderBy 60

        hour =
            x // hourInMs |> remainderBy 24

        day =
            x // dayInMs
    in
    { day = day
    , hour = hour
    , minute = min
    , second = sec
    }


secInMs : Int
secInMs =
    1000


minInMs : Int
minInMs =
    60 * secInMs


hourInMs : Int
hourInMs =
    60 * minInMs


dayInMs : Int
dayInMs =
    24 * hourInMs


fromFragments : Fragments -> Duration
fromFragments { day, hour, minute, second } =
    Duration (day * dayInMs + hour * hourInMs + minute * minInMs + second * secInMs)


type Segment
    = Days
    | Hours
    | Minutes
    | Seconds


type Format
    = Rough
    | Detailed Segment


{-| Format duration in milliseconds to human-friendly notation.
Because it's hard to describe time-formatting in i18n file, you need to write formatting for
your language here.
-}
toString : Language -> Format -> Duration -> String
toString lang format d =
    let
        { day, hour, minute, second } =
            toFragments d

        maybeDay =
            if day > 0 || format == Detailed Days then
                Just day

            else
                Nothing

        maybeHour =
            case format of
                Detailed Days ->
                    Nothing

                Detailed Hours ->
                    Just (max 0 hour)

                Rough ->
                    if hour > 0 then
                        Just hour

                    else
                        Nothing

                _ ->
                    if hour > 0 || not (maybeDay == Nothing) then
                        Just hour

                    else
                        Nothing

        maybeMinute =
            case format of
                Detailed Days ->
                    Nothing

                Detailed Hours ->
                    Nothing

                Rough ->
                    if minute > 0 then
                        Just minute

                    else
                        Nothing

                _ ->
                    if minute > 0 || not (maybeHour == Nothing) then
                        Just (max 0 minute)

                    else
                        Nothing

        maybeSecond =
            case format of
                Detailed Seconds ->
                    Just (max 0 second)

                Rough ->
                    Just (max 0 second)

                _ ->
                    Nothing
    in
    case String.split "-" lang.code of
        "ja" :: _ ->
            let
                segments =
                    [ Maybe.map (\x -> String.fromInt x ++ "日") maybeDay
                    , Maybe.map (\x -> String.fromInt x ++ "時間") maybeHour
                    , Maybe.map (\x -> String.fromInt x ++ "分") maybeMinute
                    , Maybe.map (\x -> String.fromInt x ++ "秒") maybeSecond
                    ]
                        |> List.filterMap identity
            in
            case format of
                Rough ->
                    segments
                        |> List.head
                        |> Maybe.withDefault "---"

                _ ->
                    segments
                        |> String.join ""

        -- Unknown languages and unsupported languages are fallback to English.
        _ ->
            let
                segments =
                    [ Maybe.map
                        (\x ->
                            String.fromInt x
                                ++ (if format == Rough then
                                        " days"

                                    else
                                        "days,"
                                   )
                        )
                        maybeDay
                    , Maybe.map
                        (\x ->
                            String.fromInt x
                                ++ (if format == Rough then
                                        " hours"

                                    else
                                        "h"
                                   )
                        )
                        maybeHour
                    , Maybe.map
                        (\x ->
                            String.fromInt x
                                ++ (if format == Rough then
                                        " minutes"

                                    else
                                        "m"
                                   )
                        )
                        maybeMinute
                    , Maybe.map
                        (\x ->
                            String.fromInt x
                                ++ (if format == Rough then
                                        " seconds"

                                    else
                                        "s"
                                   )
                        )
                        maybeSecond
                    ]
                        |> List.filterMap identity
            in
            case format of
                Rough ->
                    segments
                        |> List.head
                        |> Maybe.withDefault "---"

                _ ->
                    segments
                        |> String.join " "
