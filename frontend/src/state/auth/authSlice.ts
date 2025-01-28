import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInitialAuthState {
    accessToken: null;
    userId: null;
}

const initialState: IInitialAuthState = {
    accessToken: null,
    userId: null,
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