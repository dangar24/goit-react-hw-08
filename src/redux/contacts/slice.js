import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: buider => {
        buider
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = false;
            })
            .addCase(logout.rejected, (state) => {
                state.items = [];
                state.loading = false;
                state.error = false;
            })
    }
})

export default slice.reducer;