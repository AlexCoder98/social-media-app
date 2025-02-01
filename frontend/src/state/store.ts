import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../state/auth/authSlice';
import messageReducer from '../state/message/messageSlice';

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        messageReducer: messageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;