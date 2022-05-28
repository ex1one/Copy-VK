import React, { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { TypeSetState } from '../../api/users/types';
import styles from './addNewPost.module.scss';
import { IPosts } from '../../api/posts/types';
import formatDate from '../../utilities/formatedDate';
import useAuth from '../../hooks/useAuth';

interface IAddNewPost {
  setPosts: TypeSetState<IPosts[]>
}

const AddNewPost: FC <IAddNewPost> = ({ setPosts }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [content, setContent] = useState('');
  const { user } = useAuth();

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addNewPost = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && user) {
      setPosts((prev) => [
        {
          author: user,
          content,
          createdAt: formatDate(date),
        },
        ...prev,
      ]);
      setContent('');
    }
  };

  return (
    <Box className={styles.Box}>
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
