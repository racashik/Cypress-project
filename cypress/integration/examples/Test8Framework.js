import HomePage from '../pageObjects/HomePage'



describe('My First Test Suite', function()
{

    before(() => {
         cy.fixture('example').then(function(data)
        {

            this.data=data

        })
      })

it('My First Test Case', function(){

    Cypress.config('defaultCommandTimeout', 8000)

    // Ceate Object for the Class here
    const homePage= new HomePage()
    
    cy.visit(Cypress.env('url')+"/angularpractice/")

    homePage.getEditBox().type(this.data.name)

    homePage.getGender().select(this.data.gender)

    homePage.getTwoWayDataBinding().should('have.value',this.data.name)

    homePage.getEditBox().should('have.attr','minlength','2')

    homePage.getEnterpreneaur().should('be.disabled')

    homePage.getShopTab().click()


    this.data.productName

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    });
    

    var sum=0

    cy.get('.nav-link.btn.btn-primary').click()


    // Scrap all price by using the CSS Selector and fetch by ".each" Iteration
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{

        // Reading the Text and keeping in the "amount" variable
        const amount= $el.text()

        // Since Price has two value by a seperator "Space" here Split it by "Space"
        var res= amount.split(" ")

        // Triming the Second Index
        res= res[1].trim()

        // Here the value will be add as a string so need to convert into Number
        // used "Number()" for converting string into Number 
        sum = Number(sum)+Number(res)



        // Printing the value on the "Log" 
        cy.log(res)
    

    // Since here we are using JavaScript code only, no Cypress code
    // It will run base on Asynchronous manner, wont all line of code sequentially
    // therefor use ".then(function)"
    }).then(function()
    {
        cy.log(sum)
    })

    

    // Here will prepare the visible text "total product cost" By spliting and making number from String

    cy.get('h3 strong').then(function(element)
    {
        const amount= element.text()
        var res= amount.split(" ")
        var total= res[1].trim()

        cy.log(total)

        // Here making the assertion to check "Total" and "Sum" equal or not
        // No need to remember the assertion code, search from the documentation
        expect(Number(total)).to.equal(sum)
    })


    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul >li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
    








})
})


