Feature: Personal pitch
  As a user
  I want to add my personal pitch

  Background:
    Given the user has signed up with name "user1", email "user1@gmail.com" password "password"
    And the user has logged in with email "user1@gmail.com" and password "password"
    And the user has browsed to the selfanalysis page

  @addPersonalPitch
  Scenario Outline: add a personal pitch
    Given the user has clicked on edit pitch button using webUI
    And the pitch textfield has appeared in the webUI
    When the user submits a personal pitch "<pitch>"
    Then the personal pitch field should show the text "<pitch>"
    Examples:
      | pitch                         |
      | Hello, I'm a SQA engineer     |
      | Hello, I'm a Software Analyst |

