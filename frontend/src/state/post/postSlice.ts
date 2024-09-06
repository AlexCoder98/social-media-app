import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { PostInitialStateType, PostsInitialStateType, PostReqType, PostResponseType, GetPostReqType } from '../../types/reducers/post';

import { EditPostType } from '../../types/post';

import { RequestResponseType } from '../../types/reducers/auth';

const initialState: PostsInitialStateType = {
    posts: [],
    post: null,
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
);

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async (accessToken: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/main-page`, {
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

export const getPost = createAsyncThunk(
    'post/getPost',
    async (reqData: GetPostReqType, thunkAPI) => {
        try {
            const respone = await fetch(`http://localhost:8080/posts/${reqData.postId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                },
            });

            const result = await respone.json();

            if (respone.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as PostResponseType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (reqData: GetPostReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/posts/${reqData.postId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                },
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return (result as { message: string }).message;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const getEditPost = createAsyncThunk(
    'post/getEditPost',
    async (reqData: GetPostReqType, thunkAPI) => {
        try {
            const respone = await fetch(`http://localhost:8080/posts/${reqData.postId}/edit`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await respone.json();
            if (respone.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                console.log(result);
                return result as PostResponseType;
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const postEditPost = createAsyncThunk(
    'post/postEditPost',
    async (updatedPost: {
        post: EditPostType,
        accessData: GetPostReqType
    }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/posts/${updatedPost.accessData.postId}/edit`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${updatedPost.accessData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPost.post)
            });

            const result = await response.json();
            if (response.status !== 200) {
                throw new Error((result as RequestResponseType).message);
            } else {
                return result as string;
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
            .addCase(getPosts.rejected, (state, { payload }) => {
                state.error = payload as string;
            })
            .addCase(getAllPosts.pending, () => {
                console.log('Fetching all posts...');
            })
            .addCase(getAllPosts.fulfilled, (state, { payload }) => {
                state.posts = payload;
            })
            .addCase(getAllPosts.rejected, (state, { payload }) => {
                state.error = payload as string;
            })
            .addCase(getPost.pending, () => {
                console.log('Fetching the post...');
            })
            .addCase(getPost.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(getPost.rejected, (state, { payload }) => {
                state.error = payload as string;
            })
            .addCase(deletePost.pending, () => {
                console.log('Deleting the post...');
            })
            .addCase(deletePost.fulfilled, (state, { payload }) => {
                state.message = payload;
                state.error = '';
            })
            .addCase(deletePost.rejected, (state, { payload }) => {
                state.message = '';
                state.error = payload as string;
            })
            .addCase(getEditPost.pending, () => {
                console.log('Fetching the post data...');
            })
            .addCase(getEditPost.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(getEditPost.rejected, (state, { payload }) => {
                state.post = null;
                state.error = payload as string;
            })
            .addCase(postEditPost.pending, () => {
                console.log('Editing post...');
            })
            .addCase(postEditPost.fulfilled, (state, { payload }) => {
                state.message = payload;
                state.error = '';
            })
            .addCase(postEditPost.rejected, (state, { payload }) => {
                state.message = '';
                state.error = payload as string;
            })
    }
});

export default postSlice.reducer;