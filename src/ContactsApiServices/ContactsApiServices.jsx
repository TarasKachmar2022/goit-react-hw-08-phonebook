import axios from 'axios';

const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const postContact = async contact => {
  console.log(contact);
  const response = await axios.post('/contacts', contact);
  return response;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

const APIs = {
  getContacts,
  postContact,
  deleteContact,
};

export default APIs;
