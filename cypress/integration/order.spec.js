import ClientPage from "../support/page_object/clientPage";
import {client} from '../fixtures/example.json';
import OrderPage from "../support/page_object/orderPage";
import {navigateTo} from "../support/page_object/navigationPage";

const clientPage = new ClientPage();
const orderPage = new OrderPage();

describe('ORDER', () => {
    before('login', () => {
        cy.login()
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    });
    it('Order created from client profile ', () => {
        cy.createClient();
        orderPage.addOrderFromClientProfile().click()
        orderPage.createOrderFromClient(client.firstName, client.lastName);
        cy.get('[data-testid="CalendarIcon"]').first().click()
        cy.get('').find('button').contains('14')
    });
})






})
