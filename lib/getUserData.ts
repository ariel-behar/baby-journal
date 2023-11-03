import { unstable_noStore as noStore } from "next/cache";

import dbConnect from "./dbConnect";

import { IdType } from "@/types/common-types";
import User, { IUser } from "@/models/User";

import { NotFoundError } from "@/models/Error";

export const getUser = async (userId: IdType, selectFields?: string[]) => {
    noStore();
    
    try {
        dbConnect();
        let user:IUser | Partial<IUser> | null;

        if(selectFields) {
            user = await User.findById(userId).select(selectFields.join(' ')) as Partial<IUser> | null;
        } else {
            user = await User.findById(userId) as IUser | null;
        }
        

        if(!user) {
            throw new NotFoundError('Failed to fetch user data!');
        }

        return JSON.parse(JSON.stringify(user));
    } catch(error) {
       throw error;
    }
}

export const getUsers = async () => {
    noStore();

    try {
        dbConnect();

        const users:IUser[] = await User.find().lean();

        if(!users) {
            throw new NotFoundError('Failed to fetch users!');
        }

        return JSON.parse(JSON.stringify(users));
    } catch(error) {
        throw error;
    }
}
