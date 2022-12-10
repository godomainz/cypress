describe('My first Framework Suite', () => {
    let data;
    before(()=>{
        cy.fixture('example').then((jsondata)=>{
            data = jsondata;
        });
        const url = "https://rahulshettyacademy.com/angularpractice/";
        cy.visit(url);
    });

    it('My Commands case', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        data.productNames.forEach((val)=>{
            cy.selectProduct(val);
        });
    });

});