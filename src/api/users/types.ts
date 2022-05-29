import { Dispatch, SetStateAction } from 'react';

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
  _id: string;
  avatar: string;
  displayName: string;
  isInNetwork?: boolean;
}
