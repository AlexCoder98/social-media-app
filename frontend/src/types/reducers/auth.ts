export type AuthStateType = {
    isAuth: boolean;
    accessToken: string | null;
    userId: string | null;
    messages: {
        signUpMessage: string | null;
    }
    errors: {
        signUpError: string | null;
        signInError: string | null;
        resetPasswordError: string | null;
    };
};

export type RequestResponseType = {
    statusCode: number;
    status: 'fail' | 'error';
    message: string;
};

export type SignInDataType = {
    email: string;
    password: string;
};