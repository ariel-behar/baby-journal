import { CredentialsSignin } from "next-auth";

export class InvalidLoginError extends CredentialsSignin {
    message = "Invalid login credentials!";
}

export class InvalidDataError extends Error {
}

export class NotFoundError extends Error {}

