import { Identifiable, IdType } from "@/types/common-types";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { emailRegex, passwordRegex } from "@/utils/regex";

export interface IUser extends Identifiable {
    _id: IdType;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    img?: string;
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
        minlength: [6, 'Username must be at least 6 characters long'],
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
        match: [emailRegex, 'Email is not valid'],
    },
    password: {
        type: String,
        required: true,
        match: [passwordRegex, 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character'],
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    img: {
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