import { createSlice } from "@reduxjs/toolkit";

interface IInitialMessageState {
    successMessage: string | null;
    errorMessage: string | null;
}

const initialState: IInitialMessageState = {
    successMessage: null,
    errorMessage: null,
};

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setSuccessMessage(state, { payload }) {
            state.successMessage = payload;
            state.errorMessage = null;
        },
        setErrorMessage(state, { payload }) {
            state.successMessage = null;
            state.errorMessage = payload
        },
    },
});

export const { setSuccessMessage, setErrorMessage } = messageSlice.actions;
export default messageSlice.reducer;