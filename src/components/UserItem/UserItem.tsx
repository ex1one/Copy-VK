import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar, Box, Card,
} from '@mui/material';
import styles from './userItem.module.scss';
import logo from '../../../public/img/logo.jpg';

const user = [
  {
    avatar: da,
  },
];

const UserItem: FC = () => {
  const props = styles;
  return (
    <Card
      variant="outlined"
      className={styles.Card}
    >
      <Link
        className={styles.Link}
        to="/profile"
      >
        <Box>
          <Avatar
            alt="Remy Sharp"
            className={styles.Avatar}
            src={logo}
          />
          <Box className={styles.insideBox} />
        </Box>
        <span className={styles.name}>Илья Рогачев</span>
      </Link>
    </Card>
  );
};
export default UserItem;
