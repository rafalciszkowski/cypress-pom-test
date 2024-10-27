export default interface CustomResponse extends Cypress.Response<any> {
    requestBody: string
}