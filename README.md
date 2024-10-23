# cypress-pom-typescript

Docker execution:
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
