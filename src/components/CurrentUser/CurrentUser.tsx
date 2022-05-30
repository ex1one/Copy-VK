import React from 'react';
import {
  Button, Card, Box, Chip, Avatar,
} from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { getStorage, ref } from 'firebase/storage';
import styles from './currentUser.module.scss';

const CurrentUser = () => {
  const ga = getAuth();
  const storage = getStorage();
  const [user, loading, error] = useAuthState(ga);
  const navigate = useNavigate();
  const [avatar] = useDownloadURL(ref(storage, `${user?.uid}.png`));

  const logOut = () => {
    signOut(ga).then();
  };

  const clickHandler = () => {
    navigate(`/profile/${user?.uid}`);
  };

  return (
    <Card className={styles.Card} variant="outlined">
      <Box className={styles.Box}>
        <Chip
          className={styles.Chip}
          onClick={clickHandler}
          avatar={<Avatar alt="" src={avatar} />}
          label={user?.displayName}
          variant="outlined"
        />
        <Button className={styles.logout} onClick={logOut} variant="outlined">Выйти</Button>
      </Box>
    </Card>
  );
};

export default CurrentUser;
