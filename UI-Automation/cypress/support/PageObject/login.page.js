class LoginPage {

    get emailInput(){
        return cy.get(".css-1x5jdmq")
    }

    get passwordInput() {
        return cy.get(".css-1uvydh2")
    }

    get loginButton() {
        return cy.get(".MuiButton-root")
    }

    get invalidLoginMessage () {
    return cy.get(".css-1dcn4bj")
    }

    login(username, password) {
        this.emailInput.clear().type(username)
        this.passwordInput.clear().type(password)
        this.loginButton.click()
    }

    clickOnProject (projectName) {
        cy.get(".css-nnrmud").each(($element) => {
            if($element.text().trim() === projectName) {
                cy.wrap($element).click()
            }
        })
    }

    projectIsPresent (projectName) {
        let foundProject = false
        cy.get(".css-nnrmud").each(($element) => {
            if($element.text().trim() === projectName) {
                foundProject = true
            }
        }).then(() => {
            cy.wrap(foundProject).as('projectIsPresent')
        })
    }
}

export default new LoginPage()

