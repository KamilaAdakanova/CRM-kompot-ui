import BasePage from "../support/page_object/basePage";
import LoginPage from "../support/page_object/loginPage";
const basePage = new BasePage()
const loginPage = new LoginPage()

describe('Base Page', function () {
    it('Login button', function () {
        cy.visit('/')
        basePage.loginBtn().click()
        loginPage.loginHeader().should('be.visible', 'Welcome back!')
    });

    // it("Base page navbar links", function () {
    //   navigateTo.basePageIsOpen()
    //   navigateTo.clientPageIsOpen()
    //   navigateTo.orderPageIsOpen()
    //   // navigateTo.estimatesPageIsOpen()
    //   // cy.wait(500)
    //   // navigateTo.invoicesPageIsOpen()
    //   // navigateTo.paymentsPageIsOpen()

})
