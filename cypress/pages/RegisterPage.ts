import UserApi from "../api/UserApi"
import { invalidRegister } from "../fixtures/testData"
import CustomResponse from "../interfaces/CustomResponse"
import InvalidRegister from "../interfaces/InvalidRegister"
import User from "../models/User"

/**
 * Represents the RegisterPage with various elements and actions.
 */
export default class RegisterPage {

    userApi: UserApi = new UserApi()
    user: User = new User()

    /**
     * Gets the input element for the first name.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The first name input element.
     */
    get firstNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="first-name"]')
    }

    /**
     * Gets the input element for the last name.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The last name input element.
     */
    get lastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="last-name"]')
    }

    /**
     * Gets the input element for the email.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The email input element.
     */
    get emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="email"]')
    }

    /**
     * Gets the input element for the password.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The password input element.
     */
    get passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="password"]')
    }

    /**
     * Gets the input element for confirming the password.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The confirm password input element.
     */
    get confirmPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="confirm-password"]')
    }

    /**
     * Gets the button element for signing up.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The sign-up button element.
     */
    get signUpButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="submit"]')
    }

    /**
     * Gets the alert message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The alert message element.
     */
    get alertMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="error"] .MuiAlert-message')
    }

    /**
     * Gets the first name error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The first name error message element.
     */
    get firstNameError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.Mui-required', 'First Name')
    }

    /**
     * Gets the last name error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The last name error message element.
     */
    get lastNameError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.Mui-required', 'Last Name')
    }

    /**
     * Gets the email error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The email error message element.
     */
    get emailError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.Mui-required', 'Email format')
    }

    /**
     * Gets the password error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The password error message element.
     */
    get passwordError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.Mui-required', 'Password must be')
    }

    /**
     * Gets the confirm password error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The confirm password error message element.
     */
    get confirmPasswordError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.Mui-required', 'Second password')
    }

    /**
     * Loads the sign-up page.
     * @returns {Cypress.Chainable<Window>} The window object of the loaded page.
     */
    load(): Cypress.Chainable<Window> {
        return cy.visit("/signup")
    }

    /**
     * Registers a new user using the provided user details.
     * @param {User} user - The user details to register.
     */
    register(user: User): void {
        this.firstNameInput.type(user.getFirstName())
        this.lastNameInput.type(user.getLastName())
        this.emailInput.type(user.getEmail())
        this.passwordInput.type(user.getPassword())
        this.confirmPasswordInput.type(user.getPassword())
        this.signUpButton.click()
    }

    /**
     * Registers a new user using the API.
     * @returns {Cypress.Chainable<CustomResponse>} The custom response that is extended with requestBody property.
    */
    registerUsingApi(): Cypress.Chainable<CustomResponse> {
        return this.userApi.register(this.user)
    }

    /**
     * Attempts to register a new user with invalid data.
     * @param {InvalidRegister} credentials - The invalid registration credentials.
    */
    registerWithInvalidData(credentials: InvalidRegister): void {
        this.firstNameInput.type(credentials.firstName)

        if (credentials.lastName) {
            this.lastNameInput.type(credentials.lastName)
        }

        if (credentials.email) {
            this.emailInput.type(credentials.email)
        }

        if (credentials.password) {
            this.passwordInput.type(credentials.password)
        }

        if (credentials.confirmPassword) {
            this.confirmPasswordInput.type(credentials.confirmPassword)
        }

        this.signUpButton.click()
    }

    /**
     * Validates the error message displayed for a given type of invalid registration attempt.
     * @param {string} type - The type of invalid registration attempt.
     * @param {number} index - The index of the invalid registration data in the array.
    */
    validateErrorMessage(type: string, index: number): void {
        const errorMessage = invalidRegister[index].errorMessage

        switch (type) {
            case 'invalid first name':
                this.firstNameError.should('have.text', errorMessage)
                break

            case 'invalid last name':
                this.lastNameError.should('have.text', errorMessage)
                break

            case 'invalid email':
                this.emailError.should('have.text', errorMessage)
                break

            case 'invalid password':
                this.passwordError.should('have.text', errorMessage)
                break

            case 'invalid confirm password':
                this.confirmPasswordError.should('have.text', errorMessage)
                break

            case 'email existing in DB':
                this.alertMessage.should('have.text', errorMessage)
                break

            default:
                throw new Error(`Unknown error type: ${type}`)
        }
    }
}
