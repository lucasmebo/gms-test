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
}),
describe('Funcionalidade: Recomendações do dia', () => {
  it('Deve apresentar as 5 recomendações do dia', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations-section').should('exist')
    cy.get('#recommendations').find('div')
    .should('have.length', 5);
  })
}),
describe('Funcionalidade: Buscar um filme válido', () => {
  it('Deve apresentar filmes que busquei', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-section').should('exist')
    cy.get('#search-input').type('Thor')
    cy.get('#search-button').click()
    cy.get('#results-section').should('exist')
    cy.get('#clear-button').click()
    cy.get('#clear-button').click()
  })
}),


describe('Funcionalidade: Buscar um filme não válido', () => {
  it('Não deve apresentar nenhum filme e retornar a mensagem', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-section').should('exist')
    cy.get('#search-input').type('Um novo dev')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'Filme não encontrado.')
    cy.get('#clear-button').click()
  })
})
