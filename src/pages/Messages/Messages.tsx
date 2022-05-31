import React, { useEffect, useState } from 'react';
import {
  addDoc, collection, getFirestore,
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
import { useCollection } from 'react-firebase-hooks/firestore';
import formatDate from '../../utilities/formatedDate';
import styles from './messages.module.scss';
import { IMessage } from './types';

const Messages = () => {
  const ga = getAuth();
  const db = getFirestore();

  const [user] = useAuthState(ga);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('');
  const [snapshot, loading, error] = useCollection(collection(db, 'messages'));

  const addMessage = () => {
    addDoc(collection(db, 'messages'), {
      author: user?.displayName,
      avatar: user?.photoURL,
      uid: user?.uid,
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
    const array:IMessage[] = [];

    snapshot?.docs.forEach((d) => {
      const post = d.data() as IMessage;
      array.push(post);
    });
    setMessages(array);
  }, [snapshot]);

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
            {messages.map((msg, index) => (
              <>
                <ListItem key={1}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText sx={msg.uid === user?.uid ? { textAlign: 'right' } : {}} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} />
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem key={2}>
                  <Grid container sx={msg.uid === user?.uid ? { textAlign: 'right' } : {}}>
                    <Grid display="flex" justifyContent={msg.uid === user?.uid ? 'flex-end' : 'flex-start'} item xs={12}>
                      <Avatar src={msg.avatar} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText sx={{ alignItem: 'right' }} secondary={msg.author} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        sx={msg.uid === user?.uid ? {
                          color: '#1976d2',
                        } : {}}
                        primary={msg.message}
                      />
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
