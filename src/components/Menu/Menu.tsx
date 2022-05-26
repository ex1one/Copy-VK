import React from 'react';
import {
  Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menu from '../../constants/menu';
import styles from './menu.module.scss';

const Menu = () => {
  const history = useNavigate();

  return (
    <Card
      variant="outlined"
      className={styles.Card}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton onClick={() => history(item.link)}>
              <ListItemIcon className={styles.ListItemIcon}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Menu;
