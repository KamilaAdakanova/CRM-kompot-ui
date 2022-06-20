
import RegistrationPage from "../support/page_object/registrationPage";


const registrationPage = new RegistrationPage()

describe('Registration', () =>{


    it('registration with valid credentials', () =>{
        cy.registration()




    // })
})

//beforeEach('ghjn', function () {
//         cy.fixture("example.json").as('kotik').then(obj => {
//             cy.log(obj.client.firstName)
//         })
//     })
//     it('check', function () {
//         cy.log(`${this.kotik.length}`)
//     })