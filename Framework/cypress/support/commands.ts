import { ShopPage } from "../integration/examples/pageObjects/ShopPage";

declare global {
    namespace Cypress {
      interface Chainable {
          selectProduct: (productName: string) => Chainable<void>,
          loginAPI: () => Chainable<void>
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

export const loginAPI = () => {
    const url = Cypress.env('url') + "/api/ecom/auth/login";
    const payload = {userEmail: "rahulshetty@gmail.com", userPassword: "Iamking@00"};
    cy.request("POST", url, payload).then((response)=>{
        expect(response.status).to.eq(200);
        Cypress.env("token" , response.body.token);
    });
};

Cypress.Commands.add('selectProduct', selectProduct);
Cypress.Commands.add('loginAPI', loginAPI);