import { createSlice } from "@reduxjs/toolkit";

import { TInitialMessageState } from "../../types/reducers/message";

const initialState: TInitialMessageState = {
    successMsg: null,
    errorMsg: null,
};

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setSuccessMessage(state, { payload }) {
            state.successMsg = payload;
            state.errorMsg = null;
        },
        setErrorMessage(state, { payload }) {
            state.successMsg = null;
            state.errorMsg = payload;
        }
    }
});

export const { setSuccessMessage, setErrorMessage } = messageSlice.actions;

export default messageSlice.reducer;