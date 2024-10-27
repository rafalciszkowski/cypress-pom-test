import UserApi from "../api/UserApi"
import CustomResponse from "../interfaces/CustomResponse"
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
}
