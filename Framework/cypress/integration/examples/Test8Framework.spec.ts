let data;
describe('My first Framework Suite', () => {
    before(()=>{
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Visibility case', () => {
        cy.get('input[name="name"]:nth-child(1)').type(data.name);
        cy.get('#exampleFormControlSelect1').select(data.gender);

    });
  });