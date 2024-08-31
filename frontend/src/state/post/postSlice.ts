import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { PostInitialStateType, PostsInitialStateType, PostReqType, PostResponseType } from '../../types/reducers/post';

import { RequestResponseType } from '../../types/reducers/auth';

const initialState: PostsInitialStateType = {
    posts: [],
    error: '',
    message: ''
};

export const createPost = createAsyncThunk(
    'post/addPost',
    async (reqData: PostReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/posts/create-new`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData.post)
            });

            const result = await response.json();
            if (response.status !== 201) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return (result as { message: string }).message;
            }
        } catch (err) {
            thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const getPosts = createAsyncThunk(
    'post/getPosts',
    async (accessToken: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/posts`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as PostResponseType[];
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, () => {
                console.log('Creating a post...');
            })
            .addCase(createPost.fulfilled, (state, { payload }) => {
                state.message = payload as string;
                state.error = '';
            })
            .addCase(createPost.rejected, (state, { payload }) => {
                state.message = '';
                state.error = payload as string;
            })
            .addCase(getPosts.pending, () => {
                console.log('Fetching posts...');
            })
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.posts = payload;
            })

    }
});

export default postSlice.reducer;