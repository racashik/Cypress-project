// Install thi spackage first from the consol
// ( npm install -D cypress-iframe )
// Import the "cypress-frame" package 
import 'cypress-iframe'

describe('My First Test Suite', function()
{

it('My First Test Case', function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

// Load the frame with the CSS Locator which mark the whole page
cy.frameLoaded('#courses-iframe')

// First switch to (cy.iframe) then action
// Click on the "Menu Button" and since that CSS Locator is multiple, used ".eq(0)" for Index identification
cy.iframe().find('a[href*="mentorship"]').eq(0).click()



})
})


