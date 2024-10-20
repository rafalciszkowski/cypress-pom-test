import TodoApi from "../api/TodoApi"
import User from "../models/User"
import RegisterPage from "./RegisterPage"

export default class NewTodoPage {

    registerPage: RegisterPage = new RegisterPage()
    todoApi: TodoApi = new TodoApi()
    user: User = new User()

    get newTodoInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="new-todo"]')
    }

    get createTodoButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="submit-newTask"]')
    }

    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo/new')
    }

    addTodo(task: string): void {
        this.newTodoInput.type(task)
        this.createTodoButton.click()
    }

    createNewTodoUsingApi(item: string): Cypress.Chainable<Cypress.Response<any>> {
        return this.todoApi.createTodo(item)
    }
}