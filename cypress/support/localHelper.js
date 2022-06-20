import NavBarOnBasePage from "./page_object/navBarOnBasePage";

const navBarOnBasePage = new NavBarOnBasePage()


Cypress.Commands.add('navbarBase', () =>{
    navBarOnBasePage.topMenuOnBasePage()
    navBarOnBasePage.loginPageIsOpened()
    navBarOnBasePage.signUpPageIsOpened()
})