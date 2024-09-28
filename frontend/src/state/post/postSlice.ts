import { createSlice } from '@reduxjs/toolkit';

import {
    postCreatePost,
    getPosts,
    getAllPosts,
    getPost,
    deletePost,
    getEditPost,
    postEditPost
} from './actions';

import { PostsInitialStateType } from '../../types/reducers/post';

const initialState: PostsInitialStateType = {
    posts: [],
    post: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.posts = payload;
            })
            .addCase(getAllPosts.pending, () => {
                console.log('Fetching all posts...');
            })
            .addCase(getAllPosts.fulfilled, (state, { payload }) => {
                state.posts = payload;
            })
            .addCase(getPost.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(deletePost.pending, () => {
                console.log('Deleting the post...');
            })
            .addCase(getEditPost.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(getEditPost.rejected, (state, { payload }) => {
                state.post = null;
            })
    }
});

export default postSlice.reducer;