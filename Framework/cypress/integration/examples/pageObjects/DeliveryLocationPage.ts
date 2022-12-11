export class DeliveryLocationPage {
    private deliveryLocation:string = '#country';
    private country:string = '.suggestions';

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
}