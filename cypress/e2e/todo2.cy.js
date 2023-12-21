/// <reference types="cypress" />

describe('TodoMVC App Tests', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/')
    });
  
    it('1. Crear tarea', () => {
      const taskName = 'Nueva tarea';
      cy.get('.new-todo').type(`${taskName}{enter}`);
      cy.get('.todo-list label').should('have.text', taskName);
    });
  
    it('2. Marcar tarea como completada', () => {
      const taskName = 'Tarea a completar';
      cy.get('.new-todo').type(`${taskName}{enter}`);
      cy.get('.toggle').click();
      cy.get('.completed').should('exist');
    });
  
    it('3. Desmarcar tarea completada', () => {
      const taskName = 'Tarea a desmarcar';
      cy.get('.new-todo').type(`${taskName}{enter}`);
      cy.get('.toggle').click();
      cy.get('.toggle').click();
      cy.get('.completed').should('not.exist');
    });
  
    it('4. Editar tarea', () => {
      const oldTaskName = 'Tarea original';
      const newTaskName = 'Tarea editada';
      cy.get('.new-todo').type(`${oldTaskName}{enter}`);
      cy.contains('label', oldTaskName).dblclick();
      cy.get('.edit').type(`${newTaskName}{enter}`);
      cy.get('.todo-list label').should('have.text', newTaskName);
    });
  
    it('5. Borrar tarea', () => {
      const taskName = 'Tarea a borrar';
      cy.get('.new-todo').type(`${taskName}{enter}`);
      cy.get('.destroy').click();
      cy.get('.todo-list').should('not.contain', taskName);
    });
  
    it('6. Filtrar tareas', () => {
      const task1 = 'Tarea 1';
      const task2 = 'Tarea 2';
      cy.get('.new-todo').type(`${task1}{enter}`);
      cy.get('.new-todo').type(`${task2}{enter}`);
      
      cy.contains('label', task1).click();
      cy.get('.toggle').eq(1).click();
      cy.get('.completed').should('have.length', 1);
  
      cy.contains('label', task2).click();
      cy.get('.toggle').eq(1).click();
      cy.get('.completed').should('have.length', 0);
  
      cy.contains('All').click();
      cy.get('.todo-list li').should('have.length', 2);
    });
  });