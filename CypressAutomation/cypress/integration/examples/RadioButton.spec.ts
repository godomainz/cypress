describe('My Second Third Suite', () => {
    it('My Third Test case', async() => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/";
      cy.visit(url);
      cy.get('input[value="radio1"]').check().should("be.checked").and("have.value","radio1");
    });
  });