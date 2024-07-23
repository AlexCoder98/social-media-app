import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserNecessaryData = {
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordRepeated: string;
}

type Additional<T> = {
    [P in keyof T]?: T[P]
};

type UserAdditionalData = {
    profileImage: string;
    status: string;
    aboutMe: string
}

interface UserStateType {
    isSignedIn: boolean;
    necessary: UserNecessaryData;
    additional: Additional<UserAdditionalData>
}

const initialState: UserStateType = {
    isSignedIn: false,
    necessary: {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeated: ''
    },
    additional: {
        profileImage: '',
        status: '',
        aboutMe: ''
    }

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<boolean>) => {
            state.isSignedIn = action.payload;
        },
        signOut: (state, action: PayloadAction<boolean>) => {
            state.isSignedIn = action.payload;
        },
        // signUp: (state, action: PayloadAction<UserNecessaryData>) => {
        //     state.necessary = action.payload;
        // },
        editProfile: (state, action: PayloadAction<UserStateType>) => {
            state.isSignedIn = action.payload.isSignedIn;
            state.necessary = action.payload.necessary;
            state.additional = action.payload.additional;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.necessary = payload;
        })
    }
});

export const signUp = createAsyncThunk(
    'user/signOut',
    async ({ payload }: PayloadAction<UserNecessaryData>) => {
        return payload;
    }
)

export const { signIn, signOut, editProfile } = userSlice.actions;
export default userSlice.reducer;