import promisify from 'cypress-promise';

describe('My Second Test Suite', () => {
  it('My Second Test case', async() => {
    const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
    cy.visit(url);
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");
    // Parent child chaining
    cy.get("@productLocator").find(".product").each(async($el, index, list) => {
      const element = cy.wrap($el);
      const txt = $el.find(".product-name").text();
      const vegitable = "Cashews";
      if(txt.includes(vegitable)){
        element.find("button").click();
      }
    });
    const logo = await promisify(cy.get('.brand'));
    cy.log(logo.text());
    cy.get('.brand').should("have.text","GREENKART")
    cy.get('.cart-icon > img').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains('Place Order').click();
  })
})