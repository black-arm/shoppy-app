
describe('products list page', () => {

    beforeEach(() => {
        cy.intercept('**/266329686089/products.json',  { fixture: 'collection_products.json'}).as('collectionProducts')
    })

    it('should view product list', () => {
        cy.visit('/products/266329686089');
        cy.wait('@collectionProducts')
        cy.getByData('product-item').eq(0).should('exist');
    })

    /*
    it('should add product to cart', () => {
        cy.visit('/products/266329686089')
        cy.wait('@collectionProducts')
        cy.getByData('product-item').eq(0).contains('Add to Cart').click();

        cy.getByData('dropdown').click();
        cy.getByData('cart-link').click();
        cy.getByData('product-item').should('exist');
    }) */

    context('filter', () => {

        beforeEach(() => {
            cy.visit('/products/266329686089');
            cy.wait('@collectionProducts')
            cy.getByData('searchButton').click();
            
        })
        
        it('should filter product list', () => {
            cy.getByData('productForm').find('[name="filter"]').type('Table')
            cy.getByData('product-item').should('have.length', 2)
            cy.getByData('product-item').eq(0).contains('Bedside Table')
            cy.getByData('product-item').eq(1).contains('Wooden Outdoor Table')
        })
        
        it('should message no item found', () => {       
            cy.getByData('productForm').find('[name="filter"]').type('Chair')     
            cy.getByData('no-item').contains('No Products Found')
        })
    })


})