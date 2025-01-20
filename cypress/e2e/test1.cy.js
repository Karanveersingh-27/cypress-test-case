import 'cypress-xpath'
describe("First Test on cypress", ()=>{
  it('Test 1', ()=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').should('be.visible').click()
    .type('standard_user')
    cy.get('#password').should('be.visible').click()
    .type('secret_sauce')
    cy.xpath("//input[contains(@id, 'login-button')]").should('be.visible').click()
    cy.get('.btn_inventory').click( {multiple: true})
    cy.get("#shopping_cart_container").click()
    cy.xpath('//a[normalize-space()="Continue Shopping"]').click()
    cy.xpath('//button[normalize-space()="REMOVE"]').click({multiple: true})
  })
})