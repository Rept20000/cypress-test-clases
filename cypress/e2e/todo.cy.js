describe("tests-page-todo", () => {
    beforeEach(() => {
      cy.visit("http://todomvc-app-for-testing.surge.sh/");
    });
  
    it("user can create a task ", () => {
      cy.get(".new-todo").type("check weather for the weekend{enter}");
      cy.get(".todo-list").contains("check weather for the weekend");
    });
    it("user can mark task as completed ", () => {
      cy.get(".new-todo").type("check weather for the weekend{enter}");
      cy.get(".toggle").click();
      cy.get(":nth-child(1) > .view > label").contains("check weather for the weekend");
    });
    it("user can unmark task as not completed ", () => {
      cy.get(".new-todo").type("check weather for the weekend{enter}");
      cy.get(".toggle").click();
      cy.get(".toggle").click();
      cy.get(".todo-list").contains("check weather for the weekend");
    });
    it("user can edit task ", () => {
      cy.get(".new-todo").type("ccheck weather for the weekend{enter}");
      cy.get("label").dblclick();
      cy.get(".editing").type("{selectall}{backspace} check weather for today{enter}");
      cy.get(".todo-list").contains(" check weather for today");
    });
    it("user can delete task  ", () => {
      cy.get(".new-todo").type("check weather for today{enter}");
      cy.get("label").trigger("mouseover");
      cy.get(".destroy").invoke("show").click({ force: true });
      cy.get(".new-todo");
    });
    it("user can filter tasks  ", () => {
      cy.get(".new-todo").type("check weather for the weekend{enter}");
      cy.get(".new-todo").type("check weather for today{enter}");
      cy.get(".new-todo").type("check weather by hours{enter}");
      cy.get(".new-todo").type("c{enter}");
      cy.get(":nth-child(1) > .view > .toggle").click();
      cy.get(":nth-child(3) > .view > .toggle").click();
      cy.get(":nth-child(3) > a").click();
      cy.get(":nth-child(2) > .view > label").contains("check weather for the weekend");
      cy.get(":nth-child(1) > .view > label").contains("check weather for today");
      cy.get(":nth-child(2) > a").click();
      cy.get(":nth-child(1) > .view > label").contains("check weather by hours");
      cy.get(":nth-child(2) > .view > label").contains("check weather in malaga");
      cy.get(":nth-child(1) > a").click();
    });
  });

  