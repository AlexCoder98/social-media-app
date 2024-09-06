export type PostInitialStateType = {
    id: string;
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
    post: PostInitialStateType | null;
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
    id: string;
    title: string;
    image: string;
    description: string;
    creator: {
        name: string;
        surname: string;
    };
}

export type GetPostReqType = {
    accessToken: string;
    postId: string;
}