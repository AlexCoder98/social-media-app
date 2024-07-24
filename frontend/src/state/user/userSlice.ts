import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

type IsSignedIn = 'signed in' | 'signed out';

interface UserStateType {
    isSignedIn: IsSignedIn;
    userObj: User;
}

const initialState: UserStateType = {
    isSignedIn: 'signed out',
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
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, () => {
                console.log('Loading...');
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.userObj.necessary = action.payload;
            })
            .addCase(signIn.pending, () => {
                console.log('Signing in...');
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isSignedIn = action.payload;
            })
            .addCase(updateUserData.pending, () => {
                console.log('Saving changes...');
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.userObj = action.payload;
            })
            .addCase(signOut.pending, () => {
                console.log('Signing out...');
            })
            .addCase(signOut.fulfilled, (state, action) => {
                state.isSignedIn = action.payload;
            })
    }
});

export const signUp = createAsyncThunk(
    'user/signUp',
    async (newUser: UserNecessaryData) => {
        const response = await fetch('http://localhost:8080/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        const data = await response.json();
        console.log(data);
        return newUser;
    }
);

export const signIn = createAsyncThunk(
    'user/signIn',
    async (isSignedIn: IsSignedIn) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return isSignedIn;
    }
);

export const updateUserData = createAsyncThunk(
    'user/updateProfile',
    async (updatedUserData: User) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return updatedUserData;
    }
);

export const signOut = createAsyncThunk(
    'user/signOut',
    async (isSignedIn: IsSignedIn) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return isSignedIn;
    }
)

export default userSlice.reducer;