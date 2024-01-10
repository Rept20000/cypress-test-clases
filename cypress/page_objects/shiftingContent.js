/// <reference types="cypress" />

export class ShiftingContent {

    visitshiftingContent() 
    
    {

    navigateToMenuElement() 

    cy.get(':nth-child(39) > a').click();
   

    cy.get('[href="/shifting_content/list"]').click();
    
    }
}