import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `${Cookies.get('token')}`;
  return config;
});

export default instance;
