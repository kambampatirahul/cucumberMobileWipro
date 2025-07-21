const ActionHelper = require('../helpers/actionHelpers');
const ecommInformationScreen = require('../screens/native/android/ecommInformation.screen.js');
require('chai').should();

class EcommInformationPage {

    waitForInformationPageLoaded() {
        ActionHelper.waitForElement(ecommInformationScreen.title, 10);
        ActionHelper.getText(ecommInformationScreen.title).should.equal('CHECKOUT: INFORMATION');
    }

    enterFirstName(firstName) {
        ActionHelper.sendText(ecommInformationScreen.firstNameTextField, firstName);
    }

    enterLastName(lastName) {
        ActionHelper.sendText(ecommInformationScreen.lastNameTextField, lastName);
    }

    enterPostalCode(postalCode) {
        ActionHelper.sendText(ecommInformationScreen.postalCodeTextField, postalCode);
    }

    clickContinueButton() {
        ActionHelper.waitForElement(ecommInformationScreen.continueButton, 10);
        ActionHelper.click(ecommInformationScreen.continueButton);
        ActionHelper.pause(5);
    }

    waitForOverviewPageLoaded() {
        ActionHelper.waitForElement(ecommInformationScreen.overviewTitle, 10);
        ActionHelper.getText(ecommInformationScreen.overviewTitle).should.equal('CHECKOUT: OVERVIEW');
    }

    clickFinishButton() {
        ActionHelper.waitForElement(ecommInformationScreen.finishButton, 10);
        ActionHelper.click(ecommInformationScreen.finishButton);
        ActionHelper.pause(5);
    }

}
module.exports = EcommInformationPage;