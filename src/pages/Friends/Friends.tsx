import React from 'react';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './friends.module.scss';
import fetchUsers from '../../api/users';

const Friends = () => (
  <Box className={styles.Box}>
    <h1>Friends</h1>
    {fetchUsers.map((user) => (
      <Box key={user.uid}>
        <Box className={styles.user}>
          <Avatar alt="" src={user.avatar} />
          <p>{user.displayName}</p>
          {user.isInNetwork && <p>В сети</p>}
          <Link to={`/messages/${user.uid}`}>Написать сообщение</Link>
        </Box>
      </Box>
    ))}
  </Box>
);

export default Friends;
