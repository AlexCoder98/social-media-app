import { createSlice } from '@reduxjs/toolkit';

import {
    signUp,
    signIn,
    signOut
} from './actions';

import { AuthInitialStateType } from '../../types/reducers/auth';

const initialState: AuthInitialStateType = {
    isAuth: sessionStorage.getItem('isAuth')! || 'false',
    accessToken: sessionStorage.getItem('accessToken')! || null,
    userId: sessionStorage.getItem('userId')! || null,
};



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
                // state.messages.signUpMessage = payload;
                // state.errors.signUpError = null;
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                // state.messages.signUpMessage = null;
                // state.errors.signUpError = payload as string;
            })
            .addCase(signIn.pending, () => {
                console.log('Loading...');
            })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                state.isAuth = payload.isAuth;
                state.accessToken = payload.accessToken;
                state.userId = payload.userId;
                // state.errors.signInError = null;
            })
            .addCase(signIn.rejected, (state, { payload }) => {
                state.userId = null;
                state.accessToken = null;
                state.isAuth = 'false';
                // state.errors.signInError = payload as string;
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