// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from './page_object/loginPage'
import BasePage from "./page_object/basePage"
import {navigateTo} from "./page_object/navigationPage";
import {client} from "../fixtures/example.json";
import ClientPage from "./page_object/clientPage";
import RegistrationPage from "./page_object/registrationPage";

const basePage = new BasePage();
const loginPage = new LoginPage();
const clientPage = new ClientPage()
const registrationPage = new RegistrationPage()

Cypress.Commands.add('registration', function (path) {
    cy.visit('/')
    basePage.registrationBtn().first().click()
    registrationPage.emailField().type('kadakanova2@gmail.com')
    registrationPage.passwordField().type('Qwerty123')
    registrationPage.createBtn().click()
    registrationPage.fullNameField().type()
    registrationPage.phoneNumber().type(1234567765)
    registrationPage.createBtn().click()
    registrationPage.companyField().type('Happy')
    registrationPage.primaryIndustryField('JH')
    registrationPage.companySizeSelected('2-10 people')
    registrationPage.createBtn().click()
});


Cypress.Commands.add('login', function (path){
    cy.visit('/').wait(1000)
    basePage.loginBtn().click()
    loginPage.emailField().type('test@gmail.com').wait(2000)
    loginPage.passwordField().type('Qwerty12')
    loginPage.submitBtn().contains('Log in').click()
    // loginPage.headerBase().should('be.visible', 'Reports')
})

Cypress.Commands.add('createClient', () =>{
    navigateTo.clientPageIsOpen();
    clientPage.createClientBtn().click({force: true});
    clientPage.clientHeader();
    clientPage.firstNameField({force: true}).type(client.firstName);
    clientPage.lastNameField().type(client.lastName);
    clientPage.companyNameField().type(client.company);
    // clientPage.selectCountryForPhoneNumber('United States');
    // clientPage.phoneNumberField().type(client.phoneNumber);
    // clientPage.extField().type(client.phoneExt)
    //clientPage.addPhoneNumberLink().click();
    //clientPage.phoneNumberField2().type(client.phoneNumber)
    clientPage.emailField().type(client.email);
    // clientPage.addressField().type(client.address);
    // clientPage.unitField().type(client.unit);
    // clientPage.cityField().type(client.city);
    // clientPage.selectState(client.state);
    // clientPage.zipCodeField().type(client.zip);
    clientPage.saveBtn().click({force: true});
    clientPage.titleOfCreatedClient().should('be.visible', `${client.firstName} ${client.lastName}`)

})
