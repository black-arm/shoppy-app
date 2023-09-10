
describe('products list page', () => {


    it('should view product list', () => {
        cy.intercept('**/266329686089/products.json',  { fixture: 'collection_products.json'}).as('collectionProducts')
        cy.visit('/products/266329686089');
        cy.wait('@collectionProducts')
        cy.getByData('product-item').eq(0).should('exist');
    })

})