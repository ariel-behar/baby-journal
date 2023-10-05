import dbConnect from "./dbConnect";
import { IdType } from "@/types/common-types";
import User, { IUser } from "@/models/User";
import { unstable_noStore as noStore } from "next/cache";

export const getUser = async (userId: IdType) => {
    noStore();
    
    try {
        dbConnect();

        const user:IUser | null = await User.findById(userId);

        return user;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch user data!');
    }
}

export const getUsers = async () => {
    noStore();

    try {
        dbConnect();

        const users:IUser[] = await User.find().lean();

        return users;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch users!');
    }
}
