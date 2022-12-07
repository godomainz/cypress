describe('My Alert Suite', () => {
    it('My Alert Test case', async() => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/";
      cy.visit(url);
      cy.get('#alertbtn').click();
      cy.get('#confirmbtn').click();
      cy.on("window:alert",(txt)=>{
        expect(txt).to.equal('Hello , share this practice page and share your knowledge');
      });
      cy.on("window:confirm",(txt)=>{
        expect(txt).to.equal('Hello , Are you sure you want to confirm?');
      });
    });
  });