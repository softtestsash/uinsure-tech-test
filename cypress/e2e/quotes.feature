Feature: Quotes

    Scenario Outline: Retrieve quotes using <field> search criteria

        Given I am logged in
        And I am on the recent activity page
        When I type "<value>" in to the <field> field
        And I click Search and wait for the results to load
        Then I am shown a result with "<value>"
        Examples:
            | value        | field     |
            | UINH53833618 | reference |
            | 33618        | reference |
            | Christopher  | name      |
            | CB6 1AN      | postcode  |

    Scenario: Retrieve quotes using policy, name and postcode fields

        Given I am logged in
        And I am on the recent activity page
        When I type "UINH53833618" in to the reference field
        And I type "Julia Bentkey" in to the name field
        And I type "CB6 1AN" in to the postcode field
        And I click Search and wait for the results to load
        Then I am shown a result with "UINH53833618"
        And I am shown a result with "Julia Bentkey"
        And I am shown a result with "CB6 1AN"