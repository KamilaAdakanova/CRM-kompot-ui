import BasePage from "../support/page_object/basePage";
import LoginPage from "../support/page_object/loginPage";
import NavBarOnBasePage from "../support/page_object/navBarOnBasePage";
const basePage = new BasePage()
const loginPage = new LoginPage()
const navBarOnBasePage = new NavBarOnBasePage()

describe('Base Page', function () {
    it('Login button', function () {
        cy.visit('/')
        basePage.loginBtn().click()
        loginPage.loginHeader().should('be.visible', 'Welcome back!')
    });

    it("Top menu is exist", () => {
        cy.visit('/').wait(1000)
        navBarOnBasePage.checkTopMenuOnBasePage()

    })

    it.only('Pricing Btn is clickable and redirecting to Pricing Page', () =>{
        cy.visit('/')
        navBarOnBasePage.pricingPageIsOpened()

    })




    // it("Test", () => {
    //     cy.visit('/')
    //     const test = []
    //     cy.get("div#top-menu>div").each((el) => {
    //         //console.log(el)
    //         test.push(el.html())
    //         test.push(el.text())
    //     })
    //     console.log(test)
    //     //     //test.length.should("eq", 6)
    //     console.log(test.length / 2)
    //     //     expect(test.length / 2).to.eq(3)
    // })
})
