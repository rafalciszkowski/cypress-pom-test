export default interface InvalidRegister {
    firstName: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    errorMessage: string;
    type: string;
}