export default class OrderPage{

    addOrderFromClientProfile = () => cy.get('[id="orders"]').parent('div').find('[role="button"]')
    createOrderFromClient(firstName, lastName){
        this.addOrderFromClientProfile().click()}
}