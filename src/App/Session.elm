module App.Session exposing (Session, mapProfile)

import App.PackageInfo as PackageInfo
import App.Profile as Profile
import App.ReferenceServer as ReferenceServer
import Browser.Navigation
import CssModules
import Url


type alias Session =
    { profile : Profile.Profile
    , servers : List ReferenceServer.ReferenceServer
    , cssModules : CssModules.CssModules
    , packageInfo : PackageInfo.PackageJson
    , navKey : Browser.Navigation.Key
    , url : Url.Url
    , warnings : List String
    }


mapProfile : (Profile.Profile -> Profile.Profile) -> Session -> Session
mapProfile f session =
    { session | profile = f session.profile }
