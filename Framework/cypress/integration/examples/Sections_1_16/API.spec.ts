describe('My Mock HTTP Suite', () => {
    const domain = "http://216.10.245.166";

    before(()=>{
       
    });

    it('My Mock API case', () => {
        const url = domain + "/Library/Addbook.php";
        const today = new Date();
        const date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate();
        const time = today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
        const body = {
            "name" : "Test",
            "isbn": "bcdsaaa22"+date+"_"+time,
            "aisle": "22522"+date+"_"+time,
            "author": "John Doe"
            };
        const msg = "successfully added";
        cy.request('POST', url, body).then(respose=>{
            expect(respose.body).to.have.property("Msg",msg);
            expect(respose.status).to.eq(200);
        });
    
    });
});