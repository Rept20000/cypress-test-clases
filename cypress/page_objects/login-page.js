/// <reference types="cypress" />

export class LoginPage {
    enterUser(text) {
      cy.get("#username").type(text);
    }
    enterPass(text) {
      cy.get("#password").type(text);
    }
    clickLoginButton() {
      cy.get(".fa").click();
    }
  }

  