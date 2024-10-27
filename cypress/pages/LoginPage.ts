import CustomResponse from "../interfaces/CustomResponse";
import RegisterPage from "./RegisterPage";
import { invalidLogin } from "../fixtures/testData";
import InvalidLogin from "../interfaces/InvalidLogin";

export default class LoginPage {

    registerPage: RegisterPage = new RegisterPage();

    /**
     * Gets the email input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The email input element.
     */
    get emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="email"]');
    }

    /**
     * Gets the password input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The password input element.
     */
    get passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="password"]');
    }

    /**
     * Gets the login button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The login button element.
     */
    get loginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="submit"]');
    }

    /**
     * Gets the email error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The email error message element.
     */
    get emailError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#email-helper-text');
    }

    /**
     * Gets the password error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The password error message element.
     */
    get passwordError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#password-helper-text');
    }

    /**
     * Gets the alert message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The alert message element.
     */
    get alertMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="error-alert"] .MuiAlert-message');
    }

    /**
     * Loads the login page.
     * @returns {Cypress.Chainable<Window>} The window object of the loaded page.
     */
    load(): Cypress.Chainable<Window> {
        return cy.visit('/login');
    }

    /**
     * Logs in using the credentials from the registration API response.
     */
    login(): void {
        this.registerPage.registerUsingApi().then((response: CustomResponse) => {
            const { email, password } = JSON.parse(response.requestBody);

            this.emailInput.type(email);
            this.passwordInput.type(password);
            this.loginButton.click();
        });
    }

    /**
     * Attempts to log in with invalid credentials.
     * @param {InvalidLogin} credentials - The invalid login credentials.
     * @param {string} type - The type of invalid login attempt.
     */
    loginWithInvalidData(credentials: InvalidLogin, type: string): void {
        this.emailInput.type(credentials.email);

        if (credentials.password === 'empty') {
            this.passwordInput.type(credentials.password).clear();
        } else {
            this.passwordInput.type(credentials.password);
        }

        if (!['incorrect email', 'empty password'].includes(type)) {
            cy.intercept('/api/v1/users/login').as('loginResponse');
        }

        this.loginButton.click();
    }

    /**
     * Validates the error message displayed for a given type of invalid login attempt.
     * @param {string} type - The type of invalid login attempt.
     * @param {number} index - The index of the invalid login data in the array.
     */
    validateErrorMessage(type: string, index: number): void {
        const errorMessage = invalidLogin[index].errorMessage;

        const checkResponse = (code: number, message: string): void => {
            cy.wait('@loginResponse').should(({ response }) => {
                expect(response.statusCode).to.eq(code);
                expect(response.statusMessage).to.eq(message);
            });
        };

        switch (type) {
            case 'incorrect email':
                this.emailError.should('have.text', errorMessage);
                break;

            case 'empty password':
                this.passwordError.should('have.text', errorMessage);
                break;

            case 'password not valid':
            case 'no email in DB':
                checkResponse(400, 'Bad Request');
                this.alertMessage.should('have.text', errorMessage);
                break;

            case 'email/password combination not correct':
                checkResponse(401, 'Unauthorized');
                this.alertMessage.should('have.text', errorMessage);
                break;

            default:
                throw new Error(`Unknown error type: ${type}`);
        }
    }
}
