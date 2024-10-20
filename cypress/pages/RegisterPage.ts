import UserApi from "../api/UserApi"
import User from "../models/User"

export default class RegisterPage {
    
    userApi = new UserApi()
    user = new User()

    elements = {
        firstNameInput: () => cy.get('[data-testid="first-name"]'),
        lastNameInput: () => cy.get('[data-testid="last-name"]'),
        emailInput: () => cy.get('[data-testid="email"]'),
        passwordInput: () => cy.get('[data-testid="password"]'),
        confirmPasswordInput: () => cy.get('[data-testid="confirm-password"]'),
        signUpButton: () => cy.get('[data-testid="submit"]'),
    }

    load(): Cypress.Chainable<Window> {
        return cy.visit("/signup")
    }

    register(user: User): void {
        this.elements.firstNameInput().type(user.getFirstName());
        this.elements.lastNameInput().type(user.getLastName())
        this.elements.emailInput().type(user.getEmail())
        this.elements.passwordInput().type(user.getPassword())
        this.elements.confirmPasswordInput().type(user.getPassword())
        this.elements.signUpButton().click()
    }

    registerUsingApi(): Cypress.Chainable<Cypress.Response<any>> {
        return this.userApi.register(this.user)
    }
}