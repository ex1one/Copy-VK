import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import UserItem from '../UserItem/UserItem';

const Sidebar: FC = () => {
  const [da, setDa] = useState();
  return (
    <Box sx={{ display: 'flex' }}>
      <UserItem />
    </Box>
  );
};

export default Sidebar;
