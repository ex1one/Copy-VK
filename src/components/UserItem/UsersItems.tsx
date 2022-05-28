import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { QuestionAnswer } from '@mui/icons-material';
import styles from './userItem.module.scss';
import users from '../../api/users';

const UsersItems: FC = () => {
  const history = useNavigate();

  return (
    <Card
      variant="outlined"
      className={styles.Card}
    >
      {users.map((user) => (
        <Link
          key={user._id}
          className={styles.Link}
          to={`/profile/${user._id}`}
        >
          <Box className={styles.Box}>
            <Avatar
              alt="Remy Sharp"
              className={styles.Avatar}
              src={user.avatar}
            />
            {user.isInNetwork && <Box className={styles.insideBox} />}
          </Box>
          <span className={styles.name}>{user.name}</span>
        </Link>
      ))}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history('/messages')}>
            <ListItemIcon className={styles.ListItemIcon}>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};
export default UsersItems;
