describe('No content', () => {
  it('Should be redirected when no content', () => {
    cy.visit('/delivery/unexistentid/')

    cy.url()
      .should('match', /http:\/\/localhost:808[01]\//)
  })

  it('Should be error toast when no content', () => {
    cy.get('.Vue-Toastification__toast')
      .should('have.class', 'Vue-Toastification__toast--error')
      .contains('Ops! Pedido não encontrado')
  })
})
