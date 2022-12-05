describe('My Second Dropdown Suite', () => {
    it('My Dropdown Test case', async() => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/";
      cy.visit(url);

      //Static Dropdown
      cy.get("select").select("option2").should("have.value","option2");


    });
  });