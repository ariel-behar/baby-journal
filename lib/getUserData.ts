import { unstable_noStore as noStore } from "next/cache";

import dbConnect from "./dbConnect";

import { IdType } from "@/types/common-types";
import User, { IUser } from "@/models/User";

import { NotFoundError } from "@/models/Error";

export const getUser = async (userId: IdType) => {
    noStore();
    
    try {
        dbConnect();

        const user:IUser | null = await User.findById(userId);

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
