import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'


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
      return state.filter(contact => contact.id !== action.payload)
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, removeContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;