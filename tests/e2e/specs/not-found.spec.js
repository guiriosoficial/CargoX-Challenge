describe('Not found', () => {
  it('Go to no existent page should be show 404 error', () => {
    cy.visit('/404/')
    cy.contains('h1', '404')
  })

  it('Click in Go Back button should be redirect for initial page', () => {
    cy.get('.error-container__button')
      .click()

    cy.url()
      .should('match', /http:\/\/localhost:808[01]\//)
  })
})
