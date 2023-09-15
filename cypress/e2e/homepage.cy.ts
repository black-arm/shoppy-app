
describe('homepage', () => {
    
    it('view the collections', () => {
        cy.intercept('**/collection_listings.json', { fixture: 'collection_list.json'}).as('collections')
        cy.visit('/')
        cy.wait('@collections')
        cy.getByData('collection-item').should('exist').and('have.length', 3)
    })

    it('view the home and garden products', () => {

        cy.intercept('**/collection_listings.json', 
            { 
                fixture: 'collection_list.json'
            }
        ).as('collections')
        cy.intercept('**/products.json', 
            { 
                fixture: 'collection_products.json'
            }
        ).as('products');
        
        cy.visit('/')
        cy.wait('@collections')
        cy.getByData('title').eq(0).click()
        cy.wait('@products')
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

    
    it('should view danger toast', () => {
        cy.intercept('**/collection_listings.json', { 
            method: 'GET', 
            statusCode: 500,
        }).as('collections')

        cy.visit('/')
        cy.getByData('toast').should('exist')
        cy.wait('@collections')
    })

    context('move between collection', () =>{

        it('should filter and productsList null if client move between collection', () => {
            cy.intercept('**/collection_listings.json', { fixture: 'collection_list.json'}).as('collections')
            cy.intercept('**/products.json', { fixture: 'collection_products.json' }).as('products');
           
            cy.visit('/')
            cy.wait('@collections')
            
            cy.getByData('title').eq(0).click()
            cy.wait('@products')
            cy.getByData('searchButton').click()
            cy.get('[name="filter"]').type('Vanilla')
            cy.getByData('product-item').eq(0).contains('Vanilla candle')
            cy.getByData('homepage-link').click()
            cy.wait('@collections')
            
            cy.getByData('title').eq(0).click()
            cy.wait('@products')
            cy.getByData('product-item').eq(0).contains('Bedside Table')
        })
    })
})