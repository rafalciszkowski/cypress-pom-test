import { faker } from '@faker-js/faker'

/**
 * Represents a User with generated details.
 */
export default class User {

    private firstName: string
    private lastName: string
    private email: string
    private password: string

    constructor () {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.email = faker.internet.email()
        this.password = 'testPass1234'
    }

    /**
     * Gets the first name of the user.
     * @returns {string} The first name of the user.
     */
    getFirstName(): string {
        return this.firstName
    }

    /**
     * Gets the last name of the user.
     * @returns {string} The last name of the user.
     */
    getLastName(): string {
        return this.lastName
    }

    /**
     * Gets the email of the user.
     * @returns {string} The email of the user.
     */
    getEmail(): string {
        return this.email
    }

    /**
     * Gets the password of the user.
     * @returns {string} The password of the user.
     */
    getPassword(): string {
        return this.password
    }
}
