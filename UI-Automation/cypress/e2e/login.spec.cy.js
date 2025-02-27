import loginPage from "../support/PageObject/login.page"
import dashboardPage from "../support/PageObject/dashboard.page";

describe('Login Tests', () => {

  it('Login - Invalid username and password', () => {
        cy.visit('/');
        loginPage.login("TEST", "TESTPWD");
        loginPage.invalidLoginMessage.should("be.visible").and("have.text", "Incorrect username or password.");
  });

  it('Login - Valid username and password', () => {
    cy.visit('/');
    loginPage.login(Cypress.env('username'), Cypress.env('password'));
    dashboardPage.threeDotsButton.should("be.visible");
  });

});