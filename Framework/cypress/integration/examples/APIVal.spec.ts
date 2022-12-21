import { AppDemoPage } from "./pageObjects/AppDemoPage";

describe('My Mock HTTP Suite', () => {
    let appDemoPage:AppDemoPage;

    before(()=>{
        appDemoPage = new AppDemoPage();
        const url = Cypress.env('url')+"/angularAppdemo/";
        cy.visit(url);
    });

    it('My Mock HTTP case', () => {
        const books: {}[] =  [
            {"book_name":"RobotFramework","isbn":"SPY40","aisle":"2529857"}, 
            {"book_name":"Learn Appium Automation with Java","isbn":"SPY41","aisle":"2529858"},
            {"book_name":"GIT","isbn":"SPY42","aisle":"2529859"},
            {"book_name":"Postman","isbn":"SPY43","aisle":"2529860"}
        ];
        cy.intercept({
            method: "GET",
            url: Cypress.env('url')+"/Library/GetBook.php?AuthorName=shetty"
        },{
            statusCode: 200,
            body: books
        }).as("bookretrievals");
        appDemoPage.getVirtualLibrary().click();
        cy.wait("@bookretrievals").should(({request, response})=>{
            cy.get('tbody').find('tr').should('have.length', response.body.length);
        });
        cy.get('tbody').find('tr').should('have.length', books.length);
    });
});