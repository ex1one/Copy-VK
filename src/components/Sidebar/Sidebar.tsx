import React, { FC } from 'react';
import { Box } from '@mui/material';
import UserItem from '../UserItem/UserItem';
import Menu from '../Menu/Menu';

const Sidebar: FC = () => (
  <Box>
    <UserItem />
    <Menu />
  </Box>
);

export default Sidebar;
