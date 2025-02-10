import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TSignInReqData, TSignInResData } from "../../types/api-slice/auth";
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

export const { useSignInMutation, useFetchUserSectionNavDataQuery } = appApiSlice;