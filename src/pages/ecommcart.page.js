const ActionHelper = require('../helpers/actionHelpers');
const ecommCartScreen = require('../screens/native/android/ecommCart.screen.js');
require('chai').should();

class EcommCartPage {

    waitForCartPageLoaded() {
        ActionHelper.waitForElement(ecommCartScreen.title, 10);
        ActionHelper.getText(ecommCartScreen.title).should.equal('YOUR CART');
    }

    verifyItemName() {
        return ActionHelper.getText(ecommCartScreen.itemName).should.equal('Sauce Labs Backpack');
    }

    verifyItemPrice() {
        return ActionHelper.getText(ecommCartScreen.itemPrice).should.equal('$29.99');
    }

    clickCheckoutButton() {
        ActionHelper.waitForElement(ecommCartScreen.checkoutButton, 10);
        ActionHelper.click(ecommCartScreen.checkoutButton);
        ActionHelper.pause(5);
    }
}

module.exports = EcommCartPage;