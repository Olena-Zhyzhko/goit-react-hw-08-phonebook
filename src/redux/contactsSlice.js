import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from 'redux/contacts/contactsOperations'


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
      state.items = state.items.push({... action.payload});
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
    // Описать редюсері для добавления и удаления контактов!!!! 1:26

    // fetchingInProgress(state) { },
    // // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess: {
    //   addContact: {
    //     reducer(state, action) {
    //       state.push(action.payload);
    //     },
    //     prepare(name, number) {
    //       return {
    //         payload: {
    //           name,
    //           number,
    //           id: nanoid(),
    //         },
    //       };
    //     },
      },
    })
  
    // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError() {},
    
    // removeContact(state, action) {
    //     const removedContacts = state.filter(contact => contact.id !== action.payload);
    //     return removedContacts
    // },
 

// Експортуємо генератори екшенів та редюсер
// export const { addContact, removeContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// export const contactsReducer = persistReducer(persistConfig, contactReducer)
