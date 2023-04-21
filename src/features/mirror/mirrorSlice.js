import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

const mirrorSlice = createSlice({
    name: 'mirror',
    initialState,
    reducers: {
        actionMirror: (state) => {
            state.value = !state.value;
        }
    }
});

export const { actionMirror } = mirrorSlice.actions;

export default mirrorSlice.reducer;