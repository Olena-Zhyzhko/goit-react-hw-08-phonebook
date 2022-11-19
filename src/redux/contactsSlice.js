import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from 'redux/contacts/contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items.push({...action.payload});
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
})
  
export const contactReducer = contactsSlice.reducer;
