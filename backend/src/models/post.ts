import { Schema, model } from "mongoose";
import { PostSchemaType } from "../types/post";

const postSchema = new Schema<PostSchemaType>({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });

export const Post = model<PostSchemaType>('Post', postSchema);