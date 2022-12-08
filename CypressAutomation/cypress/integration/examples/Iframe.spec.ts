import 'cypress-iframe';
describe('My Iframe Suite', () => {
    it('My Iframe Test case',() => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.wait(500);
        cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
    });
});