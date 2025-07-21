class ecommInformationScreen{

    constructor() {
        this.title = '//android.widget.TextView[@text="CHECKOUT: INFORMATION"]';
        this.firstNameTextField = '~test-First Name';
        this.lastNameTextField = '~test-Last Name';
        this.postalCodeTextField = '~test-Zip/Postal Code';
        this.continueButton = '~test-CONTINUE';

        this.overviewTitle = '//android.widget.TextView[@text="CHECKOUT: OVERVIEW"]';
        this.finishButton = '~test-FINISH';
    }

}

module.exports = new ecommInformationScreen();