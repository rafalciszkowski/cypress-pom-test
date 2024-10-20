import User from "../models/User"
import RegisterPage from "../pages/RegisterPage"
import TodoPage from "../pages/TodoPage"

describe('Register a New User', () => {

    let registerPage: RegisterPage
    let user: User
    let todoPage: TodoPage
    
    beforeEach(() => {
        registerPage = new RegisterPage()
        user = new User()
        todoPage = new TodoPage()
    });

    it('should register user', () => {
        registerPage.load()
        registerPage.register(user)

        todoPage.elements.noTodos().should('be.visible')
    })
})