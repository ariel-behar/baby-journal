import { Identifiable, IdType } from "@/types/common-types";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

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
}

const userSchema = new mongoose.Schema<IUserMongooseSchema>({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [20, 'Username must be at most 20 characters long']
    },
    firstName: {
        type: String,
        required: true,
        minlength: [2, 'First name must be at least 2 characters long'],
        maxlength: [20, 'First name must be at most 20 characters long']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, 'Last name must be at least 2 characters long'],
        maxlength: [20, 'Last name must be at most 20 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: [50, 'Email must be at most 50 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [20, 'Password must be at most 20 characters long']
    },
    avatarImg: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

userSchema.pre<IUserMongooseSchema>('save', function (next) {
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS as string));

    this.password = bcrypt.hashSync(this.password, salt);

    next();
});

const User = mongoose.models?.User || mongoose.model<IUserMongooseSchema>('User', userSchema);

export default User;