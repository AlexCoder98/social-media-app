export type PostInitialStateType = {
    id: string;
    title: string;
    image: string;
    description: string;
    creator: {
        name: string;
        surname: string;
        profileImage: string;
    },
    creationDate: string;
}

export type PostsInitialStateType = {
    allPosts: PostInitialStateType[];
    usersPosts: PostInitialStateType[];
    post: PostInitialStateType | null;
    hasMore: boolean;
    page: number;
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
        profileImage: string;
    },
    creationDate: string;
}

export type GetPostReqType = {
    accessToken: string;
    postId: string;
}