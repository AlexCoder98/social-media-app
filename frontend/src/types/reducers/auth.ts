export type AuthInitialStateType = {
    isAuth: string;
    accessToken: string | null;
    userId: string | null;
    loading: boolean;
};

export type SignUpDataType = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

export type SignInDataType = {
    email: string;
    password: string;
};

export type ResetPasswordType = {
    email: string;
    newPassword: string;
    newPasswordConfirmation: string;
}

export type RequestResponseType = {
    statusCode: number;
    status: 'fail' | 'error';
    message: string;
};