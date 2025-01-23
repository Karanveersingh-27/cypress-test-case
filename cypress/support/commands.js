// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Command to register a new user
Cypress.Commands.add('registerUser', (user, uniqueUsername) => {
    cy.get('#loginPanel > :nth-child(3) > a').click(); // Navigate to registration page
  
    cy.get('#customer\\.firstName').type(user.firstname);
    cy.get('#customer\\.lastName').type(user.lastname);
    cy.get('#customer\\.address\\.street').type(user.address);
    cy.get('#customer\\.address\\.city').type(user.city);
    cy.get('#customer\\.address\\.state').type(user.state);
    cy.get('#customer\\.address\\.zipCode').type(user.zipcode);
    cy.get('#customer\\.phoneNumber').type(user.phone);
    cy.get('#customer\\.ssn').type(user.ssn);
    cy.get('#customer\\.username').type(uniqueUsername);
    cy.get('#customer\\.password').type(user.password);
    cy.get('#repeatedPassword').type(user.password);
  
    cy.get("input[value='Register']").click();
  
    cy.contains('Your account was created successfully. You are now logged in.')
      .should('be.visible');
  
    cy.get("a[href*='logout.htm']").click(); // Log out
  });
  
  // Command to log in a user
  Cypress.Commands.add('loginUser', (username, password) => {
    cy.get("input[name='username']").clear().type(username);
    cy.get("input[name='password']").clear().type(password);
    cy.get("input[value='Log In']").click();
  
    cy.contains('Accounts Overview').should('be.visible');
    cy.get("a[href*='logout.htm']").click(); // Log out
  });
  

  