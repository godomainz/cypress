describe('My Second Dropdown Suite', () => {
    it('My Dropdown Test case', async() => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);

        //Static Dropdown
        cy.get("select").select("option2").should("have.value","option2");

        // Dynamic Dropdown
        cy.get('#autocomplete').type("ind");
        const country = "India";
        cy.get(".ui-menu-item > div").each(($el)=>{
            if($el.text()===country){
                const element = cy.wrap($el);
                element.click();
            }
        });
        cy.get('#autocomplete').should("have.value", country);
    });
  });