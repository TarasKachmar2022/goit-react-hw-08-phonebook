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
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const contacts = await APIs.updateContact(id, {
        name,
        number,
      });
      toast.success('Contact updated successfully!');
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
