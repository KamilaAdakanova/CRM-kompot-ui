

export class LoginPage{
    loginHeader = ()=>  cy.get('.css-zq6grw')
    emailField = ()=> cy.get('[id="email"]');
    passwordField = ()=> cy.get('[id="password"]');
    submitBtn = ()=> cy.get('[type="submit"]');
    headerBase = ()=> cy.get('.col-md-8');
}


export default LoginPage;