import { Toast } from "./Toast"

describe('Toast Component', () => {

    it('render success toast', () => {

        cy.mount(<Toast showToast={true} 
            close={(closeToast) => console.log(closeToast)} 
            toastType="success" 
            message="Form Compilato Correttamente" />)

        cy.getByData('toast').should('exist')
    })

    it('render warning toast', () => {
        cy.mount(<Toast showToast={true} 
            close={(closeToast) => console.log(closeToast)} 
            toastType="warning" 
            message="Alcuni campi non valorizzati. Si desidera proseguire lo stesso?" />)
    })

    it('render danger toast', () => {
        cy.mount(<Toast showToast={true} 
            close={(closeToast) => console.log(closeToast)} 
            toastType="danger" 
            message="Il Form non è compilato correttamente" />)
    })
})