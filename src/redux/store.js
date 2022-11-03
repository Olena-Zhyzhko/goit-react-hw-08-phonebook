import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import contactReducer from 'redux/contacts/contactsReducer'


const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
    },
});

    
export { store };