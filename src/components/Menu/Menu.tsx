import React from 'react';
import {
  Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menu from '../../constants/menu';

const Menu = () => {
  const history = useNavigate();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: '#F1F7FA',
        border: 'none',
        borderRadius: 3,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton onClick={() => history(item.link)}>
              <ListItemIcon sx={{ minWidth: '40px' }}>
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
