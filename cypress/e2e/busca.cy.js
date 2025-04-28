/// <reference types="cypress"/>

describe('Funcionalidade: Buscar filmes válidos', () => {
  beforeEach(() =>{
    cy.visit('/')
  });
  afterEach(() => {
    cy.screenshot()
  });

  it('Deve apresentar filme que o usuário buscou', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-section').should('exist')
      cy.get('#search-input').type(filmes[1].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain' , filmes[1].titulo)
    })
  }),
  it('Deve apresentar a lista de filmes', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-section').should('exist')
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain' , filmes.titulo)
    })
  }),
  it('Não deve apresentar nenhum filme e retornar a mensagem', () => {
    cy.get('#search-section').should('exist')
    cy.get('#search-input').type('Um novo dev')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'Filme não encontrado.')
  }),
  it('Deve apresentar uma rolagem se tiver mais de 10 filmes', () => {
    cy.get('#search-section').should('exist')
    cy.get('#search-input').type('Star')
    cy.get('#search-button').click()
    cy.get('#results-section').find('div')
    .should('have.length', 11); //Fiz esse teste pois deveria ter uma rolagem infinita, Star Wars tem 11 filmes, Star trek tem 13 a aplicação está limitando a 10 filmes.
  })

})