import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";

const slice = createSlice({
    name: 'filters',
    initialState: { name: "" },
    reducers: {
        changeFilter(state, action) { state.name = action.payload }
    },
    extraReducers: buider => {
        buider
            .addCase(logout.fulfilled, (state) => {
                state.name = '';
            })
            .addCase(logout.rejected, (state) => {
                state.name = '';
            })
    }
})

export default slice.reducer;

export const { changeFilter } = slice.actions;