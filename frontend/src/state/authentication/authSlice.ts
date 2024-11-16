import { createSlice } from '@reduxjs/toolkit';

import {
    signUp,
    signIn,
    signOut,
} from './actions';

import { AuthInitialStateType } from '../../types/reducers/auth';

const initialState: AuthInitialStateType = {
    isAuth: sessionStorage.getItem('isAuth')! || 'false',
    accessToken: sessionStorage.getItem('accessToken')! || null,
    userId: sessionStorage.getItem('userId')! || null,
    loading: false,
};



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                state.isAuth = payload.isAuth;
                state.accessToken = payload.accessToken;
                state.userId = payload.userId;
            })
            .addCase(signIn.rejected, (state, { payload }) => {
                state.userId = null;
                state.accessToken = null;
                state.isAuth = 'false';
            })
            .addCase(signOut.fulfilled, (state, { payload }) => {
                state.isAuth = payload.isAuth!;
                state.accessToken = payload.accessToken;
                state.userId = payload.userId;
            })
    }
});

export default authSlice.reducer;