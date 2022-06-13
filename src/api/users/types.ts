export interface IUser {
  id: string | null;
  displayName: string | null;
  email: string | null;
  registered: boolean;
  refreshToken: string | null;
  idToken: string | null;
}
