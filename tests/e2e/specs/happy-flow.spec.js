describe('Commun flow', () => {
  it('Table skeleton loading should be showed and hidden', () => {
    cy.visit('/')
    cy.contains('h1', 'BEM VINDO(A)')

    cy.get('.table-container__row .skeleton-loading')
      .should('have.class', 'skeleton-loading')
      .should('be.visible')

    cy.get('.table-container__row .skeleton-loading')
      .should('not.exist')
  })
    
  it('Click on item should be redirect to item', () => {
    cy.get('.table-container__row')
      .first()
      .click()

    cy.url()
      .should('include', '/delivery/')
  })

  it('Page item skeleton loading should be showed and hidden', () => {
    cy.get('.header-container .skeleton-loading')
      .should('have.class', 'skeleton-loading')
      .should('be.visible')

    cy.get('.map-container .skeleton-loading')
      .should('have.class', 'skeleton-loading')
      .should('be.visible')

    cy.get('.info-container .skeleton-loading')
      .should('have.class', 'skeleton-loading')
      .should('be.visible')

    cy.get('.table-container__row .skeleton-loading')
      .should('not.exist')

    cy.get('.map-container .skeleton-loading')
      .should('not.exist')

    cy.get('.info-container .skeleton-loading')
      .should('not.exist')
  })
})
