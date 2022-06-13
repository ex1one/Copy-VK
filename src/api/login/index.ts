import { AxiosResponse } from 'axios';
import instance from '../instance';
import { IUser } from '../users/types';

const login = (email: string, password: string): Promise<AxiosResponse> => instance.post<IUser>(`${process.env.APP_LOGIN}`, {
  email,
  password,
});

export default login;
