export class ThankYouPage {
    private downloadBtn:string = '.btn-primary';
    private invoiceNumber:string = '.em-spacer-1 > .ng-star-inserted';

    getDownLoadBtn = () => {
        return cy.get(this.downloadBtn);
    }

    getInvoiceNumber = () => {
        return cy.get(this.invoiceNumber);
    }

}