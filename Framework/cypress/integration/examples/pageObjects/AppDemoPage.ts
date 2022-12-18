export class AppDemoPage {
    private virtualLibraryButton:string = 'button[routerlink="/library"]';

    getVirtualLibrary= () => {
        return cy.get(this.virtualLibraryButton);
    }
}