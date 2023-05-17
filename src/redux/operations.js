// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6455235ca74f994b33532f4e.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fatchAll',
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkApi) => {
//     try {
//       const response = await axios.post('/contacts', newContact);
//       return response.data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkApi) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );
import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success('Successfully added new contact 📝');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted 🗑');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
