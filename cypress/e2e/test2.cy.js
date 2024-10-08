/// <reference types="cypress"/>


describe('First suit', ()=>{

    it('Test case1', ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input[class="search-keyword"]').type("ca");
        cy.wait(2000);

        //cy.get(".products .product").should('have.length',4);
        cy.get(".products").find(".product").should('have.length',4);
        
        
        //cy.get(".products").find(".product").eq(1).find(".product-action").click();
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
        cy.get(".products").find(".product").each(($el,index,$list)=>{

            const text = $el.find("h4.product-name").text();
            if(text.includes("Capsicum")){
                cy.wrap($el).find("button").click();
            }
        });
        let logotxt = "abc";
        cy.get('.brand').then((logo)=>{
            cy.log(logo.text());
            logotxt = logo.text();
            cy.log(logotxt);
        })
        cy.log(logotxt);
        //assertion in cypress
        cy.get('.brand').should('have.text','GREENKART');


    })  
    })