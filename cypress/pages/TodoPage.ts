export default class TodoPage {

    get noTodosElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="no-todos"]')
    }

    get addTodoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="add"]')
    }

    get todoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="todo-text"]')
    }

    get deleteTodoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="delete"]')
    }

    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo')
    }

    deleteTodo(): void {
        this.deleteTodoElement.click()
    }
}