import { createSlice } from "@reduxjs/toolkit";

import {
    getUser,
    getEditProfile,
    postEditProfile
} from './actions';

import { UserInitialStateType } from '../../types/reducers/user';

const initialState: UserInitialStateType = {
    name: '',
    surname: '',
    email: '',
    password: '',
    profileImage: '',
    status: '',
    aboutMe: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, () => {
                console.log('Fetching the user...');
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.aboutMe = payload.aboutMe;
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                console.log(payload);
            })
            .addCase(getEditProfile.pending, () => {
                console.log('Fetching...')
            })
            .addCase(getEditProfile.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.email = payload.email;
                // state.password = payload.password;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.aboutMe = payload.aboutMe;
            })
            .addCase(getEditProfile.rejected, (state, { payload }) => {
                console.log(payload);
            })
            .addCase(postEditProfile.pending, () => {
                console.log('Updating user profile...')
            })
            .addCase(postEditProfile.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.email = payload.email;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.aboutMe = payload.aboutMe;
            })
            .addCase(postEditProfile.rejected, (state, { payload }) => {
                console.log(payload);
            })
    }
})

export default userSlice.reducer;