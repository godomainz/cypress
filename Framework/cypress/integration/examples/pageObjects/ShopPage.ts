export class ShopPage {
    private productName:string = 'h4.card-title > a';
    private addButton:string = 'app-card button.btn';
    private checkoutButton:string = '#navbarResponsive > .navbar-nav > .nav-item > .nav-link';

    getProductName = () => {
        return cy.get(this.productName);
    }
    getAddButton = () => {
        return cy.get(this.addButton);
    }
    getCheckoutButton = () => {
        return cy.get(this.checkoutButton);
    }
}