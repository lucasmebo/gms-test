
/// <reference types="cypress"/> 

describe('Funcionalidade: Recomendações do dia', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve apresentar as 5 recomendações do dia', () => {
    cy.get('#recommendations-section').should('exist')
    cy.get('#recommendations').find('div')
    .should('have.length', 5);
  })
})