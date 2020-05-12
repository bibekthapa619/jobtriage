Feature: signup a user
  As a user
  I want to signup and create my account

  @userSignup
  Scenario: signup a user
    Given the user has browsed to the homepage
    When the user browses to the signup page using the webUI
    And the user signs up with name "user0", email "user0@gmail.com" password "password" and confirmation password "password" using the webUI
    Then the user should be redirected to the dashboard page
