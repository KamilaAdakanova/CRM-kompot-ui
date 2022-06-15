import ClientPage from "../support/page_object/clientPage";
import {navigateTo} from "../support/page_object/navigationPage";
import { client } from "../fixtures/example.json"
import LeftSideBarPage from "../support/page_object/leftSideBarPage";

const clientPage = new ClientPage();
const leftSideBar = new LeftSideBarPage();


describe('CLIENT PAGE', () => {
    before('login', () => {
        cy.login();
    });
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    });
    // before('delete oldest the same', ()=> {
    //     return Client.delete({ email: client.client.email });
    // });

    it.skip('Client page is open', () => {
        navigateTo.clientPageIsOpen()
    });

    it.skip('Create Client Button opens new window ', () => {
        clientPage.createClientBtn().click({force: true})
        clientPage.clientHeader()
    });

    it.skip('Create New Client', () => {
        cy.createClient();

    })

    it.skip('Bottom Cancel creating new client', ()=>{
        navigateTo.clientPageIsOpen()
        clientPage.createClientBtn().click({force: true})
        clientPage.firstNameField().type(client.firstName);
        clientPage.lastNameField().type(client.lastName);
        clientPage.cancelBtnField().click()
        clientPage.clientHeader()
    })

    it.skip('Client Profile contains client info and leftSideBar', () =>{
        cy.createClient();
        leftSideBar.leftSideBarForClient('Orders');
    })

    it('Checking Cells and Row of created client', ()=>{
        cy.createClient();
        navigateTo.clientPageIsOpen()
        clientPage.clientCreatedCellsRow()
    })

});
