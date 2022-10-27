import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './actions'


const contactsReducer = createReducer([], {
    [addContact]: (state, action) => { state.push(action.payload) },

    [removeContact]: (state, action) => { return state.filter(contact => contact.id !== action.payload) },
})

export { contactsReducer };