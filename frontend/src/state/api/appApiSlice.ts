import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TSignInReqData, TSignInResData } from "../../types/api-slice/auth";
import { TPostData } from "../../types/api-slice/post";
import { TUserSectionNavData } from "../../types/api-slice/user";

export const appApiSlice = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        fetchUserSectionNavData: builder.query<TUserSectionNavData, TSignInResData>({
            query: (reqData) => ({
                url: `/user/${reqData.userId}`,
                headers: {
                    Authorization: `Bearer ${reqData.accessToken}`,
                }
            }),
            providesTags: ['User'],
        }),
        getAllPosts: builder.query<TPostData[], string>({
            query: (accessToken) => ({
                url: 'home',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
        }),
        getUserPosts: builder.query<TPostData[], string>({
            query: (accessToken) => ({
                url: '/my-posts',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
        }),
        signIn: builder.mutation<TSignInResData, TSignInReqData>({
            query: (reqData) => ({
                url: '/sign-in',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqData),
            })
        })
    })
});

export const {
    useFetchUserSectionNavDataQuery, useSignInMutation, useGetAllPostsQuery, useGetUserPostsQuery
} = appApiSlice;