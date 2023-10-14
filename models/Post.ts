import { Identifiable, IdType } from "@/types/common-types";
import mongoose from "mongoose";
import { IUser } from "./User";

export interface IPost extends Identifiable {
	_id: IdType;
	title: string;
	description: string;
	img: string;
	userId: IdType;
	createdAt: string;
	updatedAt: string;
}

export interface IPostPopulated extends Omit<IPost, 'userId'> {
	userId: IUser;
}

interface IPostMongooseSchema extends Omit<IPost, '_id' | 'userId' | 'createdAt' | 'updatedAt'> {
	userId: mongoose.Schema.Types.ObjectId;
}

const postSchema = new mongoose.Schema<IPostMongooseSchema>({
	title: {
		type: String,
		required: true,
		minlength: [3, 'Title must be at least 3 characters long'],
		maxlength: [50, 'Title must be at most 50 characters long']
	},
	description: {
		type: String,
		required: true,
		minlength: [3, 'Title must be at least 3 characters long'],
		maxlength: [200, 'Title must be at most 200 characters long']
	},
	img: {
		type: String,
		required: [true, 'Image is required']
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'User ID is required']
	}
}, { timestamps: true });

const Post = mongoose.models?.Post || mongoose.model<IPostMongooseSchema>('Post', postSchema);

export default Post