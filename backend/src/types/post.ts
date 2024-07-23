import { Types } from 'mongoose';

export interface PostSchemaType {
    title: string;
    image: string;
    description: string;
    user: Types.ObjectId;
}