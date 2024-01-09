/// <reference types="cypress" />

export class MainPage2 {

    visitMainPage() 
    {
        cy.visit("https://the-internet.herokuapp.com/");
    }

    clickvisitshifting() 
    
    {
        cy.get(':nth-child(39) > a').click()
    }


  
}