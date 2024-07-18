import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    name: string;
    surname: string;
    profileImage: string;
    email: string;
    password: string;
}

interface UserStateType {
    isSignedIn: boolean;
    userObj: User;
}

const initialState: UserStateType = {
    isSignedIn: false,
    userObj: {
        name: '',
        surname: '',
        profileImage: '',
        email: '',
        password: ''
    }
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
        },
        signUp: (state, action: PayloadAction<User>) => {
            state.isSignedIn = true;
            state.userObj = action.payload;
        }
    }
});

export const { signIn, signOut, signUp } = userSlice.actions;
export default userSlice.reducer;