import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.APP_URL,
  params: { key: process.env.APP_KEY },
});

instance.interceptors.request.use((config) => ({ ...config, headers: { ...config.headers, Authorization: `${Cookies.get('token')}` } }));

export default instance;
