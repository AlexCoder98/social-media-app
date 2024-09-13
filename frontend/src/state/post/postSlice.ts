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
    error: '',
    message: ''
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postCreatePost.pending, () => {
                console.log('Creating a post...');
            })
            .addCase(postCreatePost.fulfilled, (state, { payload }) => {
                state.message = payload as string;
                state.error = '';
            })
            .addCase(postCreatePost.rejected, (state, { payload }) => {
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