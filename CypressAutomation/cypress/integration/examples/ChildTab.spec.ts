describe('My ChildTab Suite', () => {
    it('My ChildTab Test case', () => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);
        cy.get('#opentab').invoke("attr","target").then((target)=>{
            expect(target).to.equal('_blank');
        });
        cy.get('#opentab').invoke("removeAttr","target");
        cy.get('#opentab').click();
    });
  });