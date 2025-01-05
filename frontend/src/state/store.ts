import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authentication/authSlice";
import userSlice from "./user/userSlice";
import postsSlice from "./post/postSlice";
import messageSlice from "./message/messageSlice";

export const store = configureStore({
    reducer: {
        authentication: authSlice,
        user: userSlice,
        post: postsSlice,
        message: messageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;