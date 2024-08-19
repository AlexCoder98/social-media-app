import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type RequestResponse = {
    statusCode: number;
    status: 'fail' | 'error';
    message: string;
}

type UserNecessaryData = {
    _id?: string | null;
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
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
    errors: {
        signUpError: string | null;
        signInError: string | null;
    }
}

const initialState: UserStateType = {
    isSignedIn: false,
    userObj: {
        necessary: {
            _id: null,
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        additional: {
            profileImage: '',
            status: '',
            aboutMe: ''
        }
    },
    errors: {
        signUpError: null,
        signInError: null,
    }
}

export const signUp = createAsyncThunk(
    'user/signUp',
    async (newUser: UserNecessaryData, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            const result = await response.json();

            console.log(result);

            if (response.status !== 201) {
                throw new Error((result as RequestResponse).message);
            } else {
                return (result as { message: string }).message;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const signIn = createAsyncThunk(
    'user/signIn',
    async (signInData: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signInData),
            });

            const result = await response.json();

            console.log('RESPONSE');
            console.log(response);

            console.log('RESULT');
            console.log(result);

            if (response.status !== 200) {
                throw new Error((result as RequestResponse).message);
            } else {
                return result as { _id: string };
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
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
    async (isSignedIn: boolean) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return isSignedIn;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, () => {
                console.log('Loading...');
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.errors.signUpError = payload;
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                state.errors.signUpError = payload as string;
                state.errors.signInError = null;
            })
            .addCase(signIn.pending, () => {
                console.log('Signing in...');
            })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                state.isSignedIn = true;
                state.userObj.necessary._id = payload._id;
                state.errors.signInError = null;
            })
            .addCase(signIn.rejected, (state, { payload }) => {
                state.errors.signInError = payload as string;
                state.errors.signUpError = null;
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

export default userSlice.reducer;