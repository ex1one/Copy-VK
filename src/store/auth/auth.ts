import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

const initialState: User = {} as User;

export const user = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
