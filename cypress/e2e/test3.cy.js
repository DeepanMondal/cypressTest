/// <reference types="cypress"/>

describe('cart suit',()=>{
    it('test case 1',()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input[class="search-keyword"]').type("ca");
        cy.wait(2000);
        cy.get(".products").find(".product").each(($el,index,$list)=>{

            const text = $el.find("h4.product-name").text();
            if(text.includes("Capsicum")){
                cy.wrap($el).find("button").click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;']").contains("Place Order").click();
    })
})