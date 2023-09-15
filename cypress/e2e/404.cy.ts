
describe('404 page', () => {
    
    it('should render 404 page', () =>{
        cy.visit('/error-page', {failOnStatusCode: false})
        cy.getByData('error-title').contains('Page not Found')
    })

    it('should return to homepage', () => {
        cy.intercept('**/collection_listings.json', { fixture: 'collection_list.json'})
            .as('collections')
        cy.visit('/error-page', {failOnStatusCode: false})
        cy.getByData('back-to-home-link').click()
        cy.wait('@collections')
        cy.url().should('include', "/")
    })
})