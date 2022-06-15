

export class NavigationPage {

    logoKompot= () => cy.get('#logo');

    clientPageIsOpen() {
        cy.get('[href="/client"]').click({force: true})
        cy.get('[data-qa="page-title"]').should('contain', 'Clients')
        cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
    }

    orderPageIsOpen() {
        cy.get('[href="/order"]').click()
        cy.get('[data-qa="page-title"]').should('contain', 'Orders')
        cy.get('[type="button"]').should('contain', 'Create Order')
    }

    estimatesPageIsOpen(){
        cy.get('[href="/estimate"]').click()
        cy.get('[data-qa="page-title"]').should('contain', 'Estimates')
        cy.get('[type="button"]').should('contain', 'New Estimate')
    }

    invoicesPageIsOpen(){
        cy.get('[href="/invoice"]').click()
        cy.get('[data-qa="page-title"]').should('contain', 'Invoices')
        cy.get('[type="button"]').should('contain', 'Create Invoice')
    }

    paymentsPageIsOpen(){
        cy.contains('Payments').click()
        cy.get('[data-qa="page-title"]').should('contain', 'Payments')
        cy.get('[type="button"]').should('contain', 'Create Payment')
    }

    schedulePageIsOpen(){
        cy.get('[href="/schedule/calendar"]').click()
        cy.get('[class="fs-5 fw-bolder text-black"]').should('contain', 'Schedule')
    }

    selectHamburger(hamburger) {
        cy.get('[alt="dashIcon"]').click()
        const hamburgers = ['Workers', 'Addresses', 'Vendors', 'Products', 'Purchase Orders', 'Absences'];
        for (let i = 0; i < hamburgers.length; i++){

            cy.get('[class="ant-dropdown ant-dropdown-placement-bottomLeft "]').contains(hamburgers[i])
        }
        cy.get('[class="ant-dropdown ant-dropdown-placement-bottomLeft "]').contains(hamburger).click()
    }

    searchLoupeIcon = () => cy.get('[alt="Search"]');


    informationIcon(){
        cy.get('[alt="Docs"]').click()
        cy.get('[data-qa="page-title"]').should('be.visible', 'Information')
    }

    settingsIcon(){
        cy.get('[data-qa="settings-icon"]').click()
        cy.get('[class="col-9"]').should('be.visible', 'Company Information')
    }

    notificationIcon(){
        cy.get('[data-testid="NotificationsNoneIcon"]').click()
        cy.get('[data-qa="page-title"]').should('be.visible', 'Notifications')
    }

    avatarCircleIcon(menu){
        cy.get('[class="rounded-circle "]').click({force:true})
        const sideMenu= ['Profile', 'Company Account', 'Logout'];
        for(let i = 0; i < sideMenu.length; i++){
            cy.get('[data-menu-list="true"]').contains(sideMenu[i])
        }
        cy.get('[data-menu-list="true"]').contains(menu).click({force:true})
    }






};


export const navigateTo = new NavigationPage()



