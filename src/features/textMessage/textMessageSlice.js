import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: 'tset abc bbb bca',
};

export const textMessageSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        changeText: (state) => {
            state.text = state.text.split(' ').reverse().join(' ');
        }
    }
});

export const { changeText } = textMessageSlice.actions;
export default textMessageSlice.reducer;