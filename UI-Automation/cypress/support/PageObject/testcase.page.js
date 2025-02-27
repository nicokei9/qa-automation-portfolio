class TestCasePage {

    get TestCaseNameInput(){
        return cy.get("[data-testid='nameField']")
    }

    get TestCaseReferenceInput(){
        return cy.get("[data-testid='referenceField']")
    }

    get TestCaseLabelsInput(){
        return cy.get("[data-testid='labelsField']")
    }

    get TestCasePreconditionsInput(){
        return cy.get("[name='preconditions']")
    }

    get TestCaseStepsInput(){
        return cy.get("[name='steps']")
    }

    get ExpectedResultInput(){
        return cy.get("[name='expectedResult']")
    }

    get TestCaseTypeSelect(){
        return cy.get("[data-testid='typeDropdown']")
    }

    get TestCasePrioritySelect(){
        return cy.get("[data-testid='priorityDropdown']")
    }

    get AddTestCaseButton(){
        return cy.get("[data-testid='add test case']")
    }

    get AddAndNexTestCaseButton(){
        return cy.get("[data-testid='add_test_case_and_next']")
    }

    





}

export default new TestCasePage