import axios from 'axios';

const API_URL = '/api/auth/';

const register = (username: string, password: string) => {
  return axios.post(API_URL + 'register', {
    username,
    password,
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;