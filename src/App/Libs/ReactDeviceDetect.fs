// ts2fable 0.6.1
module rec ReactDeviceDetect

open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props

let [<Import("*","react-device-detect")>] exports: React_device_detect.IExports = jsNative

module React_device_detect =

    type [<AllowNullLiteral>] IExports =
        abstract isBrowser: bool
        abstract isMobile: bool
        abstract isTablet: bool
        abstract isSmartTV: bool
        abstract isConsole: bool
        abstract isWearable: bool
        abstract isMobileSafari: bool
        abstract isChromium: bool
        abstract isMobileOnly: bool
        abstract isAndroid: bool
        abstract isWinPhone: bool
        abstract isIOS: bool
        abstract isChrome: bool
        abstract isFirefox: bool
        abstract isSafari: bool
        abstract isOpera: bool
        abstract isIE: bool
        abstract isEdge: bool
        abstract isYandex: bool
        abstract osVersion: string
        abstract osName: string
        abstract fullBrowserVersion: string
        abstract browserVersion: string
        abstract browserName: string
        abstract mobileVendor: string
        abstract mobileModel: string
        abstract engineName: string
        abstract engineVersion: string
        abstract getUA: string

    type Props =
        | ViewClassName of string
        | Style of CSSProp list
        | Children of ReactElement
        | RenderWithFragment of bool

    type CustomViewProps =
        | ViewClassName of string
        | Style of CSSProp list
        | Children of ReactElement
        | RenderWithFragment of bool
        | Condition of bool

    let inline browserView (props: Props list) : ReactElement =
        ofImport "BrowserView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline mobileView (props: Props list) : ReactElement =
        ofImport "MobileView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline androidView (props: Props list) : ReactElement =
        ofImport "AndroidView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline iEView (props: Props list) : ReactElement =
        ofImport "IEView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline iOSView (props: Props list) : ReactElement =
        ofImport "IOSView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline tabletView (props: Props list) : ReactElement =
        ofImport "TabletView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline winPhoneView (props: Props list) : ReactElement =
        ofImport "WinPhoneView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline mobileOnlyView (props: Props list) : ReactElement =
        ofImport "MobileOnlyView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline smartTVView (props: Props list) : ReactElement =
        ofImport "SmartTVView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline consoleView (props: Props list) : ReactElement =
        ofImport "ConsoleView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline wearableView (props: Props list) : ReactElement =
        ofImport "WearableView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []

    let inline customView (props: CustomViewProps list) : ReactElement =
        ofImport "CustomView" "react-device-detect" (keyValueList CaseRules.LowerFirst props) []
