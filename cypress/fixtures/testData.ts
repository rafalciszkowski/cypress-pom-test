import InvalidLogin from "../interfaces/InvalidLogin"

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
