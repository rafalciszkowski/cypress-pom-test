import User from "../models/User"
import UserApi from "./UserApi"

/**
 * Represents the API for todo-related operations.
 */
export default class TodoApi {

    userApi: UserApi = new UserApi()
    user: User = new User()

    /**
     * Creates a new todo item.
     * @param {string} item - The item to be created as a new todo.
     * @returns {Cypress.Chainable<Cypress.Response<any>>} The response from the API.
     */
    createTodo(item: string): Cypress.Chainable<Cypress.Response<any>> {
        return this.userApi.register(this.user).then(({ body }) => {
            return cy.request({
                method: 'POST',
                url: '/api/v1/tasks',
                body: {
                    isCompleted: false,
                    item: item,
                },
                headers: {
                    Authorization: `Bearer ${body.access_token}`
                }
            })
        })
    }
}
