import 'cypress-xpath'

describe('Test Login with Multiple Users', () => {
  it('Logs in using multiple user accounts from fixture with a for loop', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC/')

    // Access the fixture file
    cy.fixture('user').then((users) => {
      // Use a for loop to iterate through the array
      for (let i = 0; i < users.length; i++) {
        const user = users[i] // Get the current user

        //cy.log(`Logging in as: ${user.username}`) // Logs the username for debugging
        
        // Perform login for the current user
        cy.xpath('//input[@name="username"]').clear().type(user.username)
        cy.xpath('//input[@name="password"]').clear().type(user.password)
        cy.xpath('//input[@value="Log In"]').click()
        // cy.xpath('//div[@class="bm-burger-button"]').click()
        cy.xpath('//a[normalize-space()="Log Out"]').click()
      }
    })
  })
})
