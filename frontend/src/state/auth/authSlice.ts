import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInitialAuthState {
    accessToken: string | null;
    isAuth: boolean;
    userId: string | null;
}

const initialState: IInitialAuthState = {
    accessToken: sessionStorage.getItem('accessToken'),
    isAuth: sessionStorage.getItem('accessToken') ? true : false,
    userId: sessionStorage.getItem('userId'),
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.fulfilled, (state, { payload }) => {
                state.accessToken = payload.accessToken;
                state.isAuth = true;
                state.userId = payload.userId;
            })
            .addCase(signOut.fulfilled, (state) => {
                state.accessToken = null;
                state.isAuth = false;
                state.userId = null;
            })
    }
});

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (reqData: { accessToken: string; userId: string }) => {
        const { accessToken, userId } = reqData;
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('userId', userId);

        return {
            accessToken: sessionStorage.getItem('accessToken'),
            userId: sessionStorage.getItem('userId'),
        };
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('userId');
        return 'Successfully signed out';
    }
);

export default authSlice.reducer;