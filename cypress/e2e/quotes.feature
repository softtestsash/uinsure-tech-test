Feature: Quotes

    Scenario: Retrieve quotes using various details

        Given I am logged in
        And I am on the recent activity page
        When I type "UINH0021475" in to the reference field
        And I click Search
        # Then I am shown a result with policy number ''