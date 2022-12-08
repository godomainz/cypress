describe('My first Framework Suite', () => {
    before(()=>{
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Commands case', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        const phoneName = "Blackberry";
        cy.selectProduct(phoneName);
    });

});