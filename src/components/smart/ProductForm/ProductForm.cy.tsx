import ProductForm from "./ProductForm"

describe('Product Form', () => {


    it('render', () => {
        cy.mount(<ProductForm />)
    })

    it('show form if click search button', () => {
        
        cy.mount(<ProductForm />)
        cy.getByData('searchButton').click()
        cy.getByData('productForm').should('exist')
    })
})