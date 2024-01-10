/// <reference types="cypress" />

//export class ShiftingContent {

  //  visitshiftingContent() 
    
    //{
    //navigateToMenuElement() 
    //cy.get(':nth-child(39) > a').click();
    //}

//}


export class ShiftingContent {

    visitshiftingContent() {
      cy.visit('https://the-internet.herokuapp.com/shifting_content');
    }
  
    navigateToMenuElement() {
      cy.get(':nth-child(39) > a').click();
    }
  }