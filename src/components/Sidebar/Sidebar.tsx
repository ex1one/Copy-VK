import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import UserItem from '../UserItem/UserItem';

const Sidebar = () => {
  const [da, setDa] = useState();
  return (
    <Box sx={{ display: 'flex' }}>
      <UserItem />
    </Box>
  );
};

export default Sidebar;
