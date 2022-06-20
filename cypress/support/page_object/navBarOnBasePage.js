export default class NavBarOnBasePage {

topMenuOnBasePage(){
    const topMenu = ["Pricing", "Industries", "Support", ]
    topMenu.forEach((el) => cy.get(`[href="/i/${el.toLowerCase()}"]`)
        .should("be.visible").should("have.text", `${el}`).click()
        .location("pathname").should("eq", `/i/${el.toLowerCase()}`).go("back"));
}

  pricingPageIsOpened() {
      cy.get('[href="/i/pricing"]').click({force: true})
      //cy.get('h1')
      cy.get('div#root').find('h1').eq(0).should('have.text', 'Pricing')
  }
  //cy.get('div#root').children('div').children('div').children('div').children().eq(0)
    //
//('h1').should('have.text', 'Pricing')
  industriesPageIsOpened(){

  }

  supportPageIsOpened(){

  }



  loginPageIsOpened(){
cy.get('[data-qa="login"]').click()
    .go("back").wait(500)
  }

  signUpPageIsOpened(){
      cy.get('[data-qa="register"]').first().click()
          .go("back").wait(500)

  }

  checkTopMenuOnBasePage(){
    this.topMenuOnBasePage()
      this.loginPageIsOpened()
      this.signUpPageIsOpened()
  }


}