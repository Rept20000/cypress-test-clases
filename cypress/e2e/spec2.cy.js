describe('Test https://demoblaze.com/', () => {
  it(' sign-in con contraseña y usuario valido', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#signin2').click()
    cy.get('#sign-username').type("ÑÑp")
    cy.get('#sign-password').type("PP")
    
    cy.get('.modal-selector').should('be.visible').and('not.have.class', 'transitioning');

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').dblclick()
    cy.get('#flash').contains("Sign up successful.")
    
  })

  it(' Log-In con contraseña y usuario valido', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type("ÑÑp")
    cy.get('#loginpassword').type("PP")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').dblclick()

    cy.get('.modal-selector').should('be.visible').and('not.have.class', 'transitioning');

    cy.get('#flash').contains("LOgin up successful.")
    cy.get('#logout2').click()
    cy.get('#flash').contains("LOgin up successful.")
    
  })

})

