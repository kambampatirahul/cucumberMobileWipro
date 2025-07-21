const ActionHelper = require('../helpers/actionHelpers');
const ecommOrderConfirmationScreen = require('../screens/native/android/ecommOrderConfirmation.screen.js');
require('chai').should();

class EcommOrderConfirmationPage {

    waitForOrderConfirmationPageLoaded() {
        ActionHelper.waitForElement(ecommOrderConfirmationScreen.title, 10);
        ActionHelper.getText(ecommOrderConfirmationScreen.title).should.equal('CHECKOUT: COMPLETE!');
        ActionHelper.getText(ecommOrderConfirmationScreen.orderConfirmationMessage).should.include('THANK YOU FOR YOU ORDER');
    }

    VerifyOrderConfirmationMessage() {
        ActionHelper.getText(ecommOrderConfirmationScreen.orderConfirmationMessage).should.include('THANK YOU FOR YOU ORDER');
    }

}
module.exports = EcommOrderConfirmationPage;