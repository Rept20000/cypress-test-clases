describe('Test http://monaghansfuengirola.com/', () => {
  it(' TEsting Contact Form', () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("tomsmith")
    cy.get('#email-1').type("tom@smith.org")
    cy.get('#phone-1').type("+123456789")
    cy.get('#textarea-1').type("Hola Quiero hacer una reserva. Gracias")
    cy.get('.forminator-button').click()
    cy.get('#forminator-module-966').contains("Thank you for contacting us, we will be in touch shortly.")

        
  })

})

