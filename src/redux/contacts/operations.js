import { createAsyncThunk } from '@reduxjs/toolkit';
import APIs from 'ContactsApiServices';
import { toast } from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await APIs.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await APIs.postContact(contact);
      console.log(contacts);
      toast.success('Contact added successfully!');
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await APIs.deleteContact(id);
      toast.success('Contact deleted successfully!');
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const contacts = await APIs.updateContact(id);
      toast.success('Contact updated successfully!');
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//   async (data, { rejectWithValue }) => {
//     try {
//       const { data: result } = await api.editContact(data);
//       toast.success('Contact update', {
//         position: 'bottom-right',
//       });
//       // console.log(result);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
//     }
//   }
// );
