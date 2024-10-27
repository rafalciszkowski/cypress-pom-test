import { invalidRegister } from "../fixtures/testData"
import User from "../models/User"
import RegisterPage from "../pages/RegisterPage"
import TodoPage from "../pages/TodoPage"

/**
 * Test suite for registering a new user.
 */
describe('Register a New User', () => {

    let registerPage: RegisterPage
    let user: User
    let todoPage: TodoPage

    /**
     * Initializes the page objects and user before each test.
     */
    beforeEach(() => {
        registerPage = new RegisterPage()
        user = new User()
        todoPage = new TodoPage()
    })

    /**
     * Test case for registering a new user and verifying the no todos element is visible.
     */
    it('should register new user', () => {
        // Load the registration page
        registerPage.load()

        // Register the user
        registerPage.register(user)

        // Verify the no todos element is visible
        todoPage.noTodosElement.should('be.visible')
    })

    /**
     * Iterates over the invalidRegister array and performs registration attempts with each set of invalid credentials.
     * Validates the error messages for each type of invalid registration attempt.
    */
    Cypress._.times(invalidRegister.length, (index) => {
        it(`should not register new user - error type: ${invalidRegister[index].type}`, () => {
            // Load the registration page
            registerPage.load()

            // Attempt to register with invalid data
            registerPage.registerWithInvalidData(invalidRegister[index])

            // Validate the error message
            registerPage.validateErrorMessage(invalidRegister[index].type, index)
        })
    })
})
