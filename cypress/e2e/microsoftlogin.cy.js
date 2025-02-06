// cypress/e2e/login/microsoftLogin.cy.js

describe('Keka Microsoft Login Tests', () => {
    beforeEach(() => {
      // Login using credentials from environment variables or fixtures
      cy.fixture('credentials').then((credentials) => {
        cy.loginToAAD(credentials.aad_username, credentials.aad_password);
        cy.visit('https://digimantra.keka.com/#/home/dashboard')
      });
    });
  
    it('should verify the logged-in user has the correct name', () => {
      // cy.get('#welcome-div').should('contain', Cypress.env('aad_name'));
    });
  
    it('should verify the user dashboard loads correctly', () => {
      // Validate the correct URL
      cy.url().should('include', '/dashboard');
    
      // Wait for the "Development" text to appear dynamically
      cy.contains('Quick Access', { timeout: 40000 }).should('be.visible');
    
      // Take a screenshot after confirming the dashboard loaded
      cy.screenshot();
    });
    
  });
  