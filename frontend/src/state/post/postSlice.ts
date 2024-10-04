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
    allPosts: [],
    usersPosts: [],
    post: null,
    hasMore: false,
    page: 1,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        incrementPage(state) {
            state.page++;
        },
        resetAllPosts(state) {
            state.page = 1;
            state.allPosts = [];
            state.hasMore = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.usersPosts = payload;
            })
            .addCase(getAllPosts.fulfilled, (state, { payload }) => {
                state.allPosts = [...state.allPosts].concat(payload.allPosts as PostResponseType[]);
                state.hasMore = payload.hasMore;
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

export const { incrementPage, resetAllPosts } = postSlice.actions;

export default postSlice.reducer;