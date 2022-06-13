import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './types';

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const Authorization = createSlice({
  name: 'Authorization',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { auth } = Authorization.actions;

export default Authorization.reducer;
