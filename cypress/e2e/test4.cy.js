/// <reference types="cypress"/>

describe('selection suit',()=>{
    it('test case 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //checkBox
        cy.get('input[value="option1"]').check().should('be.checked').and('have.value','option1');
        cy.wait(2000);
        cy.get('input[value="option1"]').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        //static Dropdown
        cy.get('select').select('option2').should('have.value','option2');

        //Dynamic Dropdown
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==='India'){
                cy.wrap($el).click();
            }
        })
    })
})