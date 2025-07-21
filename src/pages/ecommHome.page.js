const ActionHelper = require('../helpers/actionHelpers');
const ecommHomeScreen = require('../screens/native/android/ecommHome.screen.js');
require('chai').should();

class EcommHomePage {

    waitforHomePageLoaded() {
        ActionHelper.waitForElement(ecommHomeScreen.menuButton, 10);
        try {
            ActionHelper.isVisible(ecommHomeScreen.menuButton).should.be.true;
        } catch (error) {
            console.error('Home page did not load properly:', error);
            throw new Error('Home page did not load properly');
        }
    }

    addfirstItemToCart() {
        ActionHelper.waitForElement(ecommHomeScreen.addItemToCart(1), 10);
        ActionHelper.click(ecommHomeScreen.addItemToCart(1));
    }

    tapOnCartButton() {
        ActionHelper.waitForElement(ecommHomeScreen.cartButton, 10);
        ActionHelper.click(ecommHomeScreen.cartButton);
        ActionHelper.pause(5);
    }

}
module.exports = EcommHomePage;