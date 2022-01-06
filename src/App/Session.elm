module App.Session exposing (Capability(..), Session, capabilityDecoder, mapProfile)

import App.PackageInfo as PackageInfo
import App.Profile as Profile
import App.ReferenceServer as ReferenceServer
import Browser.Navigation
import CssModules
import Json.Decode as Decode
import Url


type Capability
    = Supported
    | NotSupported


capabilityDecoder : Decode.Decoder Capability
capabilityDecoder =
    Decode.bool
        |> Decode.map
            (\b ->
                if b then
                    Supported

                else
                    NotSupported
            )


type alias PlatformCapability =
    { vibrationApi : Capability
    }


type alias Session =
    { profile : Profile.Profile
    , servers : List ReferenceServer.ReferenceServer
    , cssModules : CssModules.CssModules
    , packageInfo : PackageInfo.PackageJson
    , navKey : Browser.Navigation.Key
    , url : Url.Url
    , warnings : List String
    , platformCapability : PlatformCapability
    }


mapProfile : (Profile.Profile -> Profile.Profile) -> Session -> Session
mapProfile f session =
    { session | profile = f session.profile }
