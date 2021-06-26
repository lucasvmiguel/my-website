/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays hello lucas', () => {
    cy.get('[data-testid="hello-title"]')
      .should('have.text', 'Hello Lucas')
  })
})
