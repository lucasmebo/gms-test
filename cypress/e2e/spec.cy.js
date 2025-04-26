//Essa linha serve como referencia para trazer todos os metodos do Cypress
/// <reference types="cypress"/> 

describe('Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorio', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Osvaldo')
    cy.get('#signup-lastname').type('Borges')
    cy.get('#signup-email').type('osvaldo@teste.com')
    cy.get('#signup-password').type('Teste!1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})
