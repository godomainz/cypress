export class HomePage {
    private name:string = 'input[name="name"]:nth-child(2)';
    private email:string = 'input[name="name"]:nth-child(2)';
    private twoWayDataBinding:string = 'input[name="name"]:nth-child(2)';
    private gender:string = '#exampleFormControlSelect1';
    private entrepreneur:string = '#inlineRadio3';
    private shopTab:string = ':nth-child(2) > .nav-link';

    getName = () => {
        return cy.get(this.name);
    }
    getEmail = () => {
        return cy.get(this.email);
    }
    getTwoWayDataBinding = () => {
        return cy.get(this.twoWayDataBinding);
    }
    getGender = (gender:string) => {
        return cy.get(this.gender).select(gender);
    }
    getEntrepreneur = () => {
        return cy.get(this.entrepreneur);
    }
    getShopTab = () => {
        return cy.get(this.shopTab);
    }
    
}