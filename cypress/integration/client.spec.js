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

    it('Client page is open', () => {
        navigateTo.clientPageIsOpen()
    });

    it('Create Client Button opens new window ', () => {
        clientPage.createClientBtn().click({force: true})
        clientPage.clientHeader()
    });

    it('Create New Client', () => {
        cy.createClient();

    })

        it.only('flag code of country ', function () {

            navigateTo.clientPageIsOpen()
            clientPage.createClientBtn().click({force: true});
            clientPage.clientHeader();
            clientPage.firstNameField({force: true}).type(client.firstName);
            clientPage.lastNameField().type(client.lastName);
            clientPage.companyNameField().type(client.company);

            const countryArray = []
            cy.get('button[aria-label="Select country"]').click();
            cy.get('ul[role="menu"]').
            children().each((el) => {
                let fullCountryName = el[0].innerText.split('\n')[0]
                let countryCode = el[0].innerText.split('\n')[1]
                let shortCountryName = el[0].dataset.countryCode
                //console.log({shortCountryName,fullCountryName,countryCode})
                countryArray.push({fullCountryName, shortCountryName, countryCode})
                /*console.log(fullCountryName)
                console.log(el[0].dataset.countryCode)
                console.log(el[0].innerText.split('\n'))*/
            })
            console.log(countryArray)
            cy.writeFile('flag.json', countryArray)
        })

    it('Bottom Cancel creating new client', ()=>{
        navigateTo.clientPageIsOpen()
        clientPage.createClientBtn().click({force: true})
        clientPage.firstNameField().type(client.firstName);
        clientPage.lastNameField().type(client.lastName);
        clientPage.cancelBtnField().click()
        clientPage.clientHeader()
    })

    it('Client Profile contains client info and leftSideBar', () =>{
        cy.createClient();
        leftSideBar.leftSideBarForClient('Orders');
    })

    it('Checking Cells and Row of created client', ()=>{
        cy.createClient();
        navigateTo.clientPageIsOpen()
        clientPage.clientCreatedCellsRow()
    })

});
