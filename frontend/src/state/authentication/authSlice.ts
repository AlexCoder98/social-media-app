import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthStateType, RequestResponseType, SignInDataType } from '../../types/reducers/auth';
import { UserNecessaryData } from '../../types/reducers/user';

const initialState: AuthStateType = {
    isAuth: false,
    _id: null,
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
    async (newUser: UserNecessaryData, thunkAPI) => {
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
                return result as { _id: string };
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async (isAuth: boolean) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return isAuth;
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
    }
});

export default authSlice.reducer;