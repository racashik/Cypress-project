describe('My First Test Suite', function()
{

it('My First Test Case No:1', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//cy.get('.product:visible').should('have.length',4)

// cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

cy.get('.products').as('productLocator')

cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('h4.product-name').text()

if(textVeg.includes('Cashews'))
{
    $el.find('button').click() 
}

})

// Assert if logo text is correctly displayed
cy.get('.brand').should('have.text', 'GREENKART')



})
})


