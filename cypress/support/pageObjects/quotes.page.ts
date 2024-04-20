class Quotes {
    get quoteReference() {
        return cy.get('[data-testid="policy-number"]');
    }
    get quoteName() {
        return cy.get('[data-testid="policy-name"]');
    }
    get quotePostcode() {
        return cy.get('[data-testid="policy-postcode"]');
    }
    get search() {
        return cy.get('[data-testid="filter-button"]').click();
    }

    get quotesWait() {
         cy.intercept('POST', '**/api/RetrieveQuotes')
        return cy.wait('@retrieve-quotes')//eq 200 response
    }
}

export default new Quotes();