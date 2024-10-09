import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    UserReqType,
    ProfileSettingsType,
    SettingsHeaderType,
    AuthenticationSettingsType
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
                return result as ProfileSettingsType;
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
                return result as SettingsHeaderType;
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
                return result as ProfileSettingsType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const postProfileSettigns = createAsyncThunk(
    'user/postProfileSettings',
    async (reqData:
        { userObj: ProfileSettingsType } &
        { accessToken: string },
        thunkAPI
    ) => {
        try {

            console.log(reqData.userObj);

            const response = await fetch(`http://localhost:8080/settings/profile`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    // 'Content-Type': 'application/json'
                    'Content-Type': `multipart/form-data`,
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
        { formData: AuthenticationSettingsType } &
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

export const uploadFile = createAsyncThunk(
    'user/uploadFile',
    async (reqData: { image: FormData, accessToken: string }, thunkAPI) => {
        try {
            console.log('IMAGE IN ACTION');
            console.log(reqData.image);

            const response = await fetch('http://localhost:8080/upload', {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                },
                body: reqData.image
            });

            const result = await response.json();
            if (response.status !== 200) {
                console.log(result);
                console.log('NOT 200');
            } else {
                console.log('STATUS 200');
                console.log(result);
            }
        } catch (err) {

        }
    }
)