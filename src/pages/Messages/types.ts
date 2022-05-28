import { IUser } from '../../api/users/types';

export interface IMessage {
  user: IUser;
  message: string;
  createdAt: string;
}
