describe('My First Test Suite', function()
{

it('My First Test Case', function(){


cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

// Click on the "Alert Button" & in Cypress Alert Popup accept automatically
cy.get('#alertbtn').click()

// Click on the "Confirm Button" & in Cypress Confirm popup accept automatically
cy.get('[value="Confirm"]').click()


// Window:alert
// Assertion of the Alert popup's text
cy.on('window:alert',(str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})


// Window:confirm
// Assertion of the Confirm popup's text
cy.on('window:confirm',(str)=>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


})
})


