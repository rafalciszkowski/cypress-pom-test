import { faker } from '@faker-js/faker'

export default class User {

    private firstName: string
    private lastName: string
    private email: string
    private password: string

    constructor () {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.email = faker.internet.email()
        this.password = 'testPass1234'
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this.lastName
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }
}