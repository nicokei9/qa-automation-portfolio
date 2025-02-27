class TestDesignPage {

    get addNewSuiteButton(){
        return cy.get(".css-ri80gs")
    }

    get AddSuiteNameInput(){
        return cy.get(".css-1o6z5ng")
    }

    get ConfirmAddSuiteName(){
        return cy.get("[data-testid='confirmButton']") 
    }

    get EditSuiteNameInput(){
        return cy.get(".css-1x5jdmq")
    }

    get ConfirmEditSuiteName(){
        return cy.get("[data-testid='confirmButton']") 
    }

    get DeleteSuiteInput(){
        return cy.get(".css-1o6z5ng")
    }

    get ConfirmDeleteSuiteButton(){
        return cy.get("[data-testid='confirmButton']") 
    }

    get RefreshButton(){
        return cy.get(".css-w406g3")
    }

    get EditSuiteNameButton(){
        return cy.get("[data-testid='editSuiteButton1727181014539']")
    } //no lo estamos usando, se borra?

    getDeleteSuiteButton(suiteName) {
        return cy.contains('.css-snrx14', suiteName).parent().find("[data-testid^='deleteSuiteButton']"); 
    }

    getEditSuiteNameButton(suiteName) {
        return cy.contains('.css-snrx14', suiteName).parent().find("[data-testid^='editSuiteButton']");
    }
    
    getAddNewCaseButton(suiteName) {
        return cy.contains('.css-snrx14', suiteName).parent().parent().find("[data-testid^='addCaseButton']");
    }

    getExpandMoreButton(suiteName) {
        return cy.contains('.css-snrx14', suiteName).parent().parent().find("[data-testid^='ExpandMoreIcon']");
    }

    getMoreHorizButton(testCaseName) {
        return cy.contains('.css-8zv59t', testCaseName).parent().find("[data-testid^='MoreHorizIcon']");
    }

    get DeleteTestCaseButton(){
        return cy.get("[data-testid='optionsButton-delete']")

    }

    get DeleteTestCaseConfirmButton(){
        return cy.get("[data-testid='confirmButton']")

    }


    clickOnSuite (suiteName) {
        cy.get(".css-snrx14").each(($element) => {
            if($element.text().trim() === suiteName) {
                cy.wrap($element).click()
            }
        })
    }

    suiteIsPresent (suiteName) {
        let foundSuite = false
        cy.get(".css-snrx14").each(($element) => {
            if($element.text().trim() === suiteName) {
                foundSuite = true
            }
        }).then(() => {
            cy.wrap(foundSuite).as('suiteIsPresent')
        })
    }



}
export default new TestDesignPage