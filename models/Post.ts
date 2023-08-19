import { Identifiable, IdType } from "@/types/common-types";
import mongoose from "mongoose";

export interface IPost extends Identifiable {
	_id: IdType;
	title: string;
	description: string;
	img: string;
	userId: IdType;
	slug: string;
}

interface IPostMongooseSchema extends Omit<IPost, '_id' | 'userId'> {
	userId: mongoose.Schema.Types.ObjectId;
}

const postSchema = new mongoose.Schema<IPostMongooseSchema>({
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50
	},
	description: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 200
	},
	img: {
		type: String,
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	slug: {
		type: String,
		unique: true,
		required: true
	}
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model<IPostMongooseSchema>('Post', postSchema);

export default Post