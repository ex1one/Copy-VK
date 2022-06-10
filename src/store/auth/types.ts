import { IUser } from '../../api/users/types';

export interface IAuthState {
  jwt: string | null;
  user: IUser | null;
}
