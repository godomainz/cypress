export class ThankYouPage {
    private downloadBtn:string = '.btn-primary';

    getDownLoadBtn = () => {
        return cy.get(this.downloadBtn);
    }

}