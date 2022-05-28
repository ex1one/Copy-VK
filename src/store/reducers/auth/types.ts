import { IUser } from '../../../api/users/types';

export interface IAuthState {
  user: IUser | null;
  error: Error | string | null;
  isLoading: boolean;
}

export enum EAuthActionTypes {
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface ISetUserAction {
  type: EAuthActionTypes.SET_USER;
  payload: IUser;
}

export interface ISetIsLoadingAction {
  type: EAuthActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export interface ISetErrorAction {
  type: EAuthActionTypes.SET_ERROR;
  payload: Error | string;
}

export type TAuthActions = ISetUserAction | ISetIsLoadingAction | ISetErrorAction;
