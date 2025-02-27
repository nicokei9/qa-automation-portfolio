class EditProjectPage {

    get ProjectNameInput(){
        return cy.get("[data-testid='projectName']")
    }

    get ProjectDescriptionInput(){
        return cy.get("[data-testid='projectDescription']")
    }

    get EmailInput(){
        return cy.get("[data-testid='email']")
    }
    
    get AdminRoleButton(){
        return cy.get("[data-testid='adminRole']")
    }

    get BasicRoleButton(){
        return cy.get("[data-testid='basicRole']")
    }

    get AddRoleButton(){
        return cy.get(".css-8njjn2")
    }

    get SaveChangesButton(){
        return cy.get("[data-testid='addButton']")
    }



}

export default new EditProjectPage()
