import { Types } from 'mongoose';

export interface PostSchemaType {
    _id: Types.ObjectId;
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