/// <reference types="cypress" />
// Segundo test de Cypress/Shifting Content

import { MainPage } from "../page_objects/main-page";
import { ShiftingContent } from "../page_objects/shiftingContent";

describe("Shifting Content Test", () => {

  const mainPage = new MainPage();
  const shiftingContent = new ShiftingContent();
    
it("should verify the table contains 5 elements", () => {
  mainPage
  .visitMainPage();
  //mainPage
  //.clickshiftingContent();
  cy.get(':nth-child(39) > a').click();
  cy.get('[href="/shifting_content/menu"]').click();
  
  //shiftingContent.navigateToMenuElement();

// Verify the table contains 5 elements usando get

cy.get('table').should('have.length', 1).find('tr').should('have.length', 5);
    
});

})



