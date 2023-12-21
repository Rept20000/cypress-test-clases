describe('TODO app E2E', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("New Task 1{enter}")
  });  
  
  it('Add task', () => {
      cy.get('label').contains("check weather for the weekend")
    })

    it('Mark task as completed', () => {
        cy.get('.toggle').click()
        cy.get('.footer').contains("No items left")
      })

      it('Mark task as completed and then reverse it', () => {
        cy.get('.toggle').click()
        cy.get('.footer').contains("No items left")
        cy.get('.toggle').click()
        cy.get('.footer').contains("1 item left")
      })

      it('Edit Task Name', () => {
        cy.get('label').dblclick()
        cy.focused().clear().type("check weather for today")
        cy.get('label').contains("check weather for today")
      })

      it('Remove the task', () => {
        cy.get('.destroy').invoke('show').click()
        cy.get('.label').should('not.exist')
      })

      it('Add different task and check if filters work', () => {
        cy.get('.new-todo').type("check weather for Malaga{enter}")
        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.get(':nth-child(2) > a')
        cy.get('.footer').contains("1 item left")
        cy.get(':nth-child(3) > a').click()
        cy.get(':nth-child(2) > .view > label').should('not.exist')
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(2) > .view > label').should('not.exist')
        cy.get(':nth-child(1) > a').click()
        cy.get(':nth-child(2) > .view > label').should('exist')
      })
})