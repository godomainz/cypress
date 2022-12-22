import { AppDemoPage } from "../pageObjects/AppDemoPage";

describe('My Mock HTTP Suite', () => {
    let appDemoPage:AppDemoPage;
    const domain = Cypress.env('url');

    before(()=>{
        appDemoPage = new AppDemoPage();
        const url = domain + "/angularAppdemo/";
        cy.visit(url);
    });

    it('My Mock HTTP case', () => {
        let authorName = "shetty";
        let url = domain + "/Library/GetBook.php?AuthorName=" + authorName;
        cy.intercept('GET', url, (req)=>{
            authorName = "malhotra";
            url = domain + "/Library/GetBook.php?AuthorName=" + authorName;
            req.url = url;
            req.continue((res)=>{
                expect(res.statusCode).to.equal(404);
            });
        }).as("dummyUrl");
        appDemoPage.getVirtualLibrary().click();
        cy.wait("@dummyUrl");
    });
});