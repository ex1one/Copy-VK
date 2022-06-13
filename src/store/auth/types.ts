import firebase from 'firebase/compat';
import User = firebase.User;

export interface IAuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}
