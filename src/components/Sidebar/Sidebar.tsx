import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import UserItem from '../UserItem/UserItem';
import Menu from '../Menu/Menu';

const Sidebar: FC = () => {
  const [da, setDa] = useState();
  return (
    <Box>
      <UserItem />
      <Menu />
    </Box>
  );
};

export default Sidebar;
