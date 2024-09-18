import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    RequestResponseType,
    SignInDataType,
    SignUpDataType,
    ResetPasswordType
} from '../../types/reducers/auth';

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (newUser: SignUpDataType, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            const result = await response.json();
            if (response.status !== 201) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return (result as { message: string }).message;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (signInData: SignInDataType, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signInData),
            });
            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as { accessToken: string, userId: string, isAuth: string };
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async (isAuth: string) => {
        sessionStorage.setItem('isAuth', isAuth);
        sessionStorage.setItem('accessToken', '');
        sessionStorage.setItem('userId', '');

        return {
            isAuth: sessionStorage.getItem('isAuth'),
            accessToken: sessionStorage.getItem('accessToken'),
            userId: sessionStorage.getItem('userId'),
        };
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (reqData: ResetPasswordType, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqData)
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return (result as { message: string }).message;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)