import NewTodoPage from "../pages/NewTodoPage";
import RegisterPage from "../pages/RegisterPage";
import TodoPage from "../pages/TodoPage";

describe('Adding and Deleting Todo', () => {

    let newTodoPage: NewTodoPage
    let registerPage: RegisterPage
    let todoPage: TodoPage
    const todoText: string = 'My first test with POM'

    beforeEach(() => {
        newTodoPage = new NewTodoPage()
        registerPage = new RegisterPage()
        todoPage = new TodoPage()
    });

    it('should add a new todo', () => {
        registerPage.registerUsingApi()

        newTodoPage.load()
        newTodoPage.addTodo(todoText)

        todoPage.todoElement.should('have.text', todoText)
    });

    it('should delete the todo', () => {
        newTodoPage.createNewTodoUsingApi(todoText)

        todoPage.load()
        todoPage.todoElement.should('have.text', todoText)
        todoPage.deleteTodo()
        todoPage.noTodosElement.should('be.visible')
    })
});