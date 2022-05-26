import { IUser } from '../users/types';

export interface IPosts {
  author: IUser;
  createdAt: string;
  content: string;
  images?: string[];
}
