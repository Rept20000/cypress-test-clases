describe('pruebas heroku app', () => {
  it(' login con contraseña y usuario valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")

  })

  it(' login con contraseña invalida y usuario valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!2")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")

  })

  it(' login con contraseña valida y usuario invalido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("Tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")

  })

  it(' login con contraseña invalida y usuario invalido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("Tomsmith")
    cy.get('#password').type("SuperSecretPassword!2")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")

  })

  it(' login con contraseña y usuario valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")

  })

  it(' login con contraseña y usuario valido. Despues logout', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('.button').click()
    cy.get('#flash').contains("You logged out of the secure area!")

  })

  

})










