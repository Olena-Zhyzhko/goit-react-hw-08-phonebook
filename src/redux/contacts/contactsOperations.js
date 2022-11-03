import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

axios.defaults.baseURL = 'https://636101be67d3b7a0a6bb12e7.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const { data } = await axios.get('/contacts')
        return data;
    }
);

export const addContact  = createAsyncThunk(
    'contacts/addContact ',
    async (newContact) => {
        const { data } = await axios.post('/contacts', newContact)
        return data;
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
    async (id) => {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data;
  }
)
