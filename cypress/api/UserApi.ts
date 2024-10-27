import CustomResponse from "../interfaces/CustomResponse"
import User from "../models/User"

/**
 * Represents the API for user-related operations.
 */
export default class UserApi {

    /**
     * Registers a new user.
     * @param {User} user - The user to register.
     * @returns {Cypress.Chainable<CustomResponse>} The custom response that is extended with requestBody property.
     */
    register(user: User): Cypress.Chainable<CustomResponse> {
        return cy.request({
            method: 'POST',
            url: '/api/v1/users/register',
            body: {
                email: user.getEmail(),
                lastName: user.getLastName(),
                firstName: user.getFirstName(),
                password: user.getPassword(),
            }
        }) as Cypress.Chainable<CustomResponse>
    }
}
