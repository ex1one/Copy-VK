import React, { useEffect, useState } from 'react';
import {
  addDoc, collection, getFirestore, onSnapshot,
} from 'firebase/firestore';
import {
  Alert, Avatar,
  Divider,
  Fab,
  Grid, List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import formatDate from '../../utilities/formatedDate';
import styles from './messages.module.scss';
import { IMessage } from './types';

const Messages = () => {
  const ga = getAuth();
  const db = getFirestore();

  const [user, loading, error] = useAuthState(ga);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('');

  const addMessage = () => {
    addDoc(collection(db, 'messages'), {
      user,
      createdAt: formatDate(new Date()),
      message,
    }).then();
    setMessage('');
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addMessage();
    }
  };

  useEffect(() => {
    const unSub = onSnapshot(collection(db, 'messages'), (doc) => {
      const array:IMessage[] = [];
      doc.forEach((d) => {
        const post = d.data() as IMessage;
        array.push(post);
      });
      setMessages(array);
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
          <Typography variant="h5" className={styles.title}>Сообщения</Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={styles.chatSection}>
        <Grid item xs={12}>
          <List className={styles.messageArea}>
            {messages.map((msg) => (
              <>
                <ListItem key={msg.createdAt}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText sx={msg.user._id === user?.uid ? { color: '#19762d' } : {}} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} />
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem key={msg.createdAt}>
                  <Grid container sx={msg.user._id === user?.uid ? { textAlign: 'right' } : {}}>
                    <Grid display="flex" justifyContent={msg.user._id === user?.uid ? 'flex-end' : 'flex-start'} item xs={12}>
                      <Avatar src={msg.user.avatar} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} secondary={msg.user.name} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} primary={msg.message} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} secondary={msg.createdAt} />
                    </Grid>
                  </Grid>
                </ListItem>
              </>
            ))}
          </List>
          <Divider />
          <Grid className={styles.message} container>
            <Grid item xs={11}>
              <TextField
                onKeyPress={changeHandler}
                onChange={(event) => setMessage(event.target.value)}
                label="Напишите сообщение..."
                fullWidth
                value={message}
              />
            </Grid>
            <Grid item xs={1} className={styles.send}>
              <Fab onClick={addMessage} color="primary">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Messages;
