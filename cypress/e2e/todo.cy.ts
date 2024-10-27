import NewTodoPage from "../pages/NewTodoPage"
import RegisterPage from "../pages/RegisterPage"
import TodoPage from "../pages/TodoPage"
import { itemText } from "../fixtures/testData"


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
    })

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
        todoPage.todoTextElement.should('have.text', todoText)
    })

    /**
     * Test case for deleting a todo item.
     */
    it('should delete the todo', () => {
        // Create a new todo item using the API
        newTodoPage.createNewTodoUsingApi(todoText, false)

        // Load the todo page
        todoPage.load()

        // Verify the todo item is present
        todoPage.todoTextElement.should('have.text', todoText)

        // Delete the todo item
        todoPage.deleteTodo()

        // Verify the todo item is deleted
        todoPage.noTodosElement.should('be.visible')
    })

    /**
     * Test case for adding multiple todos
     */
    it('should add multiple todos', () => {
        // Register the user using the API
        registerPage.registerUsingApi()

        // Load the new todo page
        todoPage.load()

        // Add multiple todos and validate list of todos
        todoPage.addMultipleTodos(itemText)
        todoPage.validateTodoList(itemText)
    })

    /**
     * Test case for validating todo items CSS properties.
     */
    it('should validate todo items css properties', () => {
        // Create a new todo item using the API
        newTodoPage.createNewTodoUsingApi(todoText, false)

        // Load the todo page
        todoPage.load()

        // Validate the CSS properties of the todo items before completion
        todoPage.validateTodoListCss(false)

        // Click the checkbox to mark the todo as completed
        todoPage.clickCheckbox()

        // Validate the CSS properties of the todo items after completion
        todoPage.validateTodoListCss(true)
    })

    it('should not add a new todo', () => {
        // Register the user using the API
        registerPage.registerUsingApi()

        // Load the new todo page
        newTodoPage.load()

        // Click the Create Todo button
        newTodoPage.createTodoButton.click()

        // Verify the error message
        newTodoPage.validateErrorMessage()
    })
})
