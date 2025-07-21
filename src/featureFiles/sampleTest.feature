Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario: Launch e-commerce app and Login
    Given I launch the ecomm app
    When I login with valid credentials
    And I click on Login button
    Then I should see the home page 
    When I add the first item to cart
    And I tap on cart button
    Then I should see the cart page
    And Verify details of the item in cart
    When I tap on Checkout button
    Then I should see the checkout page
    When I enter first name as "John"
    And I enter last name as "Doe"
    And I enter postal code as "123456"
    And I tap on Continue button
    Then I should see the overview page
    When I tap on Finish button
    Then I should see the order confirmation page
    And I verify the order confirmation message

  @iosApp
  Scenario: Launch Settings app of an iphone
    Given I launch the settings app of iphone
    Then I should see the general label

  @androidBrowser @iosBrowser
  Scenario: Launch the google url in browser
    Given I launch the google
    Then I verify the title to be Google
