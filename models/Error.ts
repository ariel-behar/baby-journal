import { CredentialsSignin } from "next-auth";

export class InvalidLoginError extends CredentialsSignin {
    message = "Invalid login credentials!";
}

export class NotFoundError extends Error {}