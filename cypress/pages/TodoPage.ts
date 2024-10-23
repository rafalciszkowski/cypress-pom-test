/**
 * Represents the TodoPage with various elements and actions.
 */
export default class TodoPage {

    /**
     * Gets the element that displays when there are no todos.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The no todos element.
     */
    get noTodosElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="no-todos"]')
    }

    /**
     * Gets the element for adding a new todo.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The add todo element.
     */
    get addTodoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="add"]')
    }

    /**
     * Gets the element that displays the todo text.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The todo text element.
     */
    get todoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="todo-text"]')
    }

    /**
     * Gets the element for deleting a todo.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The delete todo element.
     */
    get deleteTodoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="delete"]')
    }

    /**
     * Loads the todo page.
     * @returns {Cypress.Chainable<Window>} The window object of the loaded page.
     */
    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo')
    }

    /**
     * Deletes a todo item.
     */
    deleteTodo(): void {
        this.deleteTodoElement.click()
    }
}
