import NewTodoPage from "../pages/NewTodoPage";
import RegisterPage from "../pages/RegisterPage";
import TodoPage from "../pages/TodoPage";

/**
 * Test suite for adding and deleting todo items.
 */
describe('Adding and Deleting Todo', () => {

    let newTodoPage: NewTodoPage
    let registerPage: RegisterPage
    let todoPage: TodoPage
    const todoText: string = 'My first test with POM'

    /**
     * Initializes the page objects before each test.
     */
    beforeEach(() => {
        newTodoPage = new NewTodoPage()
        registerPage = new RegisterPage()
        todoPage = new TodoPage()
    });

    /**
     * Test case for adding a new todo item.
     */
    it('should add a new todo', () => {
        // Register the user using the API
        registerPage.registerUsingApi()

        // Load the new todo page
        newTodoPage.load()

        // Add a new todo item
        newTodoPage.addTodo(todoText)

        // Verify the new todo item is added
        todoPage.todoElement.should('have.text', todoText)
    });

    /**
     * Test case for deleting a todo item.
     */
    it('should delete the todo', () => {
        // Create a new todo item using the API
        newTodoPage.createNewTodoUsingApi(todoText)

        // Load the todo page
        todoPage.load()

        // Verify the todo item is present
        todoPage.todoElement.should('have.text', todoText)

        // Delete the todo item
        todoPage.deleteTodo()

        // Verify the todo item is deleted
        todoPage.noTodosElement.should('be.visible')
    })
});
