Feature: login a user
  As a user
  I want to login to my dashboard
  So that I can access jobtriage services

  Background:
    Given the user has signed up with name "user1", email "user1@gmail.com" password "password"
    And the user has browsed to the login page

  @validLogin
  Scenario: login a valid user
    When the user logs in with email "user1@gmail.com" and password "password" using the webUI
    Then the user should be redirected to the dashboard page

  @invalidLogin
  Scenario: login with invalid credentials
    When user logs in with following credentials:
      | email    | user1@gmail.com |
      | password | passwo          |
    Then an error message "Authentication failed check input" should be displayed

  Scenario: login with blank email
    When user logs in with following credentials:
      | email    |          |
      | password | password |
    Then an error message "Please fill out this field." should be displayed above the email textfield

  Scenario: login with blank password
    When user logs in with following credentials:
      | email    | user1@gmail.com |
      | password |                 |
    Then an error message "Please fill out this field." should be displayed above the password textfield

