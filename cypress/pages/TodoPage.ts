import NewTodoPage from "./NewTodoPage"

/**
 * Represents the TodoPage with various elements and actions.
 */
export default class TodoPage {

    newTodoPage: NewTodoPage = new NewTodoPage()

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
    get todoTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="todo-text"]')
    }

    /**
     * Gets the add todo button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The add todo button.
     */
    get addTodoButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('h2', 'Add a new Todo').prev()
    }

    /**
     * Gets the element for deleting a todo.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The delete todo element.
     */
    get deleteTodoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="delete"]')
    }

    /**
     * Gets the full todo elements
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The whole todo item
     */
    get todoItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="todo-item"]')
    }

    /**
     * Gets the checkboxes
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The checkbox element
     */
    get checkboxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="complete-task"]')
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

    /**
    * Adds multiple todos.
    * @param {string[]} items - The list of tasks to be added as a new todo.
    */
    addMultipleTodos(items: string[]): void {
        items.forEach((item: string): void => {
            this.addTodoButton.click()
            this.newTodoPage.addTodo(item)
        })
    }

    /**
     * Validates the todo list against the provided items.
     * @param {string[]} items - The list of tasks to validate.
    */
    validateTodoList(items: string[]): void {
        const revertedItems: string[] = items.reverse()

        this.todoTextElement.should('have.length', items.length)
        this.todoTextElement.each((item: Cypress.Chainable<JQuery<HTMLElement>>, index: number): void => {
            cy.wrap(item).should('have.text', revertedItems[index])
        })
    }

    /**
     * Validates the CSS of the todo list based on completion status.
     * @param {boolean} completed - Whether the todos are completed.
    */
    validateTodoListCss(completed: boolean): void {
        if (completed) {
            this.todoItemElement.each((element: Cypress.Chainable<JQuery<HTMLElement>>): void => {
                cy.wrap(element).should('have.css', 'backgroundColor', 'rgb(33, 76, 97)')
                // cy.wrap(element).find('h2').should('have.css', 'textDecoration', 'line-through solid rgb(145, 158, 171)')
                cy.wrap(element).within(() => {
                    this.todoTextElement.should('have.css', 'textDecoration', 'line-through solid rgb(145, 158, 171)')
                })
            })
        } else {
            this.todoItemElement.each((element: Cypress.Chainable<JQuery<HTMLElement>>): void => {
                cy.wrap(element).should('have.css', 'backgroundColor', 'rgb(63, 81, 181)')
            })
        }
    }

    /**
     * Clicks the checkbox to mark a todo as completed.
    */
    clickCheckbox(): void {
        this.checkboxElement.check().should('be.checked')
    }
}
