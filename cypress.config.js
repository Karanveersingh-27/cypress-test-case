const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.keka.com',
    supportFile: 'cypress/support/index.js',
    fixturesFolder: 'cypress/fixtures',
    experimentalModifyObstructiveThirdPartyCode: true,
    env: {
      aad_name: 'Test User', // Fallback environment variable
    },
  },
});
