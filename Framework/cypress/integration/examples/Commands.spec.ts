import { CheckoutPage } from "./pageObjects/CheckoutPage";
import { DeliveryLocationPage } from "./pageObjects/DeliveryLocationPage";
import { HomePage } from "./pageObjects/HomePage";
import { ShopPage } from "./pageObjects/ShopPage";

describe('My first Framework Suite', () => {
    let data;
    let homePage: HomePage;
    let shopPage:ShopPage;
    let checkoutPage: CheckoutPage;
    let deliveryLocationPage: DeliveryLocationPage;
    before(()=>{
        homePage = new HomePage();
        shopPage = new ShopPage();
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = Cypress.env('url')+"/angularpractice/";
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

    it('My should verify grand total', () => {
        checkoutPage = new CheckoutPage();
        checkoutPage.verifyGrandTotal();
        
    });

    it('My should load Country page', () => {
        checkoutPage.getCheckoutButton().click();
        deliveryLocationPage = new DeliveryLocationPage();
        const countryName = "India";
        deliveryLocationPage.getDeliveryLocation().type("Ind");
        // Cypress.config("defaultCommandTimeout", 8000);
        deliveryLocationPage.getCountry(countryName);
    });

    it('My should click purchase', () => {
        deliveryLocationPage.getAgreeCheckBox().check({force: true});
        deliveryLocationPage.getPurchaseButton().click();
        deliveryLocationPage.getSuccessMessage().should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
    });

});