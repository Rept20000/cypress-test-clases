/// <reference types="cypress" />
// Segundo test de Cypress/Shifting Content

import { MainPage } from "../page_objects/main-page";
import { ShiftingContent } from "../page_objects/shiftingContent";

describe("Shifting Content Test", () => {

  const mainPage = new MainPage();
  const shiftingContent = new ShiftingContent();
    
it("tabla debería contener 5 elements", () => {
  
   mainPage
  .visitMainPage();
  
  cy.get(':nth-child(39) > a').click();
  cy.get('[href="/shifting_content/menu"]').click();
    
// Verificando tabla contiene 5 elements usando get

cy.get('li').should('have.length', 5);
    
});

})



