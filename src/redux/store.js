import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import combineReducers from 'redux/contacts/contactsReducer'


const store = configureStore({
    reducer: {
        contacts: combineReducers,
        filter: filterReducer,
    },
});

    
export { store };