describe('My Mock JWT Token Suite', () => {

    before(()=>{
        cy.loginAPI();
    });

    it('My JWT Token case', () => {
        const token = Cypress.env("token");
        const url = Cypress.env("url") + "/client/";
        cy.visit(url, 
            { 
                onBeforeLoad : (window)=> {
                    window.localStorage.setItem("token", token);
                } 
            }
        );
    });
});