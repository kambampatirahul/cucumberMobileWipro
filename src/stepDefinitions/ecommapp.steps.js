const {Given, When, Then} = require('cucumber');

const EcommAppPage = require('../pages/ecommApp.page.js');
const EcommHomePage = require('../pages/ecommHome.page.js');
const EcommCartPage = require('../pages/ecommcart.page.js');
const EcommInformationPage = require('../pages/ecommInformation.page.js');
const EcommOrderConfirmationPage = require('../pages/ecommOrderConfirmation.page.js');

const ecommAppPage = new EcommAppPage();
const ecommHomePage = new EcommHomePage();
const ecommCartPage = new EcommCartPage();
const ecommInformationPage = new EcommInformationPage();
const ecommOrderConfirmationPage = new EcommOrderConfirmationPage();

Given(/^I launch the ecomm app$/, () => {
    ecommAppPage.launchApp();
});

When(/^I login with valid credentials$/, () => {
    ecommAppPage.enterUsername('standard_user');
    ecommAppPage.enterPassword('secret_sauce');
});

When(/^I click on Login button$/, () => {
    ecommAppPage.clickLoginButton();
});

Then(/^I should see the home page$/, () => {
    ecommHomePage.waitforHomePageLoaded();
});

When(/^I add the first item to cart$/, () => {
    ecommHomePage.addfirstItemToCart();
});

When(/^I tap on cart button$/, () => {
    ecommHomePage.tapOnCartButton();
});

Then(/^I should see the cart page$/, () => { 
    ecommCartPage.waitForCartPageLoaded();
});

Then(/^Verify details of the item in cart$/, () => {
    ecommCartPage.verifyItemName();
    ecommCartPage.verifyItemPrice();
});

When(/^I tap on Checkout button$/, () => {
    ecommCartPage.clickCheckoutButton();
});

Then(/^I should see the checkout page$/, () => {
    ecommInformationPage.waitForInformationPageLoaded();
});

When(/^I enter first name as "([^"]*)"$/, (firstName) => {
    ecommInformationPage.enterFirstName(firstName);
});

When(/^I enter last name as "([^"]*)"$/, (lastName) => {
    ecommInformationPage.enterLastName(lastName);
});

When(/^I enter postal code as "([^"]*)"$/, (postalCode) => {
    ecommInformationPage.enterPostalCode(postalCode);
});

When(/^I tap on Continue button$/, () => {
    ecommInformationPage.clickContinueButton();
});

Then(/^I should see the overview page$/, () => {
    ecommInformationPage.waitForOverviewPageLoaded();
});

When(/^I tap on Finish button$/, () => {
    ecommInformationPage.clickFinishButton();
});

Then(/^I should see the order confirmation page$/, () => {
    ecommOrderConfirmationPage.waitForOrderConfirmationPageLoaded();
});

Then(/^I verify the order confirmation message$/, () => {
    ecommOrderConfirmationPage.VerifyOrderConfirmationMessage();
});
