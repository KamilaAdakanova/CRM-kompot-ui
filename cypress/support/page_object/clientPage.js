import {client} from "../../fixtures/example.json";


export default class ClientPage {


    clientHeader = () => cy.get('[data-qa="page-title"]');
    //cy.get('[class="h2 mb-0 me-5"]')


    createClientBtn = () => cy.get('[data-qa="create-client-button"]');
    firstNameField = () => cy.get('[id="firstName"]');
    lastNameField = () => cy.get('[id="lastName"]');
    companyNameField = () => cy.get('[id="company"]');
    flagClick = () => cy.get('[class="margin"]');
    countryDropdown = () => cy.get('.MuiList-root');
    phoneNumberField = () => cy.get('[id="phone"]');
    extField = () => cy.get('[id="ext"]');
    addPhoneNumberLink = () => cy.get('.ant-btn-link');
    phoneNumberField2 = () => cy.get('[name="phoneNumber2.phone"]');
    emailField = () => cy.get('[id="email"]');
    addressField = () => cy.get('[id="addressLine1"]');
    unitField = () => cy.get('[id="addressLine2"]');
    cityField = () => cy.get('[id="city"]');
    statePlaceholder = () => cy.get('[id="StateClick"]');
    stateDropdown = () => cy.get('[role="listbox"]')
    zipCodeField = () => cy.get('[id="zipCode"]');
    saveBtn = () => cy.get('[type="submit"]');
    cancelBtnField = () => cy.get('.css-1ds1k2g');
    titleOfCreatedClient = () => cy.get('[data-qa="page-title"]');
    //cy.get('[class="h2 mb-0 me-5"]')

    clientDetails = () => cy.get('[id="clientDetails"]');
    editIconPen = () => cy.get('[data-testid="EditIcon"]');
    code = () => cy.get('[class="pe-4"]').first();
    companyName = () => cy.get('[class="pe-4"]').second();
    phoneNumber = () => cy.get('[class="pe-4"]').third();
    phoneNumber2 = () => cy.get('[class="pe-4"]').contains('Pnone2:');
    email = () => cy.get('[class="pe-4"]').contains('Email:');
    paid = () => cy.get('[class="pe-4"]').contains('Paid:');
    due = () => cy.get('[class="pe-4"]').contains('Due:');
    defaultAddressHeader = () => cy.get('[id="clientAddress"]');
    financeHeader = () => cy.get('[id="clientFinance"]');


    selectState(state) {
        this.statePlaceholder().click();
        const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
            'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
            'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
            'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
            'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        for (let i = 0; i < states.length; i++) {
            this.stateDropdown().contains(states[i])
        }
        this.stateDropdown().contains(state).click();

    }
    //
    // selectCountryForPhoneNumber(country){
    //     this.flagClick().click();
    // cy.get('.MuiList-root').then(function($els)=>{
    //     let texts = Array.from($els, el => el.innerText);
    //     expect(texts).to.eql(example.selectCountry)
    //     }
    //
    //     )
    // }

    selectCountryForPhoneNumber(country){
        this.flagClick().click({multiple:true});
        const countries = ['Afghanistan', 'Albania', 'Andorra', 'Anguilla', 'Antigua and Barbuda',
            'Argentina', 'Armenia', 'Aruba', 'Austria', 'Azerbaijan', 'Bahamas', 'Bangladesh',
            'Barbados', 'Belarus', 'Belgium', 'Belize', 'Bermuda', 'Bhutan', 'Bolivia',
            'Bosnia and Herzegovina', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Cambodia', 'Canada',
            'Caribbean Netherlands', 'Cayman Islands', 'Chile', 'China', 'Colombia', 'Costa Rica',
            'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominica',
            'Dominican Republic', 'Ecuador', 'El Salvador', 'Estonia', 'Falkland Islands',
            'Faroe Islands', 'Finland', 'France', 'French Guiana', 'Georgia', 'Germany',
            'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guatemala',
            'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
            'Indonesia', 'Ireland', 'Italy', 'Jamaica', 'Japan', 'Kazakhstan', 'Kosovo',
            'Kyrgyzstan', 'Russia', 'Saint Barthélemy', 'Saint Kitts and Nevis', 'Saint Lucia',
            'Taiwan', 'Tajikistan', 'Thailand', 'Trinidad and Tobago',
            'Turkey', 'Turkmenistan', 'Timor-Leste', 'Turks and Caicos Islands', 'Tuvalu',
            'U.S. Virgin Islands', 'Ukraine', 'United Kingdom',
            'United States', 'Uruguay', 'Uzbekistan',
            'Vatican City', 'Venezuela','Vietnam'];
        for(let i = 0; i < countries.length; i++){
            this.countryDropdown().contains(countries[i])
        }
        this.countryDropdown().contains(country).click()
    }

    clientCreatedCellsRow(firstName, lastName){
        cy.get('tbody tr').contains('tr', `${client.firstName} ${client.lastName}`).then( tableRow => {
            cy.wrap(tableRow).find('td').eq(0).should('contain', `${client.firstName} ${client.lastName}`)
            // cy.wrap(tableRow).find('td').eq(2).should('contain', `${address}`)
            // cy.wrap(tableRow).find('td').eq(3).should('contain', `${phoneNumber}`)
            // cy.wrap(tableRow).find('td').eq(4).should('contain', `${email}`)
            // cy.wrap(tableRow).find('td').eq(5).should('contain', `${company}`)

        })
    }

}

