import UserApi from "../api/UserApi"
import User from "../models/User"

export default class RegisterPage {
    
    userApi: UserApi = new UserApi()
    user: User = new User()

    get firstNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="first-name"]')
    }
    
    get lastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="last-name"]')
    } 

    get emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="email"]')
    } 

    get passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="password"]')
    } 

    get confirmPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="confirm-password"]')
    } 

    get signUpButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="submit"]')
    } 

    load(): Cypress.Chainable<Window> {
        return cy.visit("/signup")
    }

    register(user: User): void {
        this.firstNameInput.type(user.getFirstName());
        this.lastNameInput.type(user.getLastName())
        this.emailInput.type(user.getEmail())
        this.passwordInput.type(user.getPassword())
        this.confirmPasswordInput.type(user.getPassword())
        this.signUpButton.click()
    }

    registerUsingApi(): Cypress.Chainable<Cypress.Response<any>> {
        return this.userApi.register(this.user)
    }
}