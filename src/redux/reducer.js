import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './actions'

// const tasksInitialState = [];
// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
// };

const contactsReducer = createReducer([], {
    [addContact]: (state, action) => { state.push(action.payload) },
// state.push(action.payload);

    [removeContact]: (state, action) => { return state.filter(contact => contact.id !== action.payload)
    },
    //  const index = state.findIndex(task => task.id === action.payload);
    // state.splice(index, 1);

})

export { contactsReducer };