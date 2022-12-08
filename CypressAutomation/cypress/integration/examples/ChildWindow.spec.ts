describe('My ChildTab Suite', () => {
    it('My ChildTab Test case',() => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);
        // cy.get("#opentab").invoke("attr","href").should("equal","https://www.rahulshettyacademy.com/");
        cy.get("#opentab").then(($el)=>{
            const url = $el.prop("href");
            expect(url).to.equal("https://www.rahulshettyacademy.com/");
        });
        
    });
});