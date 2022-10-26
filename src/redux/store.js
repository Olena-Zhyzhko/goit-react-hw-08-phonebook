import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice'
// import { createAction, createReducer } from '@reduxjs/toolkit'
// import { rootReducer } from "./reducer";

// const addContact = createAction('contacts/addContact');
// const removeContact = createAction('contacts/removeContact')



const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
    },
        // rootReducer,
});

export { store };