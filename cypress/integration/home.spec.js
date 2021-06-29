/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('main heading displays Lucas Vieira', () => {
    cy.get('#heading-my-name')
      .should('have.text', 'Lucas Vieira')
  })
})
