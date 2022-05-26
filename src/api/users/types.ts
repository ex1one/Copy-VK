import { Dispatch, SetStateAction } from 'react';

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
  id: string;
  avatar: string;
  name: string;
  isInNetwork?: boolean;
}
