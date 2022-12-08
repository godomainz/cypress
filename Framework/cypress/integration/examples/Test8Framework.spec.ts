describe('My first Framework Suite', () => {
    before(()=>{
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Visibility case', () => {
        cy.get('input[name="name"]:nth-child(1)').type("Akila");
        cy.get('#exampleFormControlSelect1').select("Male")

    });
  });