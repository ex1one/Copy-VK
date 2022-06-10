import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './types';

const initialState: IAuthState = {
  user: null,
  jwt: null,
};

export const Authorization = createSlice({
  name: 'Authorization',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    },
  },
});

export const { auth } = Authorization.actions;

export default Authorization.reducer;
