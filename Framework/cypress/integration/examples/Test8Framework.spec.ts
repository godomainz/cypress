import { HomePage } from './pageObjects/HomePage';

describe('My first Framework Suite', () => {
    let data;
    let homePage: HomePage;
    before(()=>{
        homePage = new HomePage();
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = Cypress.env('url')+"/angularpractice/";
        cy.visit(url);
    });

    it('My Data Binding case', () => {
        homePage.getName().type(data.name);
        homePage.getGender().select(data.gender);
        homePage.getTwoWayDataBinding().should('have.value', data.name);
    });

    it('My minlength case', () => {
        homePage.getName().clear();
        homePage.getName().should('have.attr', 'minlength', 2);
        homePage.getName().type(data.name);
    });

    it('My disabled case', () => {
        homePage.getEntrepreneur().should('be.disabled');
    });
  });