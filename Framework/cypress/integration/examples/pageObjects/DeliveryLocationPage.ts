export class DeliveryLocationPage {
    private deliveryLocation:string = '#country';
    private country:string = '.suggestions';
    private agreeCheckBox: string = '#checkbox2';
    private purchaseButton: string = 'input[value="Purchase"]';
    private successMessage: string = '.alert';

    getDeliveryLocation = () => {
        return cy.get(this.deliveryLocation);
    }

    getCountry = (countryName:string, timeout:number = 10000) => {
        cy.get(this.country, {timeout: timeout}).find('a').each(
            $el=>{
                if($el.text()===countryName){
                    console.log($el.text());
                    cy.wrap($el).click();
                }
            }
        )
    };

    getAgreeCheckBox = () => {
        return cy.get(this.agreeCheckBox);
    }

    getPurchaseButton = () => {
        return cy.get(this.purchaseButton);
    }
    getSuccessMessage = () => {
        return cy.get(this.successMessage);
    }
}