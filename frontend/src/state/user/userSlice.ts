import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserNecessaryData, UserInitialStateType } from '../../types/reducers/user';
import { RequestResponseType } from "../../types/reducers/auth";

type RequestResponse = {
    statusCode: number;
    status: 'fail' | 'error';
    message: string;
}

type GetUserReqType = {
    // userData: UserNecessaryData,
    accessToken: string;
    userId: string;
}

type FetchUserType = {
    name: string;
    surname: string;
    profileImage: string;
    status: string;
    aboutMe: string;
}

const initialState: UserInitialStateType = {
    necessary: {
        name: null,
        surname: null,
        email: null,
        password: null,
    },
    additional: {
        profileImage: null,
        status: null,
        aboutMe: null,
    },
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async (getUserReq: GetUserReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/:${getUserReq.userId}`, {
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
                console.log('GET USER REQ RESULT');
                console.log(result);

                return result as FetchUserType;
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
                state.necessary.name = payload.name;
                state.necessary.surname = payload.surname;
                state.additional.profileImage = payload.profileImage;
                state.additional.status = payload.status;
                state.additional.aboutMe = payload.aboutMe;
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                console.log(payload);
            })
    }
})

export default userSlice.reducer;