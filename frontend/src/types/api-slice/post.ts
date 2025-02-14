type TPostCreator = {
    id: string;
    name: string;
    surname: string;
    profileImage: string;
}

export type TPostData = {
    id: string;
    title: string;
    image: string;
    description: string;
    creator: TPostCreator;
    creationDate: string;
}