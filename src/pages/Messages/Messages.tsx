import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import {
  Alert, Avatar,
  Divider,
  Fab,
  Grid, List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../hooks/useAuth';
import { IMessage } from './types';
import formatDate from '../../utilities/formatedDate';
import styles from './messages.module.scss';

const Messages = () => {
  const { db, user } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [message, setMessage] = useState('');

  const addMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (user) {
      try {
        addDoc(collection(db, 'messages'), {
          author: user,
          createdAt: formatDate(new Date()),
          message,
        }).then();
        setMessage('');
      } catch (e) {
        if (e instanceof Error) setError(e);
      }
    }
  };

  useEffect(() => {
    const unSub = onSnapshot(collection(db, 'posts'), (doc) => {
      doc.forEach((d) => {
        const post = d.data() as IMessage;
        setMessages((prevState) => [post, ...prevState]);
      });
    });
    return () => {
      unSub();
    };
  }, []);
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">Сообщения</Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={styles.chatSection}>
        <Grid item xs={12}>
          <List className={styles.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'right' }} primary="Hey man, What's up ?" />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'right' }} secondary="09:30" />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'left' }} primary="Hey, Iam Good! What about you ?" />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'left' }} />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'right' }} primary />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText sx={{ alignItem: 'right' }} />
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid className={styles.message} container>
            <Grid item xs={11}>
              <TextField label="Напишите сообщение..." fullWidth />
            </Grid>
            <Grid xs={1} className={styles.send}>
              <Fab color="primary" aria-label="add"><SendIcon /></Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Messages;
