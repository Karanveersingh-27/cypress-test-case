describe("End to end Check for Swag Labs", ()=>{
  it("Verify that login and logout functionality is working fine", () =>{
    cy.visit("https://sherlock.dmlabs.in/admin/authentication/")
    cy.get('#email').click().type("cxo@yopmail.com")
    cy.should("have.value", "cxo@yopmail.com")
    cy.get('#password').click().type("Test@123")
    cy.should("have.value", "Test@123")
    cy.get(':nth-child(5) > .btn').click()
    cy.get('.header-user-profile > .dropdown-toggle').click()
    cy.get('.animated > .header-logout > a').click()
  })
  
})