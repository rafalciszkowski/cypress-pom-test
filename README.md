# Cypress POM TypeScript

## Overview:
This project demonstrates the use of Cypress with the Page Object Model (POM) pattern and TypeScript. It includes tests for login functionality, both with valid and invalid credentials, ensuring robust test coverage and maintainability.

## Installation
1. To get started, clone the repository and install the dependencies:
    ```bash
    git clone https://github.com/rafalciszkowski/cypress-pom-typescript.git
    cd cypress-pom-typescript
    npm install

## Running Tests
1. You can run the tests using the following commands:
   * Run all tests in headless mode:
     ```bash
     npm run test
   * Open Cypress Test Runner:
     ```bash
     npx cypress open 

## Docker execution:
1. Run CMD terminal as administrator
2. Use the following command:
    ```bash
    docker build -t cypress .
3. then:
    ```bash
    docker run --rm cypress
4. Command to turn off Docker after testing:
    ```bash
    wsl --shutdown
