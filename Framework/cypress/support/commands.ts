import { ShopPage } from "../integration/examples/pageObjects/ShopPage";

declare global {
    namespace Cypress {
      interface Chainable {
          selectProduct: (productName: string) => Chainable<void>
      }
    }
}
export const selectProduct = (productName:string) => {
    const shopPage = new ShopPage();
    shopPage.getProductName().each(($el, index)=>{
        if($el.text().includes(productName)){
            shopPage.getAddButton().eq(index).click();
        }
    });
};

Cypress.Commands.add('selectProduct', selectProduct);

