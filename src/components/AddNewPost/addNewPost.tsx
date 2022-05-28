import React, { useState } from 'react';
import { Alert, Box, TextField } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import styles from './addNewPost.module.scss';
import formatDate from '../../utilities/formatedDate';
import useAuth from '../../hooks/useAuth';

const AddNewPost = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { user, db } = useAuth();

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addNewPost = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && user) {
      try {
        addDoc(collection(db, 'posts'), {
          author: user,
          createdAt: formatDate(new Date()),
          content,
        }).then();
        setContent('');
      } catch (e) {
        if (e instanceof Error) setError(e);
      }
    }
  };

  return (
    <Box className={styles.Box}>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        InputProps={{ className: styles.InputProps }}
        sx={{ width: '100%' }}
        label="Что хотите рассказать нового?"
        variant="outlined"
        onChange={changeHandler}
        onKeyPress={addNewPost}
        value={content}
      />
    </Box>
  );
};

export default AddNewPost;
