class ecommHomeScreen{

    constructor() {
        this.menuButton = '~test-Menu';
        this.cartButton = '~test-Cart';
        this.firstItem = '//android.widget.TextView[@text="Sauce Labs Backpack"]';
    }
    
    addItemToCart(n) {
        return `(//android.widget.TextView[@text="ADD TO CART"])[${n}]`;
    }
}

module.exports = new ecommHomeScreen();