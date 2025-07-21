const ActionHelper = require('../helpers/actionHelpers');
const ecommAppScreen = require('../screens/native/android/ecomApp.screen.js');
require('chai').should();

class EcommAppPage {

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    enterUsername(username) {
        ActionHelper.waitForElement(ecommAppScreen.usernameTextField, 10);
        ActionHelper.clearText(ecommAppScreen.usernameTextField);
        ActionHelper.sendText(ecommAppScreen.usernameTextField, username);
        ActionHelper.pause(2);
    }

    enterPassword(password) {
        ActionHelper.waitForElement(ecommAppScreen.passwordTextField, 10);
        ActionHelper.clearText(ecommAppScreen.passwordTextField);
        ActionHelper.sendText(ecommAppScreen.passwordTextField, password);
        ActionHelper.pause(2);
    }

    clickLoginButton() {
        ActionHelper.waitForElement(ecommAppScreen.loginButton, 10);
        ActionHelper.click(ecommAppScreen.loginButton);
        ActionHelper.pause(5);
    }

}
module.exports = EcommAppPage;