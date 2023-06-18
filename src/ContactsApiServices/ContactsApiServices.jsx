import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

const postContact = async contact => {
  console.log(contact);
  const response = await axios.post('/contacts', contact);
  console.log(response.data);
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
