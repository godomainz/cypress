describe('My MouseHover Suite', () => {
    it('My ChildTab Test case',() => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        // cy.contains('Top').click({force: true});
        cy.url().should('include', 'top')
    });
});
