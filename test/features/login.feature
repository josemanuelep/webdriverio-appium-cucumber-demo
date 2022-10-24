Feature: The Internet Guinea Pig Website

  Background:
    Given Instance de enviroment

  Scenario Outline: As a user, I can log into the secure area
    Given I create a quick note <note>
    Then The note is created

    Examples:
      | note    |
      | Value 1 |
      | Value 2 |
      | 1235535 |

