declare global {
    namespace Cypress {
      interface Chainable {
          selectProduct: (productName: string) => Chainable<void>
      }
    }
}
export const selectProduct = (productName:string) => {
    cy.get('h4.card-title > a').each(($el, index)=>{
        if($el.text().includes(productName)){
            cy.get('app-card button.btn').eq(index).click();
        }
    });
};

Cypress.Commands.add('selectProduct', selectProduct);

