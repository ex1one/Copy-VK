import React from 'react';
import {
  Button, Card, Box, Chip, Avatar,
} from '@mui/material';
import { signOut } from 'firebase/auth';
import styles from './currentUser.module.scss';
import useAuth from '../../hooks/useAuth';

const CurrentUser = () => {
  const { user, ga } = useAuth();

  const logOut = () => {
    signOut(ga).then();
  };

  return (
    <Card className={styles.Card} variant="outlined">
      <Box className={styles.Box}>
        <Chip
          className={styles.Chip}
          avatar={<Avatar alt="" src={user?.avatar} />}
          label={user?.name || 'Без имени'}
          variant="outlined"
        />
        <Button className={styles.logout} onClick={logOut} variant="outlined">Выйти</Button>
      </Box>
    </Card>
  );
};

export default CurrentUser;
