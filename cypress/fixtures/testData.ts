import InvalidLogin from "../interfaces/InvalidLogin"
import InvalidRegister from "../interfaces/InvalidRegister"

export const itemText: string[] = [
    'first item',
    'second item',
    'third item'
]

export const invalidLogin: InvalidLogin[] = [
    {
        email: 'x',
        password: 'Random_1234',
        type: 'incorrect email',
        errorMessage: 'Please Insert a correct Email format',
    },
    {
        email: 'test@test.com',
        password: 'empty',
        type: 'empty password',
        errorMessage: 'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    },
    {
        email: 'test@test.com',
        password: 'x',
        type: 'password not valid',
        errorMessage: 'Please Fill a correct Password',
    },
    {
        email: 'not_existed1234@test.com',
        password: 'Not_existed1234',
        type: 'no email in DB',
        errorMessage: 'We could not find the email in the database',
    },
    {
        email: 'test@test.com',
        password: 'Not_existed1234',
        type: 'email/password combination not correct',
        errorMessage: 'The email and password combination is not correct, please fill a correct email and password',
    }
]

export const invalidRegister: InvalidRegister[] = [
    {
        firstName: 'x',
        errorMessage: 'First Name is required, and it should be more than 3 characters',
        type: 'invalid first name'
    },
    {
        firstName: 'John',
        lastName: 'x',
        errorMessage: 'Last Name is required, and it should be more than 3 characters',
        type: 'invalid last name'
    },
    {
        firstName: 'John',
        lastName: 'Snow',
        email: 'x',
        errorMessage: 'Please Insert a correct Email format',
        type: 'invalid email'
    },
    {
        firstName: 'John',
        lastName: 'Snow',
        email: 'test090909@test.com',
        password: 'x',
        errorMessage: 'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        type: 'invalid password'
    },
    {
        firstName: 'John',
        lastName: 'Snow',
        email: 'test090909@test.com',
        password: 'hfw9earhdfslkP#$',
        confirmPassword: 'x',
        errorMessage: 'Second password does not match the first Password',
        type: 'invalid confirm password'
    },
    {
        firstName: 'John',
        lastName: 'Snow',
        email: 'test@test.com',
        password: 'fjdasoeraQQ^&*',
        confirmPassword: 'fjdasoeraQQ^&*',
        errorMessage: 'Email is already exists in the Database',
        type: 'email existing in DB'
    }
]