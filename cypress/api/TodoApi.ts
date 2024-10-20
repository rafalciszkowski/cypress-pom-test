import User from "../models/User"
import UserApi from "./UserApi"

export default class TodoApi {

    userApi: UserApi = new UserApi()
    user: User = new User()

    createTodo(item: string): Cypress.Chainable<Cypress.Response<any>> {
        return this.userApi.register(this.user).then(({ body }) => {
            cy.request({
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