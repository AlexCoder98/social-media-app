import { createSlice } from "@reduxjs/toolkit";

interface UserStateType {
    isSignedIn: boolean;
}

const initialState: UserStateType = {
    isSignedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isSignedIn = true;
        },
        signOut: (state) => {
            state.isSignedIn = false;
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;