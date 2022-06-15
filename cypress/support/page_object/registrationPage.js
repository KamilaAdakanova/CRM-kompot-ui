export default class RegistrationPage{

    emailField = () => cy.get('#email');
    passwordField = () => cy.get('#password');
    createBtn = () => cy.get('button[type="submit"]')
    fullNameField = () => cy.get('#fullName');
    phoneNumber = () => cy.get('#phone_number');
    companyField = () => cy.get('#companyName');
    primaryIndustryField = () => cy.get('#primaryIndustry-label');
    companySizeField = () => cy.get('#companySize-label');
    companySizeList = () => cy.get('[data-popper-placement="bottom"]')

    companySizeSelected(quantity){
        this.companySizeField().click()
        const sizeOfPeople = ['Only me', '2-10 people', '11-20 people', '20+ people'];
        for(let i = 0; i< sizeOfPeople.length; i++){
            this.companySizeList().contains(sizeOfPeople[i])
        }
        this.companySizeList().contains(quantity).click()// loop
    }



}