class Quotes {
    get quoteReference() {
        return cy.get('[data-testid="policy-number"]');
    }
    get search() {
        return cy.get('[data-testid="filter-button"]');
    }
}

export default new Quotes();