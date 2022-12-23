import { PaymentPage } from "../pageObjects/PaymentPage";
import { ThankYouPage } from "../pageObjects/ThankYouPage";

describe('My Mock JWT Token Suite', () => {
    let paymentPage: PaymentPage;
    let thankYoupage: ThankYouPage;

    before(()=>{
        cy.loginAPI();
    });

    it('My click Add to cart button', () => {
        const token = Cypress.env("token");
        const url = Cypress.env("url") + "/client/";
        cy.visit(url, 
            { 
                onBeforeLoad : (window)=> {
                    window.localStorage.setItem("token", token);
                } 
            }
        );
        cy.get(".card-body button:last-of-type").eq(0).click();
        cy.get('[routerlink="/dashboard/cart"]').click();

        cy.contains("Checkout").click();

        paymentPage = new PaymentPage();
        paymentPage.getCountryTxt().type("ind");
        paymentPage.getCountry("India");
        paymentPage.getPlaceOrderBtn().click();

        cy.wait(3000);
        thankYoupage = new ThankYouPage();
        thankYoupage.getDownLoadBtn().click();
    });

    
});