describe('My First Test Suite', function()
{

it('My First Test Case', function(){


cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 



cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

// ".invoke('show')" used for taking the mouse over the button for showing popup
// cy.get('div .mouse-hover-content').invoke('show')


// Here directly clicking on that button which has the word "Top"
// {force: true} used to find Invisible eliments since not holding the mouse on the button here
cy.contains('Top').click({force: true})

// Assertion to check the URL
cy.url().should('include','top')




})
})


