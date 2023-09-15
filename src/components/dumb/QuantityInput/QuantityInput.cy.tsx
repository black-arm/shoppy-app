import { QuantityInput } from "./QuantityInput"

describe('QuantityInput', () => {
    it('render', () => {
        cy.mount(<QuantityInput name={'quantity'}/>)
    })

    it('should click plus button and add one to value', () => {
        cy.mount(<QuantityInput name={'quantity'}/>)

        cy.getByData('plus-button').click();
        cy.getByData('quantity-input').should('have.value', 1);
    })

    it('should click plus button and add one to value', () => {
        cy.mount(<QuantityInput name={'quantity'}/>)

        cy.getByData('minus-button').click();
        cy.getByData('quantity-input').should('have.value', 0);
    })

    it('should click 3 times plus button and 1 time minus button', () => {

        cy.mount(<QuantityInput name={'quantity'}/>)
        cy.getByData('plus-button').click();
        cy.getByData('plus-button').click();
        cy.getByData('plus-button').click();
        cy.getByData('minus-button').click();

        cy.getByData('quantity-input').should('have.value', 2);
        
    })

    it('should onClick return 1', () => {

        function onClick(value: number){
            expect(value).equal(1)
        }

        cy.mount(<QuantityInput name="quantity" onClick={onClick} />)
        cy.getByData('plus-button').click();
    })
})