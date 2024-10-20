import User from "../models/User";

export default class UserApi {

    register(user: User): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: 'POST',
            url: '/api/v1/users/register',
            body: {
                email: user.getEmail(),
                lastName: user.getLastName(),
                firstName: user.getFirstName(),
                password: user.getPassword(),
            }
        })
    }
}