import { createSlice } from '@reduxjs/toolkit';

import {
    postCreatePost,
    getUserPosts,
    getAllPosts,
    getPost,
    deletePost,
    getEditPost,
    postEditPost
} from './actions';

import { PostResponseType, PostsInitialStateType } from '../../types/reducers/post';

const initialState: PostsInitialStateType = {
    allPosts: [],
    userPosts: [],
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
            state.hasMore = false;
        },
        resetUserPosts(state) {
            state.page = 1;
            state.userPosts = [];
            state.hasMore = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserPosts.fulfilled, (state, { payload }) => {
                state.userPosts = [...state.userPosts].concat(payload.userPosts as PostResponseType[]);
                state.hasMore = payload.hasMore;
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

export const { incrementPage, resetAllPosts, resetUserPosts } = postSlice.actions;

export default postSlice.reducer;