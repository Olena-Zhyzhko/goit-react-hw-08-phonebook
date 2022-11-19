import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },

}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout')
            token.unset();

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const authCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistorToken = state.auth.token;
        console.log(persistorToken);

        if (persistorToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistorToken);
        try {
            const { data } = await axios.get('/users/current');
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
