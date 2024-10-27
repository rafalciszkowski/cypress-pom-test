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
    it('should register user', () => {
        // Load the registration page
        registerPage.load()

        // Register the user
        registerPage.register(user)

        // Verify the no todos element is visible
        todoPage.noTodosElement.should('be.visible')
    })
})
