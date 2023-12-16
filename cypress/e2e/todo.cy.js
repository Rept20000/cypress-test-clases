describe("tests-page-todo", () => {
    beforeEach(() => {
      cy.visit("http://todomvc-app-for-testing.surge.sh/");
    });
  
    it("user can create a task ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get(".todo-list").contains("comprar el pan");
    });
    it("user can mark task as completed ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get(".toggle").click();
      cy.get(":nth-child(1) > .view > label").contains("comprar el pan");
    });
    it("user can unmark task as not completed ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get(".toggle").click();
      cy.get(".toggle").click();
      cy.get(".todo-list").contains("comprar el pan");
    });
    it("user can edit task ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get("label").dblclick();
      cy.get(".editing").type("{selectall}{backspace} comprar la leche{enter}");
      cy.get(".todo-list").contains("comprar la leche");
    });
    it("user can delete task  ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get("label").trigger("mouseover");
      cy.get(".destroy").invoke("show").click({ force: true });
      cy.get(".new-todo");
    });
    it("user can filter tasks  ", () => {
      cy.get(".new-todo").type("comprar el pan{enter}");
      cy.get(".new-todo").type("comprar la leche{enter}");
      cy.get(".new-todo").type("ir al gimnasio{enter}");
      cy.get(".new-todo").type("estudiar{enter}");
      cy.get(":nth-child(1) > .view > .toggle").click();
      cy.get(":nth-child(3) > .view > .toggle").click();
      cy.get(":nth-child(3) > a").click();
      cy.get(":nth-child(2) > .view > label").contains("comprar la leche");
      cy.get(":nth-child(1) > .view > label").contains("estudiar");
      cy.get(":nth-child(2) > a").click();
      cy.get(":nth-child(1) > .view > label").contains("ir al gimnasio");
      cy.get(":nth-child(2) > .view > label").contains("comprar el pan");
      cy.get(":nth-child(1) > a").click();
    });
  });

  