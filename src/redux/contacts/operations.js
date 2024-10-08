import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const result = await axios('/contacts');
        return result.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const result = await axios.post('/contacts', contact)
        return result.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const result = await axios.delete(`/contacts/${id}`);
        return result.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});