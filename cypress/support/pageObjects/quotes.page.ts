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
        return cy.get('[data-testid="filter-button"]');
    }
    get quoteResult() {
        return cy.get('[data-testid="retrieved-quote"]');
    }
    get reset() {
        return cy.get('[data-testid="reset-filter-button"]');
    }
}

export default new Quotes();