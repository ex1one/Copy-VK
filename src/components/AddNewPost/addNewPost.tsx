import React, { useState } from 'react';
import { Alert, Box, TextField } from '@mui/material';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './addNewPost.module.scss';
import formatDate from '../../utilities/formatedDate';
import useAuth from '../../hooks/useAuth';

const AddNewPost = () => {
  const [content, setContent] = useState('');
  const ga = getAuth();
  const [user, loading, error] = useAuthState(ga);
  const db = getFirestore();

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addNewPost = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      addDoc(collection(db, 'posts'), {
        author: user,
        createdAt: formatDate(new Date()),
        content,
      }).then();
      setContent('');
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
