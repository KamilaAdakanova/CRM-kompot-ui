export default class LeftSideBarPage {


    listOfEntities = () => cy.get('.css-1jxmrhb')


    leftSideBarForClient(entity){
        const entities = ['Orders', 'Estimates', 'Invoices', 'Payments', 'Calls', 'Messages', 'Attachments', 'Purchase Orders', 'Notes' ];
        for (let i = 0; i < entities.length; i++) {
            this.listOfEntities().contains(entities[i])
        }
        this.listOfEntities().contains(entity).click();
    }





}