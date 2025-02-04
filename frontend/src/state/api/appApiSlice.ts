import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TReqType = {
    email: string;
    password: string;
}

type TResType = {
    accessToken: string;
    userId: string;
}

export const appApiSlice = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation<TResType, TReqType>({
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

export const { useSignInMutation } = appApiSlice;