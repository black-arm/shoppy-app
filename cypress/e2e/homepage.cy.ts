
describe('homepage', () => {
    
    it('view the collections', () => {
        cy.intercept('**/collection_listings.json').fixture('collection_list.json')
        cy.visit('/')

        cy.getByData('collection-item').should('exist').and('have.length', 3)
    })

    it('view the home and garden products', () => {
        cy.intercept('**/collection_listings.json').fixture('collection_list.json')
        cy.intercept('**/products.json').fixture('collection_products.json');
        cy.visit('/')

        cy.getByData('title').eq(0).click()
        cy.url().should('include', '/products')
    })

    it('should view the spinner', () =>{
        cy.intercept('**/collection_listings.json', (req) => {
            req.reply({
                fixture: 'collection_list.json',
                delay: 5000
            })
        }).as('collections')

        cy.visit('/')
        cy.getByData('spinner').should('exist')
        cy.wait('@collections')
        
    })
})