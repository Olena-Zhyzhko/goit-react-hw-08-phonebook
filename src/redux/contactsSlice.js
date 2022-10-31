import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';


const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
          },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
        const removedContacts = state.filter(contact => contact.id !== action.payload);
        return removedContacts
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, removeContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// export const contactsReducer = persistReducer(persistConfig, contactReducer)
