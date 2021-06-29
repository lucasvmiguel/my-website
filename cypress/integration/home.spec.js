/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('matches snapshot of home page', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000) // to wait the images to load
    cy.matchImageSnapshot()
  })
})
