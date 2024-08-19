import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authentication/authSlice";
import userSlice from "./user/userSlice";
import postsSlice from "./post/postSlice";

export const store = configureStore({
    reducer: {
        authentication: authSlice,
        users: userSlice,
        posts: postsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;