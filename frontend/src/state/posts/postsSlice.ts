import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface PostStateType {
    id: string;
    title: string;
    image: string;
    description: string;
}

interface PostsStateType {
    posts: PostStateType[];
}

const initialState: PostsStateType = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPost.pending, () => {
                console.log('Adding a post...')
            })
            .addCase(addPost.fulfilled, (state, { payload }) => {
                state.posts = state.posts.concat(payload);
            })
            .addCase(editPost.pending, () => {
                console.log('Editing a post...')
            })
            .addCase(editPost.fulfilled, (state, { payload }) => {
                const editedPostIndex = state.posts.findIndex(post => post.id === payload.id);
                if (editedPostIndex !== -1) {
                    state.posts[editedPostIndex] = payload;
                }
            })
            .addCase(deletePost.pending, () => {
                console.log('Deleting a post...');
            })
            .addCase(deletePost.fulfilled, (state, { payload }) => {
                state.posts = state.posts.filter(post => post.id !== payload);
            })
    }
});

export const addPost = createAsyncThunk(
    'posts/addPost',
    async (newPost: PostStateType) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return newPost;
    }
);

export const editPost = createAsyncThunk(
    'posts/createPost',
    async (editedPost: PostStateType) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return editedPost;
    }
);

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (postId: string) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return postId;
    }
);

export default postsSlice.reducer;