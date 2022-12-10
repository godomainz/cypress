import { HomePage } from "./pageObjects/HomePage";
import { ShopPage } from "./pageObjects/ShopPage";

describe('My first Framework Suite', () => {
    let data;
    let homePage: HomePage;
    let shopPage:ShopPage;
    before(()=>{
        homePage = new HomePage();
        shopPage = new ShopPage();
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
        shopPage.getCheckoutButton().click();
    });

});