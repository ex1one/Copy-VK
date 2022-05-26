import { IUser } from '../users/types';

export interface IPost {
  author: IUser;
  createdAt: string;
  content: string;
  images?: string[];
}
