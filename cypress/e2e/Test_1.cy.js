describe ( 'My first Testcases', ()=> {
it('Verify that buttons are clickable', ()=>{
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get("#user-name").click()
    cy.get("#password").click()
    })
it('Verify that while entering valid credentials I am able to do login', ()=>{
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get("#user-name").type("standard_user").click()
    cy.get("#password").type("secret_sauce").click()
    cy.get("#login-button").click()
    })
it('Verify that when we enter invalid credentials there is an error display', ()=>{
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get("#user-name").type("standard_user").click()
    cy.get("#password").type("secret_ce").click()
    cy.get("#login-button").click()
})    
})