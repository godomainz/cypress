export class CheckoutPage {
    private checkoutButton:string = 'table .btn-success';
    private productTotal: string = '.table tr td:nth-child(4) strong';
    private grandTotal: string = '.table tr td:nth-child(5) strong';

    getCheckoutButton = () => {
        return cy.get(this.checkoutButton);
    }
     
    getProductTotal = () => {
        return cy.get(this.productTotal);
    }

    getGrandTotal = () => {
        return cy.get(this.grandTotal);
    }

    verifyGrandTotal = () => {
        let total = 0;
        this.getProductTotal().each($el => {
            total = total + (+$el.text().split(" ")[1])
        }).then(()=>{
            console.log(total);
            this.getGrandTotal().then(ele => {
                expect(total).to.equal(+ele.text().split(" ")[1]);
            });
        });
        
    }
}