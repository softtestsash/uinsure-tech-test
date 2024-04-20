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
    cy.visit('https://quotes.test.uinsure.co.uk/retrieve-quote');
    quotesPage.quoteReference.should('be.visible');
});

When('I type {string} in to the reference field', (reference) => {
    quotesPage.quoteReference.type(reference)
});

When('I click Search', () => {
    quotesPage.search
});