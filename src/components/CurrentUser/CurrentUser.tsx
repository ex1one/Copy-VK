import React from 'react';
import {
  Button, Card, Box, Chip, Avatar,
} from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './currentUser.module.scss';

const CurrentUser = () => {
  const ga = getAuth();
  const [user, loading, error] = useAuthState(ga);

  const logOut = () => {
    signOut(ga).then();
  };

  return (
    <Card className={styles.Card} variant="outlined">
      <Box className={styles.Box}>
        <Chip
          className={styles.Chip}
          avatar={<Avatar alt="" />}
          label={user?.displayName || 'Без имени'}
          variant="outlined"
        />
        <Button className={styles.logout} onClick={logOut} variant="outlined">Выйти</Button>
      </Box>
    </Card>
  );
};

export default CurrentUser;
