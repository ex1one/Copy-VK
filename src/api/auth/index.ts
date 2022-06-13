import { AxiosResponse } from 'axios';
import firebase from 'firebase/compat';
import instance from '../instance';
import U

const auth = (email: string, password: string): Promise<AxiosResponse<User>> => instance.post<User>(`${process.env.APP_AUTH}`, {
  email,
  password,
});

export default auth;
