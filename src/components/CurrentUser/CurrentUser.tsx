import React from 'react';
import {
  Avatar, Box, Button, Card, Chip,
} from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './currentUser.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import logoTemporary from '../../../public/img/1.jpg';

const CurrentUser = () => {
  const ga = getAuth();
  const user = useTypedSelector((state) => state.user);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(ga);
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
          avatar={<Avatar alt="" src={logoTemporary} />}
          label={user?.displayName}
          variant="outlined"
        />
        <Button className={styles.logout} onClick={logOut} variant="outlined">Выйти</Button>
      </Box>
    </Card>
  );
};

export default CurrentUser;
