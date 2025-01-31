import TodoApi from "../api/TodoApi"
import User from "../models/User"
import RegisterPage from "./RegisterPage"

/**
 * Represents the NewTodoPage with various elements and actions.
 */
export default class NewTodoPage {

    registerPage: RegisterPage = new RegisterPage()
    todoApi: TodoApi = new TodoApi()
    user: User = new User()

    /**
     * Gets the input element for the new todo.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The new todo input element.
     */
    get newTodoInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="new-todo"]')
    }

    /**
     * Gets the button element for creating a new todo.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The create todo button element.
     */
    get createTodoButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="submit-newTask"]')
    }

    /**
     * Gets the error element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The error element.
    */    
    get errorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('p.Mui-error')
    }

    /**
     * Loads the new todo page.
     * @returns {Cypress.Chainable<Window>} The window object of the loaded page.
     */
    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo/new')
    }

    /**
     * Adds a new todo item.
     * @param {string} task - The task to be added as a new todo.
     */
    addTodo(task: string): void {
        this.newTodoInput.type(task)
        this.createTodoButton.click()
    }

    /**
     * Creates a new todo item using the API.
     * @param {string} item - The item to be created as a new todo.
     * @returns {Cypress.Chainable<Cypress.Response<any>>} The response from the API.
     */
    createNewTodoUsingApi(item: string, completed: boolean): Cypress.Chainable<Cypress.Response<any>> {
        return this.todoApi.createTodo(item, completed)
    }

    /**
     * Validates the text value and the CSS of the error message.
    */
    validateErrorMessage(): void {
        this.errorMessage.should('have.text', 'New todo is required, and it should be more than 3 characters')
            .and('have.css', 'color', 'rgb(244, 67, 54)')
    }
}
