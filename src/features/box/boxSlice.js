import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: 0,
};

const boxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        moveRight: (state) => {
            state.position += 20;
        },
        moveLeft: (state) => {
            state.position -= 20;
        },
    }
})

export const {moveRight, moveLeft} = boxSlice.actions;

export default boxSlice.reducer;