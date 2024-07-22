import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserNecessaryData = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

type Additional<T> = {
    [P in keyof T]?: T[P]
};

type UserAdditionalData = {
    profileImage: string;
    status: string;
    aboutMe: string
}

type User = {
    necessary: UserNecessaryData;
    additional: Additional<UserAdditionalData>
}

interface UserStateType {
    isSignedIn: boolean;
    userObj: User;
}

const initialState: UserStateType = {
    isSignedIn: false,
    userObj: {
        necessary: {
            name: '',
            surname: '',
            email: '',
            password: '',
        },
        additional: {
            profileImage: '',
            status: '',
            aboutMe: ''
        }
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
        signUp: (state, action: PayloadAction<UserNecessaryData>) => {
            state.isSignedIn = true;
            state.userObj.necessary = action.payload;
        },
        editProfile: (state, action: PayloadAction<User>) => {
            state.userObj = action.payload;
        }
    }
});

export const { signIn, signOut, signUp, editProfile } = userSlice.actions;
export default userSlice.reducer;