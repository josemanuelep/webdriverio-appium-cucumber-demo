Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    When I create a quick note <note>
    Then The note is created

    Examples:
      | note    |
      | Value 1 |
      | Value 2 |
      | 1235535 |

