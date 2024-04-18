class Homepage {
    get buildingsAndContents() {
        return cy.get('[data-testid="qt-homeinsurance-bc"]');
    }
    get recentActivityTab() {
        return cy.get('[data-testid="nav-drawer-item-recent-activity-label"]');
    }
}

export default new Homepage();
