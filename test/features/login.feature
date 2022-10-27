Feature: The Internet Guinea Pig Website

  # Scenario Outline: As a user, I can create quick notes
  #   When I create a quick note <note>
  #   Then The note is created
  #   Examples:
  #     | note    |
  #     | Value 1 |
  #     | Value 2 |

  Scenario: As a user, I can create detailed note
    Given I open note page
    When I create a note
      | title        | category |
      | Hello world! | Work     |
