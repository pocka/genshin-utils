module Query exposing (Query, QueryProcessor, has, parseQueryString, processQueries)

{-| We need this hand-made parsing mechanism since Elm cannot parse common query strings:
skips query without value, requires hack to parse only queries, etc...
-}

import Url


{-| Represents a single query string.
-}
type alias Query =
    ( String, Maybe String )


{-| -}
type alias QueryProcessor a =
    List Query -> Maybe a


parseQuery : String -> Maybe Query
parseQuery query =
    let
        parts =
            String.split "=" query
    in
    case parts of
        [] ->
            Nothing

        key :: rest ->
            Url.percentDecode key
                |> Maybe.map
                    (\k ->
                        ( k
                        , case rest of
                            [] ->
                                Nothing

                            value :: _ ->
                                Url.percentDecode value
                        )
                    )


{-| Parse Url.query and returns a list of queries.
-}
parseQueryString : String -> List Query
parseQueryString qs =
    qs
        |> String.split "&"
        |> List.map parseQuery
        |> List.filterMap identity


{-| Runs processors on queries, then returns the first succesfull result.
-}
processQueries : List (QueryProcessor a) -> List Query -> Maybe a
processQueries processors queries =
    case processors of
        [] ->
            Nothing

        processor :: remains ->
            case processor queries of
                Just result ->
                    Just result

                Nothing ->
                    processQueries remains queries


has : String -> a -> QueryProcessor a
has key a queries =
    if List.any (\q -> Tuple.first q == key) queries then
        Just a

    else
        Nothing
