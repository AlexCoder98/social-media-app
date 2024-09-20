import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    UserInitialStateType,
    UserReqType,
    FetchUserFromDbResType
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