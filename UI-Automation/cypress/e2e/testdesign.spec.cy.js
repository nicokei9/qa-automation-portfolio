import loginPage from "../support/PageObject/login.page";
import dashboardPage from "../support/PageObject/dashboard.page";
import testdesignPage from "../support/PageObject/testdesign.page";


describe('Test Design Test', () => {
    let randomSuiteName;

    beforeEach('Login', () => {
        cy.loginByRequest(Cypress.env('username'), Cypress.env('password'), "TestDesign")
        cy.visit('/dashboard');
        dashboardPage.testDesignButton.click();
        randomSuiteName = Math.random().toString(36).substring(2, 8);
    });

    it('Add New Suite', () => {
        randomSuiteName = Math.random().toString(36).substring(2, 8);
        testdesignPage.addNewSuiteButton.click();
        testdesignPage.AddSuiteNameInput.type(randomSuiteName);
        testdesignPage.ConfirmAddSuiteName.click();
        //testdesignPage.suiteIsPresent(randomSuiteName);
        //cy.get('@suiteIsPresent').should('be.true');
    });

    it('Rename a Suite', () => {
        const initialSuiteName = Math.random().toString(36).substring(2, 8);
        testdesignPage.addNewSuiteButton.click();
        testdesignPage.AddSuiteNameInput.type(initialSuiteName);
        testdesignPage.ConfirmAddSuiteName.click();
        testdesignPage.getEditSuiteNameButton(initialSuiteName).click();
        const newRandomSuiteName = Math.random().toString(36).substring(2, 8);
        testdesignPage.EditSuiteNameInput.clear().type(newRandomSuiteName);
        testdesignPage.ConfirmEditSuiteName.click();
        randomSuiteName = newRandomSuiteName
        //testdesignPage.suiteIsPresent(randomSuiteName);
        //cy.get('@suiteIsPresent').should('be.true');
    
    });

    afterEach('DeleteSuite', () => {
        testdesignPage.getDeleteSuiteButton(randomSuiteName).click();
        testdesignPage.DeleteSuiteInput.type(randomSuiteName);
        testdesignPage.ConfirmDeleteSuiteButton.click();
        testdesignPage.DeleteSuiteInput.should("not.exist");
    });
});