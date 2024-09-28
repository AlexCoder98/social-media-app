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
    bio: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.bio = payload.bio;
            })
            .addCase(getEditProfile.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.email = payload.email;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.bio = payload.bio;
            })
            .addCase(postEditProfile.fulfilled, (state, { payload }) => {
                state.name = payload.name;
                state.surname = payload.surname;
                state.email = payload.email;
                state.profileImage = payload.profileImage;
                state.status = payload.status;
                state.bio = payload.bio;
            })
    }
})

export default userSlice.reducer;