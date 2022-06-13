import { AxiosResponse } from 'axios';
import firebase from 'firebase/compat';
import instance from '../instance';
import User = firebase.User;

const login = (email: string, password: string): Promise<AxiosResponse<User>> => instance.post<User>(`${process.env.APP_LOGIN}`, {
  email,
  password,
});

export default login;
