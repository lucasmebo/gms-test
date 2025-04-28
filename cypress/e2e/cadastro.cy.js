/// <reference types="cypress"/> 
//Quando declaramos "it.only" ele vai executar somente a linha com essa declaração. 
describe('Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatorio', () => {
    var email = `lucas${Date.now()}@teste.com`
    var telefone = `${Date.now()}`
   cy.preencherCadastro('Fulano' , 'Silva' , email , telefone , 'Teste@123456')
   cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
 }),
  it('Deve informar o usuario que o nome não pode conter numeros', () => {
    var email = `lucas${Date.now()}@teste.com`
    cy.preencherCadastro('Fulano20' , 'Silva' , email , '4899998888' , 'Teste@123456')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  }),
  it('Deve informar o usuario que o SobreNome não pode conter numeros', () => {
    var email = `lucas${Date.now()}@teste.com`
    cy.preencherCadastro('Fulano' , 'Silva10' , email , '4899998888', 'Teste@123456')
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  }),
  it('Deve informar o usuário que precisa ser um email válido', () => {
    var email = `lucas${Date.now()}.teste.com`
    cy.preencherCadastro('Fulano' , 'Silva' , email , '4899998888' , 'Teste@123456')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  }),
  it('Deve informar o usuário que o campo telefone só aceita numeros', () => {
    var email = `lucas${Date.now()}@teste.com`
    cy.preencherCadastro('Fulano' , 'Silva' , email , 'meutelefone' , 'Teste@123456')
    cy.get('#signup-response').should('contain' , 'Telefone deve conter apenas números')
  }),
  it.only('Deve informar o usuário que a senha precisa ser mais forte', () => {
    var email = `lucas${Date.now()}@teste.com`
    cy.preencherCadastro('Fulano' , 'Silva' , email , '4899998888' , 'teste123')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})