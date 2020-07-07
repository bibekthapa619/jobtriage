Feature: Personal pitch
  As a user
  I want to add my personal pitch

  Background:
    Given the user has signed up with name "user1", email "user1@gmail.com" password "password"
    And the user has logged in with email "user1@gmail.com" and password "password"
    And the user has browsed to the self-analysis page

  @editPersonalPitch
  Scenario Outline: edit personal pitch
    Given the user has opened pitch edit form using the webUI
    When the user submits a personal pitch with text "<pitch>"
    Then the personal pitch with the text "<pitch>" should be visible on the webUI
    Examples:
      | pitch                         |
      | Hello, I'm a SQA engineer     |
      | Hello, I'm a Software Analyst |

