import TodoApi from "../api/TodoApi"
import User from "../models/User"
import RegisterPage from "./RegisterPage"

export default class NewTodoPage {
    
    registerPage = new RegisterPage()
    todoApi = new TodoApi()
    user = new User()

    elements = {
        newTodoInput: () => cy.get('[data-testid="new-todo"]'),
        createTodoButton: () => cy.get('[data-testid="submit-newTask"]'),
    }

    load(): Cypress.Chainable<Window> {
        return cy.visit('/todo/new')
    }

    addTodo(task: string): void {
        this.elements.newTodoInput().type(task)
        this.elements.createTodoButton().click()
    }

    createNewTodoUsingApi(item: string): Cypress.Chainable<Cypress.Response<any>> {
        return this.todoApi.createTodo(item)
    }
}