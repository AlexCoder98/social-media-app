import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../state/auth/authSlice';
import messageReducer from '../state/message/messageSlice';

import { appApiSlice } from "./api/appApiSlice";

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        messageReducer: messageReducer,
        [appApiSlice.reducerPath]: appApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(appApiSlice.middleware)
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;