import {navigateTo} from "../support/page_object/navigationPage";

describe('checking Nav Bars', () => {
    before('login', () => {
        cy.login();
    });
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    });

    it(' Short way to check the top menu', ()=>{
        const topMenu =['Clients', 'Orders', 'Estimates', 'Invoices', 'Payments', 'Schedule']
        topMenu.forEach(el => cy.get(`[href*="/${el.toLowerCase()}"]`)
            .should('be.visible').contains(`${el}`).click()
            .wait(4000).go('back'));

    })
    //
    // it('Logo in NavBar is visible', ()=>{
    //         navigateTo.logoKompot()
    //     }
    // );
    //
    // it('Client Btn in NavBar is clickable', ()=>{
    //         navigateTo.invoicesPageIsOpen()
    //     }
    // );
    //
    // it('Order Btn in NavBar is clickable', ()=>{
    //         navigateTo.orderPageIsOpen()
    //     }
    // );
    //
    // it('Estimates Btn in NavBar is clickable', ()=>{
    //         navigateTo.estimatesPageIsOpen()
    //     }
    // );
    //
    // it('Invoice Btn in NavBar is clickable', ()=>{
    //         navigateTo.invoicesPageIsOpen()
    //     }
    // );
    //
    // it('Payments Btn in NavBar is clickable', ()=>{
    //         navigateTo.paymentsPageIsOpen()
    //     }
    // );
    //
    // it('Schedule Btn in NavBar is clickable', ()=>{
    //         navigateTo.schedulePageIsOpen()
    //     }
    // );




    it('Select Btn in NavBar is clickable', ()=>{
            navigateTo.selectHamburger('Workers')
        }
    );
    it('Search Btn in NavBar is visible', ()=>{
            navigateTo.searchLoupeIcon()
        }
    );

    it('Information Btn in NavBar is clickable', ()=>{
            navigateTo.informationIcon()
        }
    );
    it('Settings Btn in NavBar is clickable', ()=>{
            navigateTo.settingsIcon()
        }
    );

    it('Notification Btn in NavBar is clickable', ()=>{
            navigateTo.notificationIcon()
        }
    );
    it('AvatarCircle Btn in NavBar is clickable', ()=>{
            navigateTo.avatarCircleIcon('Company Account')
        }
    );


})