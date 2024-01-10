/// <reference types="cypress" />

export class MainPage {

    visitMainPage() 
    {
        cy.visit("https://the-internet.herokuapp.com/");
    }

    clicclickShiftingContent() 
    
    {
        cy.get(':nth-child(39) > a').click()
    }

    clickFormAuthentication() 
    {
        cy.get(":nth-child(21) > a").click();
    }

}



