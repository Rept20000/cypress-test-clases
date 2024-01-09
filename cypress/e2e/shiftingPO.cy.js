/// <reference types="cypress" />
// Segundo test de Cypress/Shifting Content

import { MainPage2 } from "../page_objects/main-page2";
import { shiftingContent } from "../page_objects/shiftingContent";

describe("Shifting Content Test", () => {

    const MainPage2 = new MainPage2();
    const shiftingContent = new LoginPage();
    
it("should verify the table contains 5 elements", () => {
    MainPage2.visitMainPage2();
    MainPage2.clickshiftingContent();

// Verify the table contains 5 elements usando get

cy.get('table').should('have.length', 1).find('tr').should('have.length', 5);
    
});

})