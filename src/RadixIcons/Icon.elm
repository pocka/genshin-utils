module RadixIcons.Icon exposing (Icon(..), icon)

import Html exposing (Attribute, Html, node)


type Icon
    = Timer
    | Backpack
    | Check
    | CrossCircled
    | DotsVertical
    | Trash
    | Pencil2


toString : Icon -> String
toString kind =
    case kind of
        Timer ->
            "timer"

        Backpack ->
            "backpack"

        Check ->
            "check"

        CrossCircled ->
            "cross-circled"

        DotsVertical ->
            "dots-vertical"

        Trash ->
            "trash"

        Pencil2 ->
            "pencil2"


icon : Icon -> List (Attribute msg) -> Html msg
icon kind attrs =
    node ("radix-icons-" ++ toString kind) attrs []
