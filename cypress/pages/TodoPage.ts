export default class TodoPage {

    elements = {
        noTodos: () => cy.get('[data-testid="no-todos"]'),
        addTodo: () => cy.get('[data-testid="add"]'),
        newTodo: () => cy.get('[data-testid="todo-text"]'),
        deleteTodo: () => cy.get('[data-testid="delete"]'),
    }

    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo')
    }

    deleteTodo(): void {
        this.elements.deleteTodo().click()
    }
}