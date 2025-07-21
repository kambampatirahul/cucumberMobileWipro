class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '16'; // pass the platform version
    }

    static appName() {
        return 'Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
