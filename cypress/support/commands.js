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
// Cypress.Commands.add('registerUser', (user, uniqueUsername) => {
//     cy.get('#loginPanel > :nth-child(3) > a').click(); // Navigate to registration page
  
//     cy.get('#customer\\.firstName').type(user.firstname);
//     cy.get('#customer\\.lastName').type(user.lastname);
//     cy.get('#customer\\.address\\.street').type(user.address);
//     cy.get('#customer\\.address\\.city').type(user.city);
//     cy.get('#customer\\.address\\.state').type(user.state);
//     cy.get('#customer\\.address\\.zipCode').type(user.zipcode);
//     cy.get('#customer\\.phoneNumber').type(user.phone);
//     cy.get('#customer\\.ssn').type(user.ssn);
//     cy.get('#customer\\.username').type(uniqueUsername);
//     cy.get('#customer\\.password').type(user.password);
//     cy.get('#repeatedPassword').type(user.password);
  
//     cy.get("input[value='Register']").click();
  
//     cy.contains('Your account was created successfully. You are now logged in.')
//       .should('be.visible');
  
//     cy.get("a[href*='logout.htm']").click(); // Log out
//   });
  
//   // Command to log in a user
//   Cypress.Commands.add('loginUser', (username, password) => {
//     cy.get("input[name='username']").clear().type(username);
//     cy.get("input[name='password']").clear().type(password);
//     cy.get("input[value='Log In']").click();
  
//     cy.contains('Accounts Overview').should('be.visible');
//     cy.get("a[href*='logout.htm']").click(); // Log out
//   });
  
// cypress/support/commands.js

// Custom command to perform Microsoft login
Cypress.Commands.add('loginToAAD', (username, password) => {
  cy.session(
    `aad-${username}`,
    () => {
      // Visit the base URL (Keka's login page)
      cy.visit('https://www.keka.com');
      cy.get('.list-unstyled > :nth-child(1) > .text-secondary').click();
      cy.get(":nth-child(2) > .login-button").click();
  // Update the selector for Keka's login button

      // Microsoft login page
      cy.origin(
        'login.microsoftonline.com',
        { args: { username } },
        ({ username }) => {
          cy.get('input[type="email"]').type(username, { log: false });
          cy.get('input[type="submit"]').click();
        }
      );

      // Handle redirect to live.com if necessary
      cy.origin(
        'login.microsoftonline.com',
        { args: { password } },
        ({ password }) => {
          cy.get('input[type="password"]').type(password, { log: false });
          cy.get('input[type="submit"]').click();
          cy.get('#idBtn_Back').click(); // Confirm login
        }
      );
    },
  );
});

  