import { Session, User } from "next-auth"

export interface ICustomSession extends Session {
    user?: User & {
        firstName: string
        lastName: string
        email: string
        isAdmin: boolean
    }
}

export interface IIconProps {
    sizeClassName?: "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8" | "size-9" | "size-10"
}

export interface IRoute {
    title: string,
    path: string
}