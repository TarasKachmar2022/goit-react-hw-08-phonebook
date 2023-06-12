import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = async credentials => {
  const response = await axios.post('/users/signup', credentials);
  return response.data;
};

const logIn = async credentials => {
  const response = await axios.post('/users/login', credentials);
  return response.data;
};

const logOut = async () => {
  const response = await axios.post('/users/logout');
  return response.data;
};

const reFreshCurrentUser = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};

const AuthAPIs = {
  register,
  logIn,
  logOut,
  reFreshCurrentUser,
};

export default AuthAPIs;
