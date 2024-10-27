import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";
import { invalidLogin } from "../fixtures/testData";

describe('Login Functionality Tests', () => {
    
    let loginPage: LoginPage;
    let todoPage: TodoPage;

    /**
     * Initializes the pages and loads the login page before each test.
     */
    beforeEach(() => {
        loginPage = new LoginPage();
        todoPage = new TodoPage();
        loginPage.load();
    });

    /**
     * Tests the login functionality with valid credentials.
     */
    it('should successfully log in with valid credentials', () => {
        loginPage.login();
        todoPage.noTodosElement.should('be.visible');
    });

    /**
     * Tests the login functionality with invalid credentials.
     * Iterates over the invalidLogin array and performs login attempts with each set of invalid credentials.
     */
    Cypress._.times(invalidLogin.length, (index) => {
        it(`should display error for invalid login - ${invalidLogin[index].type}`, () => {
            loginPage.loginWithInvalidData(invalidLogin[index], invalidLogin[index].type);
            loginPage.validateErrorMessage(invalidLogin[index].type, index);
        });
    });
});
