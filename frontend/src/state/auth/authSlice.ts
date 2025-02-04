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
    // extraReducers: (builder) => {
    // builder.addCase();
    // }
});

export const signIn = createAsyncThunk(
    'auth/signIn',
    async () => {
        console.log('Click');
    }
);

export default authSlice.reducer;