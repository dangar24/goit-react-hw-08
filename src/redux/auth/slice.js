import { createSlice } from "@reduxjs/toolkit"
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
         user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loader: false,
        error: false,
    },
    extraReducers: buider => buider
        .addCase(register.pending, (state) => {
            state.loader = true;
            state.error = false;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loader = false;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, (state) => {
                state.loader = false;
                state.error = true;
        })
        .addCase(login.pending, (state) => {
            state.loader = true;
            state.error = false;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loader = false;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, (state) => {
            state.loader = false;
            state.error = true;
        })
        .addCase(logout.pending, (state) => {
            state.error = false;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logout.rejected, (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
})

export default authSlice.reducer;