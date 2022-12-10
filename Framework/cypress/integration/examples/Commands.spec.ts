import { HomePage } from "./pageObjects/HomePage";

describe('My first Framework Suite', () => {
    let data;
    let homePage: HomePage;
    before(()=>{
        homePage = new HomePage();
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Commands case', () => {
        // cy.pause();
        // cy.get(':nth-child(2) > .nav-link').click().debug();
        homePage.getShopTab().click();
        data.productNames.forEach((val)=>{
            cy.selectProduct(val);
        });
    });

});