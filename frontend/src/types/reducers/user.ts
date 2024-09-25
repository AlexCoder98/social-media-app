export type UserInitialStateType = {
    name: string;
    surname: string;
    email: string;
    password?: string;
    profileImage?: string;
    status?: string;
    bio?: string;
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
    bio: string;
}

export type FetchSettingsHeaderType = {
    name: string;
    surname: string;
    profileImage: string;
}

export type AccessSettingsPostReqType = {
    email: string;
    oldPassword: string,
    newPassword: string,
    newPasswordConfirmation: string,
}
