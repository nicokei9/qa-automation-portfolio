import loginPage from "../support/PageObject/login.page";
import dashboardPage from "../support/PageObject/dashboard.page";
import testdesignPage from "../support/PageObject/testdesign.page";
import testcasePage from "../support/PageObject/testcase.page";

describe('Test Case - Tests', () => {
    let randomSuiteName;
    let randomTestCaseName;
    let randomLabelName1;
    let randomLabelName2;
    let randomLabelName3;

    beforeEach('Login and Create New Suite', () => {
        cy.loginByRequest(Cypress.env('username'), Cypress.env('password'), "TestDesign")
        cy.visit('/dashboard');
        dashboardPage.testDesignButton.click();
        randomSuiteName = Math.random().toString(36).substring(2, 8);
        testdesignPage.addNewSuiteButton.click();
        testdesignPage.AddSuiteNameInput.type(randomSuiteName);
        testdesignPage.ConfirmAddSuiteName.click();
        
    });

    it('Add a Test Case', () => {
        testdesignPage.getAddNewCaseButton(randomSuiteName).click();
        randomTestCaseName = Math.random().toString(36).substring(2, 8);
        testcasePage.TestCaseNameInput.type(randomTestCaseName);
        randomLabelName1 = Math.random().toString(36).substring(2, 8);
        randomLabelName2 = Math.random().toString(36).substring(2, 8);
        randomLabelName3 = Math.random().toString(36).substring(2, 8);
        testcasePage.TestCaseLabelsInput.type(`${randomLabelName1}{enter}${randomLabelName2}{enter}${randomLabelName3}{enter}`);
        testcasePage.TestCaseTypeSelect.click();
        cy.contains('Free').click();
        testcasePage.TestCaseReferenceInput.type("ReferenceTestText");
        testcasePage.AddTestCaseButton.click();

    });

    it('Delete a Test Case', () => {
        testdesignPage.getAddNewCaseButton(randomSuiteName).click();
        randomTestCaseName = Math.random().toString(36).substring(2, 8);
        testcasePage.TestCaseNameInput.type(randomTestCaseName)
        testcasePage.AddTestCaseButton.click();
        testdesignPage.getExpandMoreButton(randomSuiteName).click();
        testdesignPage.getMoreHorizButton(randomTestCaseName).click();
        testdesignPage.DeleteTestCaseButton.click();
        testdesignPage.DeleteTestCaseConfirmButton.click();
        testdesignPage.RefreshButton.click();
    
    });

    afterEach('DeleteSuite', () => {
        testdesignPage.getDeleteSuiteButton(randomSuiteName).click();
        testdesignPage.DeleteSuiteInput.type(randomSuiteName);
        testdesignPage.ConfirmDeleteSuiteButton.click();
        testdesignPage.RefreshButton.click();
    });
});