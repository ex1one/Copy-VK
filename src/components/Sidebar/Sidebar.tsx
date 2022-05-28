import React, { FC } from 'react';
import { Box } from '@mui/material';
import Menu from '../Menu/Menu';
import UsersItems from '../UserItem/UsersItems';
import CurrentUser from '../CurrentUser/CurrentUser';

const Sidebar: FC = () => (
  <Box>
    <CurrentUser />
    <UsersItems />
    <Menu />
  </Box>
);

export default Sidebar;
