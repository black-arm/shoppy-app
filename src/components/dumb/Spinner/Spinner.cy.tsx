import Spinner from "./Spinner"

describe('spinner', () => {

    it('render', () =>{
        cy.mount(<Spinner showSpinner={true} />)
    })
})