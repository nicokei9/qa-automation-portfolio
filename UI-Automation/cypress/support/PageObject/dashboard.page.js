class DashboardPage {

get logoutButton() {
    return cy.get(".css-667g3f")
}

get testRunsButton() {
    return cy.get(".css-1czjoxd")
}

get testDesignButton() {
    return cy.get(".css-19i0a4t")

}

get threeDotsButton() {
    return cy.get(".css-ixktz5")
}

get editButtonButton() {
    return cy.get(".css-1vjdvl7")

}
}
export default new DashboardPage()