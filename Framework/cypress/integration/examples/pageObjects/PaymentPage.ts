export class PaymentPage {
    private countryTxt:string = '[placeholder="Select Country"]';
    private country:string = '.ta-results';
    private placeOrderBtn:string = ".action__submit";

    getCountryTxt = () => {
        return cy.get(this.countryTxt);
    }

    getCountry = (countryName:string, timeout:number = 10000) => {
        cy.get(this.country, {timeout: timeout}).find('span').each(
            $el=>{
                if($el.text().trim()===countryName){
                    console.log($el.text());
                    cy.wrap($el).click();
                }
            }
        )
    };

    getPlaceOrderBtn = () => {
        return cy.get(this.placeOrderBtn);
    }
}