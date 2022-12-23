import { PaymentPage } from "../pageObjects/PaymentPage";
import { ThankYouPage } from "../pageObjects/ThankYouPage";
import * as neatCSV from "neat-csv";

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
        
        let producName;
        cy.get(".card .card-body b").eq(0).then($el=>{
            producName = $el.text();
        });
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
        let invoiceNumber;
        thankYoupage.getInvoiceNumber().then($el=>{
            invoiceNumber = $el.text().split(" ")[2];
        })
        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_rahulshetty.csv").then(async (text)=>{
            const csv = await neatCSV(text);
            console.log(csv);
            const actualProductCSV = csv[0]["Product Name"];
            const actualInvoiceNumberCSV = csv[0]["Invoice Number"];
            expect(producName).to.equal(actualProductCSV);
            expect(invoiceNumber).to.equal(actualInvoiceNumberCSV);
        });

    });

    
});