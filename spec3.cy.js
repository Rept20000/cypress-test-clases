describe('Test http://monaghansfuengirola.com/', () => {
  it(' Testing Contact Form', () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("tomsmith")
    cy.get('#email-1').type("tom@smith.org")
    cy.get('#phone-1').type("+123456789")
    cy.get('#textarea-1').type("Hola Quiero hacer una reserva. Gracias")
    cy.get('.forminator-button').click()
    cy.get('#forminator-module-966').contains("Thank you for contacting us, we will be in touch shortly.")

  })

  it(' Testing Contact Form insert no user name/field is required' , () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("")
    cy.get('#forminator-error-message').contains("This field is required. Please input your name.")
    cy.get('#email-1').type("tom@smith.org")
    cy.get('#phone-1').type("+123456789")
    cy.get('#textarea-1').type("Hola Quiero hacer una reserva. Gracias")
    cy.get('.forminator-button').click()
    
  })
  
  it(' Testing Contact Form insert no email(/field is required', () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("tomsmith")
    cy.get('#email-1').type("")
    cy.get('#phone-1').type("+123456789")
    cy.get('#textarea-1').type("Hola Quiero hacer una reserva. Gracias")
    cy.get('.forminator-button').click()
    
  })

  it(' Testing Contact Form insert no phone(/field is not required', () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("tomsmith")
    cy.get('#email-1').type("tom@smith.org")
    cy.get('#phone-1').type("")
    cy.get('#textarea-1').type("Hola Quiero hacer una reserva. Gracias")
    cy.get('.forminator-button').click()
    cy.get('#forminator-module-966').contains("Thank you for contacting us, we will be in touch shortly.")
    
  })

  it(' Testing Contact Form insert no text message(/field is not required', () => {
    cy.visit('http://monaghansfuengirola.com/')
    cy.get('#name-1').type("tomsmith")
    cy.get('#email-1').type("tom@smith.org")
    cy.get('#phone-1').type("+123456789")
    cy.get('#textarea-1').type("")
    cy.get('.forminator-button').click()
    cy.get('#forminator-module-966').contains("Thank you for contacting us, we will be in touch shortly.")
    
  })


})

