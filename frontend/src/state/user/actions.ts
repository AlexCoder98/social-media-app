import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    UserInitialStateType,
    UserReqType,
    FetchUserFromDbResType,
    FetchSettingsHeaderType,
    AccessSettingsPostReqType
} from '../../types/reducers/user';

import { RequestResponseType } from "../../types/reducers/auth";

export const getUser = createAsyncThunk(
    'user/getUser',
    async (getUserReq: UserReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/profile`, {
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
    async (userObj: UserReqType & UserInitialStateType & { confirmPassword: string }, thunkAPI) => {
        try {
            if (userObj.password !== userObj.confirmPassword) {
                throw new Error('New password was not confirmed.');
            }

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

export const getSettings = createAsyncThunk(
    'user/getSetting',
    async (accessToken: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/settings`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as FetchSettingsHeaderType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const getProfileSettings = createAsyncThunk(
    'user/getProfileSettings',
    async (accessToken: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/settings/profile`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
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

export const postProfileSettigns = createAsyncThunk(
    'user/postProfileSettings',
    async (reqData:
        { userObj: FetchUserFromDbResType } &
        { accessToken: string },
        thunkAPI
    ) => {
        try {
            const response = await fetch(`http://localhost:8080/settings/profile`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData.userObj)
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

export const getAuthenticationSettings = createAsyncThunk(
    'user/getAuthenticationSettings',
    async (accessToken: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/settings/authentication`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as string;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const postAuthenticationSettings = createAsyncThunk(
    'user/postAuthenticationSettings',
    async (reqData:
        { formData: AccessSettingsPostReqType } &
        { accessToken: string },
        thunkAPI
    ) => {
        try {
            const response = await fetch(`http://localhost:8080/settings/authentication`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData.formData)
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