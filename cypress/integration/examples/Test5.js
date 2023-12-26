describe('My First Test Suite', function()
{

it('My First Test Case', function(){


cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

// Used ":nth-child(2)" for selecting 2nd colum of data from the table
// ".each" use to iterate the table data
cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
   
const text= $el.text()
    
    if (text.includes('Python')) {
    
        // ".eq(index)" used for selecting the index number
        // ".next" used for moving to the sivling selector (Like table has 3 columns, moved 2 to 3)
        // ".then" have to use for using ".text()" function
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
            const priceText= price.text()

            // ".to.equal()" used for assertion
            expect(priceText).to.equal('25')
        })
    
    } 
    
    })


})
})


