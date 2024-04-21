import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';
import homePage from '../../support/pageObjects/home.page';
import loginPage from '../../support/pageObjects/login.page';
import quotesPage from '../../support/pageObjects/quotes.page';

let emailAddress: string;
let password: string;

const loginDetails = {
    emailAddress: 'john.doe@uinsure.co.uk',
    password: Cypress.env('password'),
};

Given('I am on the recent activity page', () => {
    cy.intercept('POST', '**/api/RetrieveQuotes').as('retrieve-quotes')
    cy.visit('https://quotes.test.uinsure.co.uk/retrieve-quote');
    cy.wait('@retrieve-quotes').its('response.statusCode').should('eq', 200)
});

When('I type {string} in to the reference field', (reference) => {
    quotesPage.quoteReference.type(reference)
});

When('I type {string} in to the name field', (name) => {
    quotesPage.quoteName.type(name)
});

When('I type {string} in to the postcode field', (postcode) => {
    quotesPage.quotePostcode.type(postcode)
});

When('I click Search and wait for the results to load', () => {
    cy.intercept('POST', '**/api/RetrieveQuotes').as('retrieve-quotes')
    quotesPage.search.click()
    cy.wait('@retrieve-quotes').its('response.statusCode').should('eq', 200)

});

When('I reset the search criteria', () => {
    quotesPage.reset.click()
});

Then(/^I am (not )?shown a result with "(.+)"/, (notShown, expectedValue) => {
    if (notShown) {
        quotesPage.quoteResult.should('not.contain', expectedValue)
    } else {
        quotesPage.quoteResult.contains(expectedValue)
    }

});
Then('the search fields are cleared', () => {
    quotesPage.quoteReference.should('not.contain.text')
    quotesPage.quoteName.should('not.contain.text')
    quotesPage.quotePostcode.should('not.contain.text')
});