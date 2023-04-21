import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        flip: (state) => {
            state.value = !state.value;
        }
    }
})

export const { flip } = spinnerSlice.actions;

export default spinnerSlice.reducer;