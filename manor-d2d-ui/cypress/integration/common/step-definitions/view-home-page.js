import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import * as homePage from '../../page-objects/home-page';

Given(/^the User launches the home Page$/, () => {
    cy.visit("http://localhost:3000/");
});

Then(/^the streets database is displayed$/, () => {
    cy.get(homePage.streetsDatabase).should('be.visible')
})