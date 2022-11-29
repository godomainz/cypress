describe('My First Test', () => {
  it('Does not do much!', () => {
    const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
    cy.visit(url);
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);
    // Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    // cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    cy.get(".products").find(".product").each(($el, index, list) => {
      const element = cy.wrap($el);
      const txt = $el.find(".product-name").text();
      const vegitable = "Carrot";
      if(txt.includes(vegitable)){
        element.find("button").click();
      }
    });

  })
})