
export const getByData = (selector: string) => {
    return cy.get(`[data-cy=${selector}]`)
 }