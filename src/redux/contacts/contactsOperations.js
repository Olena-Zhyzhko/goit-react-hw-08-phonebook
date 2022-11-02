// import * as contactsActions from 'redux/contacts/contactsActions';
// import * as contactsShelfApi from 'servises/contactsShelf-api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

axios.defaults.baseURL = 'https://636101be67d3b7a0a6bb12e7.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchingInProgress());

//     try {
//         const contacts = await contactsShelfApi.fetchContacts();
//         dispatch(contactsActions.fetchingSuccess(contacts));
        
//     } catch (error) {
//         dispatch(contactsActions.fetchingError(error));
//     }
// };

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const { data } = await axios.get('/contacts')
        console.log(data);

        return data;
    }
);

export const addContact  = createAsyncThunk(
    'contacts/addContact ',
    async (newContact) => {
        const { data } = await axios.post('/contacts', newContact)
        console.log(data);

        return data;
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (id) => {
      const { data } = await axios.delete(`/contacts/${id}`)
          console.log(data);

    return data;
  }
)