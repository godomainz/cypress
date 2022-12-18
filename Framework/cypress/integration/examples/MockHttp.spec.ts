import { AppDemoPage } from "./pageObjects/AppDemoPage";

describe('My Mock HTTP Suite', () => {
    let appDemoPage:AppDemoPage;

    before(()=>{
        appDemoPage = new AppDemoPage();
        const url = Cypress.env('url')+"/angularAppdemo/";
        cy.visit(url);
    });

    it('My Mock HTTP case', () => {
        cy.intercept({
            method: "GET",
            url: Cypress.env('url')+"/Library/GetBook.php?AuthorName=shetty"
        },{
            statusCode: 200,
            body: [{"book_name":"null","isbn":"SPY40","aisle":"2529857"}]
        }).as("bookretrievals");
        appDemoPage.getVirtualLibrary().click();
        cy.wait("@bookretrievals");
        cy.get('p').should('have.text',"Oops only 1 Book available");
    });
});