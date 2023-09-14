import { store } from "@/store"
import ProductForm from "./ProductForm"
import { Provider } from "react-redux"

describe('Product Form', () => {


    it('render', () => {
        cy.mount(<Provider store={store}>
            <ProductForm />
        </Provider>)
    })

    it('show form if click search button', () => {
        
        cy.mount(<Provider store={store}>
            <ProductForm />
        </Provider>)
        cy.getByData('searchButton').click()
        cy.getByData('productForm').should('exist')
    })
})