class ecommOrderConfirmationScreen{

    constructor() {
        this.title = '//android.widget.TextView[@text="CHECKOUT: COMPLETE!"]';
        this.orderConfirmationMessage = '//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]';
    }

}

module.exports = new ecommOrderConfirmationScreen();