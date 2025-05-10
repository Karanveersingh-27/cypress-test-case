// // cypress/support/index.js

// import './commands'; // Import custom commands

// // Suppress uncaught exceptions during tests
// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false; // Prevent tests from failing on uncaught exceptions
// });


// cypress/plugins/index.js

module.exports = (on, config) => {
  // Add any custom plugins or event listeners if required
  return config;
};


// cypress/support/index.js

import './commands'; // Import custom commands

// Suppress uncaught exceptions during tests
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent tests from failing on uncaught exceptions
});
