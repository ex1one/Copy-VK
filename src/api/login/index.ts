import { AxiosResponse } from 'axios';
import { User } from 'firebase/auth';
import instance from '../instance';

const login = (email: string, password: string): Promise<AxiosResponse<User>> => instance.post<User>('accounts:signInWithPassword', {
  email,
  password,
});

export default login;
