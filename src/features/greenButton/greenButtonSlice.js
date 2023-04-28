import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: 'green',
};

const greenButtonSlice = createSlice({
    name: 'greenButton',
    initialState,
    reducers: {
        changeColorToRed: (state) => {
            state.color = 'red';
        }
    }
});

export const { changeColorToRed } = greenButtonSlice.actions;

export default greenButtonSlice.reducer;