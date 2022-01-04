module App.RandomEventRewardTests exposing (suite)

import App.RandomEventReward exposing (nextResetAt)
import App.ReferenceServer exposing (ReferenceServer, TzOffset(..))
import Expect
import Test exposing (..)
import Time exposing (Month(..), customZone, utc)
import Time.Extra exposing (..)


testSameDayReset : Int -> Time.Zone -> Expect.Expectation
testSameDayReset serverTz clientTz =
    nextResetAt
        (partsToPosix clientTz (Parts 2022 Jan 1 3 2 1 9))
        (ReferenceServer "" (TzOffset serverTz) "" "")
        |> posixToParts clientTz
        |> Expect.equal (Parts 2022 Jan 1 4 0 0 0)


suite : Test
suite =
    describe "module App.RandomEventReward"
        [ describe "App.RandomEventReward.nextResetAt"
            [ test "returns next reset time, both server and client in UTC" <|
                \_ ->
                    testSameDayReset 0 utc
            , test "returns next reset time, both server and client in UTC+08:00 (Asia server, China)" <|
                \_ ->
                    testSameDayReset 8 (customZone (8 * 60) [])
            , test "returns next reset time, both server and client in UTC-05:00 (America server)" <|
                \_ ->
                    testSameDayReset -5 (customZone (-5 * 60) [])
            , test "returns next reset time, server in UTC+08:00 and client in UTC+09:00" <|
                \_ ->
                    let
                        clientTz =
                            customZone (9 * 60) []
                    in
                    nextResetAt
                        (partsToPosix clientTz (Parts 2022 Jan 1 4 2 8 20))
                        (ReferenceServer "" (TzOffset 8) "" "")
                        |> posixToParts clientTz
                        |> Expect.equal (Parts 2022 Jan 1 5 0 0 0)
            , test "returns next reset time, server in UTC+08:00 and client in UTC-05:00" <|
                \_ ->
                    let
                        clientTz =
                            customZone (-5 * 60) []
                    in
                    nextResetAt
                        (partsToPosix clientTz (Parts 2022 Jan 1 0 1 2 3))
                        (ReferenceServer "" (TzOffset 8) "" "")
                        |> posixToParts clientTz
                        |> Expect.equal (Parts 2022 Jan 1 15 0 0 0)
            , test "returns next reset time, with the given date is over the day's reset time" <|
                \_ ->
                    let
                        clientTz =
                            customZone (9 * 60) []
                    in
                    nextResetAt
                        (partsToPosix clientTz (Parts 2022 Jan 1 5 0 0 0))
                        (ReferenceServer "" (TzOffset 8) "" "")
                        |> posixToParts clientTz
                        |> Expect.equal (Parts 2022 Jan 2 5 0 0 0)
            ]
        ]
