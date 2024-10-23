import User from "../models/User";

/**
 * Represents the API for user-related operations.
 */
export default class UserApi {

    /**
     * Registers a new user.
     * @param {User} user - The user to register.
     * @returns {Cypress.Chainable<Cypress.Response<any>>} The response from the API.
     */
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
