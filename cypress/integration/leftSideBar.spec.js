import LeftSideBarPage from "../support/page_object/leftSideBarPage";

const leftSideBarSpec = new LeftSideBarPage();

describe('LEFT SIDE BAR',  () => {
    before('login', ()=> {
        cy.login();
    });
    // beforeEach(()=>{
    //     Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    // });
    it('Left Side Bar is exist')


})