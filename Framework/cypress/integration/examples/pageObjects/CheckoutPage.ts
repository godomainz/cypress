export class CheckoutPage {
    private checkoutButton:string = 'table .btn-success';

    getCheckoutButton = () => {
        return cy.get(this.checkoutButton);
    }
}