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

Given('the user is on the adviser platform login page', () => {
    cy.visit('/');
    cy.url().should('include', 'quotes.test');
});

When('the user enters valid details and logs in', () => {
    loginPage.email.type(loginDetails.emailAddress);
    loginPage.password.type(loginDetails.password);
    loginPage.signInButton.click();
    homePage.buildingsAndContents.should('be.visible');
});

Then('the user can navigate to recent activity', () => {
    cy.visit('https://quotes.test.uinsure.co.uk/retrieve-quote');
    quotesPage.quoteReference.should('be.visible');
});
