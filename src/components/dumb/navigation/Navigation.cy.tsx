import Navigation from "./Navigation"

describe('Navigation', () => {

    beforeEach(() => {
        cy.mount(<Navigation />)
    })

    it('render', () => {
        cy.viewport(1280, 870)
    })

    it('render mobile', () => {})

    it('should open dropdown menu', () => {
        cy.getByData('image').click()

        cy.getByData('dropdown-menu').should('exist')
    })
})