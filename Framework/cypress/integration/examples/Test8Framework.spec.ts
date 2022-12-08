let data;
describe('My first Framework Suite', () => {
    before(()=>{
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Data Binding case', () => {
        cy.get('input[name="name"]:nth-child(1)').type(data.name);
        cy.get('#exampleFormControlSelect1').select(data.gender);
        cy.get('input[name="name"]:nth-child(2)').should('have.value', data.name);
    });

    it('My minlength case', () => {
        cy.get('input[name="name"]:nth-child(1)').clear();
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2);
        cy.get('input[name="name"]:nth-child(1)').type(data.name);
    });

    it('My disabled case', () => {
        cy.get('#inlineRadio3').should('be.disabled');
    });
  });