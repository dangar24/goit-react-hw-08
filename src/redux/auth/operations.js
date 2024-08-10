import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}



export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", user);
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', user);
        setToken(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        setToken('');
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => { 
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    try {
        const response = await axios.get('/users/current')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}, {
    condition: (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        return token !== null;
    }
})