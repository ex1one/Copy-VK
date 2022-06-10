import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../api/users/types';

const initialState: IUser = {
  id: null,
  displayName: null,
  email: null,
  accessToken: null,
  refreshToken: null,
};

export const Authorization = createSlice({
  name: 'Authorization',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { auth } = Authorization.actions;

export default Authorization.reducer;
