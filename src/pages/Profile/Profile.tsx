import React from 'react';
import { Avatar, Box } from '@mui/material';
import styles from './profile.module.scss';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  return (
    <Box className={styles.Box}>
      <Avatar
        alt="#"
        className={styles.Avatar}
        src={user?.avatar}
      />
      <h1>{user?.name}</h1>
    </Box>
  );
};

export default Profile;
