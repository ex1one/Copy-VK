import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const UserItem: FC = () => {
  const [dada, setDada] = useState();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/profile">
        <Box sx={{ position: 'relative', marginRight: 5 }}>
          <img src="" alt="" />
          <Box sx={{
            backgroundColor: 'green',
            width: 4,
            height: 4,
            position: 'absolute',
            bottom: '2',
            left: '2',
          }}
          />
        </Box>
        <span>Имя</span>
      </Link>
    </Box>
  );
};

export default UserItem;
