import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jumping: false,
};

const bottleSlice = createSlice({
    name: 'bottle',
    initialState,
    reducers: {
        jumping: (state) => {
            state.jumping = !state.jumping;
        }
    }
});

export const {jumping} = bottleSlice.actions;
export default bottleSlice.reducer;