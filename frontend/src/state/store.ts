import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user/userSlice";
import postsSlice from "./posts/postsSlice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        posts: postsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;