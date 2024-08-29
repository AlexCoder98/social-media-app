export type AuthInitialStateType = {
    isAuth: string;
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

export type RequestResponseType = {
    statusCode: number;
    status: 'fail' | 'error';
    message: string;
};