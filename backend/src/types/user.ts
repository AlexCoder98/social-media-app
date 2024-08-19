import { PostSchemaType } from './post';

export interface UserSchemaType {
    name: string;
    surname: string;
    email: string;
    password: string;
    profileImage?: string;
    status?: string;
    aboutMe?: string,
    posts: PostSchemaType[],
}