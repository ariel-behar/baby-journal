import { Session, User } from "next-auth"

export interface ICustomSession extends Session {
    user?: User & {
        firstName: string
        lastName: string
        email: string
        isAdmin: boolean
    }
}