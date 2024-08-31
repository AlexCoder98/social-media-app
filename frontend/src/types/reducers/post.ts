// export type PostInitialStateType = {
//     _id: string;
//     title: string;
//     description: string;
//     creator?: string;
//     creationDate: string;
//     image?: string;
// }
export type PostInitialStateType = {
    postId: string;
    title: string;
    image: string;
    description: string;
    creator: {
        name: string;
        surname: string;
    }
}

export type PostsInitialStateType = {
    posts: PostInitialStateType[];
    error: string;
    message: string;
}

export type PostReqType = {
    accessToken: string;
    post: {
        title: string;
        description: string;
        image?: string;
    }
}

export type PostResponseType = {
    postId: string;
    title: string;
    image: string;
    description: string;
    creator: {
        name: string;
        surname: string;
    };
}