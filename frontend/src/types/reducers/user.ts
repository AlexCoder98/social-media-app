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

export type ProfileSettingsType = {
    name: string;
    surname: string;
    profileImage?: File | null | string;
    status: string;
    bio: string;
}

export type SettingsHeaderType = {
    name: string;
    surname: string;
    profileImage: string;
}

export type AuthenticationSettingsType = {
    email: string;
    oldPassword: string,
    newPassword: string,
    newPasswordConfirmation: string,
}
