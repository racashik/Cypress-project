/// <reference types="cypress" />
import 'cypress-plugin-api'
describe('plugin api learning', ()=>{
    it("GET API testing Using Cypress API Plugin", () => {
        cy.api("GET", "https://reqres.in/api/users?page=2").should((response) => {
          expect(response.status).to.eq(200);
        });
    });

    it("POST API testing Using Cypress API Plugin", () => {
        cy.api("POST", "https://reqres.in/api/users", {
          name: "morpheus",
          job: "leader",
        }).should((response) => {
          expect(response.status).to.eq(201);
        });
    });

})