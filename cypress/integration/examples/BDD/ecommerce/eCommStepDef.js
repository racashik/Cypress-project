
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../pageObjects/HomePage';

const homePage= new HomePage()

Given('I open Ecommerce Page', ()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

// When I add items to Cart

When('I add items to Cart',()=>
{
    homePage.getShopTab().click()


    this.data.productName

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    });
})

//And Validate the total prices

Then('Validate the total prices',()=>
{
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{

        const amount= $el.text()

        var res= amount.split(" ")

        res= res[1].trim()

        sum = Number(sum)+Number(res)

        cy.log(res)

    }).then(function()
    {
        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element)
    {
        const amount= element.text()
        var res= amount.split(" ")
        var total= res[1].trim()

        cy.log(total)

        expect(Number(total)).to.equal(sum)
    })
})



// Then select the country submit and verify Thankyou 

Then('select the country submit and verify Thankyou ', ()=>
{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul >li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('.alert').then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})







