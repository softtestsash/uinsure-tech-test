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

Given('I am logged in', () => {
    cy.request(
        'POST',
        'https://idp.test.uinsure.co.uk/api/authenticate',
        {
            username: loginDetails.emailAddress,
            password: loginDetails.password,
            returnUrl: "/connect/authorize/callback?client_id=broker-spa&redirect_uri=https%3A%2F%2Fquotes.test.uinsure.co.uk%2Fsignin-callback%2F&response_type=code&scope=openid%20profile%20email%20api%20IdentityServerApi&state=8787dc2137c0404ba369664edf7f03f5&code_challenge=gyd9RhCnLlx7M_OjIb2N-ZI5_0NnqT0lFGk_YYciP5k&code_challenge_method=S256&response_mode=query"
        }
    )
    cy.visit('/')
    cy.url().should('include', 'new-quote');
});