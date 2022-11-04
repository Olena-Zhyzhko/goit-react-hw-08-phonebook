import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

axios.defaults.baseURL = 'https://636101be67d3b7a0a6bb12e7.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts')
            return data;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact  = createAsyncThunk(
    'contacts/addContact ',
    async (newContact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', newContact)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
  }
)
