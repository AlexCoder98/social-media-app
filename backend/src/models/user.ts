import { model, Schema } from 'mongoose';
import { UserSchemaType } from '../types/user';

const userSchema = new Schema<UserSchemaType>({
    name: {
        type: String, required: true
    },
    surname: {
        type: String, required: true,
    },
    email: {
        type: String, required: true,
    },
    password: {
        type: String, required: true
    },
    status: String,
    profileImage: String,
    aboutMe: String
});

export const User = model<UserSchemaType>('User', userSchema);