import axios from 'axios';

const getContacts = async ({ signal }) => {
  const response = await axios.get('/contacts', { signal });
  return response.data;
};

const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

const updateContact = async (id, { name, number }) => {
  const response = await axios.patch(`/contacts/${id}`, { name, number });
  return response.data;
};

const APIs = {
  getContacts,
  postContact,
  deleteContact,
  updateContact,
};

export default APIs;
