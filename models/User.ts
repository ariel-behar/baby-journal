import { Identifiable, IdType } from "@/types/common-types";
import mongoose from "mongoose";

export interface IUser extends Identifiable {
    _id: IdType;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatarImg?: string;
    isAdmin: boolean;
    createdAt: string;
	updatedAt: string;
}

interface IUserMongooseSchema extends Omit<IUser, '_id' | 'createdAt' | 'updatedAt'> {
    password: string;
    repeatPassword: string;
}

const userSchema = new mongoose.Schema<IUserMongooseSchema>({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    repeatPassword: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    avatarImg: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const User = mongoose.models?.User || mongoose.model<IUserMongooseSchema>('User', userSchema);

export default User;