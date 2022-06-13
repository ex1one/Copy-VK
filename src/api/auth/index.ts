import { AxiosResponse } from 'axios';
import { User } from 'firebase/auth';
import instance from '../instance';

const auth = (email: string, password: string): Promise<AxiosResponse<User>> => instance.post<User>('accounts:signUp', {
  email,
  password,
});

export default auth;
