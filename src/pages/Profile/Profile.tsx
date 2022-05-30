import React from 'react';
import { Avatar, Box } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import styles from './profile.module.scss';

const Profile = () => {
  const ga = getAuth();
  const [user, loading, error] = useAuthState(ga);

  return (
    <Box className={styles.Box}>
      <Avatar
        alt="#"
        className={styles.Avatar}
        // src={user.photoURL}
      />
      <h1>{user?.displayName}</h1>
    </Box>
  );
};

export default Profile;
