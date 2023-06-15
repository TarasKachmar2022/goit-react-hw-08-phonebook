import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = async credentials => {
  const response = await axios.post('/users/signup', credentials);
  return response.data;
};

const login = async credentials => {
  const response = await axios.post('/users/login', credentials);
  return response.data;
};

const logout = async () => {
  const response = await axios.post('/users/logout');
  return response.data;
};

const fetchCurrentUser = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};

const AuthAPIs = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default AuthAPIs;
