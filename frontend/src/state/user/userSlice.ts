import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInitialStateType, UserReqType, FetchUserFromDbResType } from '../../types/reducers/user';
import { RequestResponseType } from "../../types/reducers/auth";

const initialState: UserInitialStateType = {
    name: '',
    surname: '',
    email: '',
    password: '',
    profileImage: '',
    status: '',
    aboutMe: '',
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async (getUserReq: UserReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/${getUserReq.userId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getUserReq.accessToken}`,
                    'Content-Type': 'application/json'
                },
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as FetchUserFromDbResType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const getEditProfile = createAsyncThunk(
    'user/getEditProfile',
    async (getUserReq: UserReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/${getUserReq.userId}/edit`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getUserReq.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            }
            return result as UserInitialStateType;
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const postEditProfile = createAsyncThunk(
    'user/postEditProfile',
    async (userObj: UserReqType & UserInitialStateType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/${userObj.userId}/edit`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${userObj.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj),
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as UserInitialStateType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

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
                state.password = payload.password;
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
                state.password = payload.password;
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