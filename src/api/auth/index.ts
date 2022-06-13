import { AxiosResponse } from 'axios';
import instance from '../instance';
import { IUser } from '../users/types';

const auth = (email: string, password: string): Promise<AxiosResponse> => instance.post<IUser>(`${process.env.APP_AUTH}`, {
  email,
  password,
});

export default auth;
