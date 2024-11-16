import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    PostReqType,
    PostResponseType,
    GetPostReqType
} from '../../types/reducers/post';

import { EditPostType } from '../../types/post';
import { RequestResponseType } from '../../types/reducers/auth';

export const postCreatePost = createAsyncThunk(
    'post/addPost',
    async (reqData: PostReqType, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/my-posts/create-new`, {
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
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const getUserPosts = createAsyncThunk(
    'post/getPosts',
    async ({ accessToken, page }: { accessToken: string, page: number }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/my-posts?page=${page}`, {
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
                return result as { userPosts: PostResponseType[], hasMore: boolean };
            }
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async ({ accessToken, page }: { accessToken: string, page: number }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:8080/home?page=${page}`, {
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
                return result as { allPosts: PostResponseType[], hasMore: boolean };
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
            const respone = await fetch(`http://localhost:8080/my-posts/${reqData.postId}`, {
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
            const response = await fetch(`http://localhost:8080/my-posts/${reqData.postId}`, {
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
            const respone = await fetch(`http://localhost:8080/my-posts/${reqData.postId}/edit`, {
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
            const response = await fetch(`http://localhost:8080/my-posts/${updatedPost.accessData.postId}/edit`, {
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
                return result as { updatedPost: EditPostType, message: string };
            }

        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)

export const uploadPostImage = createAsyncThunk(
    'post/uploadPostImage',
    async (reqData: { formData: FormData, accessToken: string }, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                },
                body: reqData.formData
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error('Error. Something went wrong');
            }
            return result as { message: string, path: string };

        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)