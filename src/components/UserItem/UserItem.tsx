import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { QuestionAnswer } from '@mui/icons-material';
import styles from './userItem.module.scss';
import logo from '../../../public/img/logo.jpg';
import { IUser } from '../../api/users/types';

const users: IUser[] = [
  {
    id: 'dada',
    avatar: logo,
    name: 'Ilya Rogachev',
    isInNetwork: false,
  },
  {
    id: '3131',
    avatar: logo,
    name: 'Ilya Gorbachev',
    isInNetwork: true,
  },
];

const UserItem: FC = () => {
  const history = useNavigate();

  return (
    <Card
      variant="outlined"
      className={styles.Card}
    >
      {users.map((user) => (
        <Link
          key={user.id}
          className={styles.Link}
          to={`/profile${user.id}`}
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
export default UserItem;