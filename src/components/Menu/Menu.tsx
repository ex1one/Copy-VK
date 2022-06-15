import React from 'react';
import {
  Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menu, { IMenu } from '../../constants/menu';
import styles from './menu.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';

const Menu = () => {
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.user);

  const clickHandler = (item: IMenu) => {
    if (item.link !== '/') {
      navigate(`${item.link}/${user?.uid}`);
    } else {
      navigate(item.link);
    }
  };

  return (
    <Card
      variant="outlined"
      className={styles.Card}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton onClick={() => clickHandler(item)}>
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
