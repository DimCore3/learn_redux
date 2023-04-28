import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const numberGenerator = createSlice({
    name: 'numberGenerator',
    initialState,
    reducers: {
        generate: (state) => {
            state.value = Math.round((Math.random() * 10));
        },
    }
});

export default numberGenerator.reducer;

export const { generate } = numberGenerator.actions;