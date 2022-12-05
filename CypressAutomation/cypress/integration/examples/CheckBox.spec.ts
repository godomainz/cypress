import promisify from 'cypress-promise';

describe('My Second Third Suite', () => {
  it('My Third Test case', async() => {
    const url = "https://rahulshettyacademy.com/AutomationPractice/";
    cy.visit(url);
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
});