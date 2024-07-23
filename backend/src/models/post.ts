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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const Post = model<PostSchemaType>('Post', postSchema);