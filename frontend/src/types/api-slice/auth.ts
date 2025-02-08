export type TSignInReqData = {
    email: string;
    password: string;
}

export type TSignInResData = {
    accessToken: string;
    userId: string;
}