const url = 'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC';

describe('Test Registration and Login with Multiple Users', () => {
  let users;

  before(() => {
    // Load fixture data
    cy.fixture('user').then((data) => {
      users = data; // Store user data
    });
  });

  it('Registers multiple users with unique usernames', () => {
    cy.visit(url);

    users.forEach((user, index) => {
      const uniqueUsername = `hello${Date.now()}${index}`; // Generate a unique username
      user.dynamicUsername = uniqueUsername; // Save the username for later

      // Register the user using a custom command
      cy.registerUser(user, uniqueUsername);
    });
  });

  it('Logs in with registered users', () => {
    cy.visit(url);

    users.forEach((user) => {
      cy.log(`Logging in as: ${user.dynamicUsername}`); // Debugging log

      // Login the user using a custom command
      cy.loginUser(user.dynamicUsername, user.password);
    });
  });
});
