import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from 'redux/auth/authOperations';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const authInitialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
    isFetchingCurrentUser: false,
  error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers: {
        [authOperations.register.fulfilled]: (state, actions) => {
            state.user = actions.payload.user;
            state.token = actions.payload.token;
            state.isLoggedIn = true;
        },

        [authOperations.logIn.fulfilled]: (state, actions) => {
            state.user = actions.payload.user;
            state.token = actions.payload.token;
            state.isLoggedIn = true;
            state.error = false;
        },
        [authOperations.logIn.rejected]: (state, actions) => {
            state.error = true;
        },
        

        [authOperations.logOut.fulfilled]: (state, actions) => {
            state.user = { name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },

        [authOperations.authCurrentUser.pending]: (state, actions) => { 
            state.isFetchingCurrentUser = true;
        },

        [authOperations.authCurrentUser.fulfilled]: (state, actions) => {
            state.user = actions.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;

        },
        [authOperations.authCurrentUser.rejected]: (state, actions) => {
            state.user = { name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
            state.isFetchingCurrentUser = false;

        }

       
        
    },
});

export const authReduser = authSlice.reducer;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
 
export const authPersistReducer = persistReducer(authPersistConfig, authReduser)