/// <reference types="cypress" />

export class SecureAreaPage {
    checkMessage(text) {
      cy.get("#flash").contains(text);
    }
  }