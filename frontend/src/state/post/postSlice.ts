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

import { PostResponseType, PostsInitialStateType } from '../../types/reducers/post';

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
            .addCase(getAllPosts.fulfilled, (state, { payload }) => {
                // console.log('POSTS BEFORE UPDT');
                // console.log([...state.posts]);
                state.posts = [...state.posts].concat(payload);
                // console.log('POSTS AFTER UPDT');
                // console.log([...state.posts]);
                // state.posts = payload.concat(state.posts);
            })
            .addCase(getPost.fulfilled, (state, { payload }) => {
                state.post = payload;
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