describe('My Table Suite', () => {
    it('My Table case',() => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/";
        cy.visit(url);
        const subject = 'Master Selenium Automation in simple Python Language';
        const price = '25';
        cy.get('table[name="courses"] > tbody td:nth-child(2)').each(($el, index, $list)=>{
            if($el.text().includes(subject)){
                cy.wrap($el).next().should("have.text", price);
            }
        });
        
    });
});