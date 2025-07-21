class ecommCartScreen{

    constructor() {
        this.title = '//android.widget.TextView[@text="YOUR CART"]';
        this.itemName = '//android.view.ViewGroup[@content-desc="test-Description"]//android.widget.TextView[1]';
        this.itemPrice = '(//android.view.ViewGroup[@content-desc="test-Price"]//android.widget.TextView)[1]';
        this.checkoutButton = '~test-CHECKOUT';
    }

}

module.exports = new ecommCartScreen();