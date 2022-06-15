import React, { useState } from 'react';
import { Alert, Box, TextField } from '@mui/material';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import styles from './addNewPost.module.scss';
import formatDate from '../../utilities/formatedDate';
import useTypedSelector from '../../hooks/useTypedSelector';

const AddNewPost = () => {
  const db = getFirestore();
  const [content, setContent] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const user = useTypedSelector((state) => state.user);

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addNewPost = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      addDoc(collection(db, 'posts'), {
        author: user?.displayName,
        avatar: user?.photoURL,
        createdAt: formatDate(new Date()),
        content,
      })
        .catch((e) => {
          setError(e);
        });
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
