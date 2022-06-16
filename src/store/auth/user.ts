import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { IInitialState } from './types';

const initialState: IInitialState | null = {
  displayName: null,
  id: null,
  photoURL: null,
  email: null,
  accessToken: null,
  refreshToken: null,
};

export const user = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.displayName = action.payload.displayName;
      state.id = action.payload.uid;
      state.photoURL = action.payload.photoURL;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
