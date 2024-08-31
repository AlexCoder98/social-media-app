import { Types } from 'mongoose';

export interface PostSchemaType {
    title: string;
    image: string;
    description: string;
    creator: {
        _id: Types.ObjectId;
        name: string;
        surname: string;
    };
    creationDate: Date
}