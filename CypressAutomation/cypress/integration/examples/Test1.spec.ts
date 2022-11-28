describe('My First Test', () => {
  it('Does not do much!', () => {
    const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
    cy.visit(url);
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
  })
})