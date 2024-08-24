import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authentication/authSlice";
import userSlice from "./user/userSlice";
import postsSlice from "./post/postSlice";

export const store = configureStore({
    reducer: {
        authentication: authSlice,
        user: userSlice,
        post: postsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;