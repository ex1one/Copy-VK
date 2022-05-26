import React, { FC } from 'react';
import {
  Avatar, Box, Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../../public/img/logo.jpg';

const UserItem: FC = () => (
  <Card
    variant="outlined"
    sx={{
      padding: 2,
      backgroundColor: '#F1F7FA',
      border: 'none',
      borderRadius: 3,
    }}
  >
    <Link
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#111',
        marginBottom: 12,
      }}
      to="/profile"
    >
      <Box sx={{
        position: 'relative',
        marginRight: 2,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 50, height: 50 }}
          src={logo}
        />
        <Box sx={{
          backgroundColor: '#4FB14F',
          border: '2px solid #F1F7FA',
          width: 12,
          height: 12,
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: '50%',
        }}
        />
      </Box>
      <span style={{ fontSize: 16 }}>Илья Рогачев</span>
    </Link>
    <Link
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#111',
        marginBottom: 12,
      }}
      to="/profile"
    >
      <Box sx={{
        position: 'relative',
        marginRight: 2,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 50, height: 50 }}
          src={logo}
        />
        <Box sx={{
          backgroundColor: '#4FB14F',
          border: '2px solid #F1F7FA',
          width: 12,
          height: 12,
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: '50%',
        }}
        />
      </Box>
      <span style={{ fontSize: 16 }}>Илья Рогачев</span>
    </Link>
    <Link
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#111',
        marginBottom: 12,
      }}
      to="/profile"
    >
      <Box sx={{
        position: 'relative',
        marginRight: 2,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 50, height: 50 }}
          src={logo}
        />
        <Box sx={{
          backgroundColor: '#4FB14F',
          border: '2px solid #F1F7FA',
          width: 12,
          height: 12,
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: '50%',
        }}
        />
      </Box>
      <span style={{ fontSize: 16 }}>Илья Рогачев</span>
    </Link>
  </Card>
);

export default UserItem;
