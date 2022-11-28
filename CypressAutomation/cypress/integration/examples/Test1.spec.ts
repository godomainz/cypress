describe('My First Test', () => {
  it('Does not do much!', () => {
    const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
    cy.visit(url);
    cy.get(".search-keyword").type("ca");
  })
})