import { Types } from 'mongoose';

import { PostSchemaType } from './post';

export interface UserSchemaType {
    name: string;
    surname: string;
    email: string;
    password: string;
    posts: Types.Array<PostSchemaType>,
    profileImage?: string;
    status?: string;
    bio: string;
    location: {
        country: string;
        city: string;
    }
}

export type ReqBodyUserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
    status: string;
    profileImage: string;
    bio: string;
}
