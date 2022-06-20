export class  BasePage{

    loginBtn = () => cy.get('[data-qa="login"]');
    registrationBtn = () => cy.get('[data-qa="register"]')
    logoKompot= () => cy.get('#logo');






}

export default BasePage;