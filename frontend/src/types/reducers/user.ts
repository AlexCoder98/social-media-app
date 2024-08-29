export type UserInitialStateType = {
    name: string;
    surname: string;
    email: string;
    password: string;
    profileImage?: string;
    status?: string;
    aboutMe?: string;
}
export type UserReqType = {
    accessToken: string;
    userId: string;
}

export type FetchUserFromDbResType = {
    name: string;
    surname: string;
    profileImage: string;
    status: string;
    aboutMe: string;
}
