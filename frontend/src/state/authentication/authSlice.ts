import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthInitialStateType, RequestResponseType, SignInDataType, SignUpDataType } from '../../types/reducers/auth';

const initialState: AuthInitialStateType = {
    isAuth: sessionStorage.getItem('isAuth')! || 'false',
    accessToken: sessionStorage.getItem('accessToken')! || null,
    userId: sessionStorage.getItem('userId')! || null,
    messages: {
        signUpMessage: null,
    },
    errors: {
        signUpError: null,
        signInError: null,
        resetPasswordError: null,
    }
};

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
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, () => {
                console.log('Loading...');
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.messages.signUpMessage = payload;
                state.errors.signUpError = null;
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                state.messages.signUpMessage = null;
                state.errors.signUpError = payload as string;
            })
            .addCase(signIn.pending, () => {
                console.log('Loading...');
            })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                state.isAuth = payload.isAuth;
                state.accessToken = payload.accessToken;
                state.userId = payload.userId;
                state.errors.signInError = null;
            })
            .addCase(signIn.rejected, (state, { payload }) => {
                state.userId = null;
                state.accessToken = null;
                state.isAuth = 'false';
                state.errors.signInError = payload as string;
            })
            .addCase(signOut.pending, () => {
                console.log('Loading...');
            })
            .addCase(signOut.fulfilled, (state, { payload }) => {
                state.isAuth = payload.isAuth!;
                state.accessToken = payload.accessToken;
                state.userId = payload.userId;
            })
    }
});

export default authSlice.reducer;