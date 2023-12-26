describe('My First Test Suite', function()
{

it('My First Test Case', function(){


cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 



// Assertion to check the Element is visible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
// Assertion to check the Element is invisible
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()



// Radio Button Checking
cy.get('input[value="radio2"]').check().should('be.checked')




})
})


