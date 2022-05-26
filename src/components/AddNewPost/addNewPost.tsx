import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';
import styles from './addNewPost.module.scss';
import { IPost } from '../../api/posts/types';
import { TypeSetState } from '../../api/users/types';

interface IAddNewPost {
  setPosts: TypeSetState<IPost[]>
}

const AddNewPost: FC <IAddNewPost> = ({ setPosts }) => {
  console.log('dada');
  return (
    <Box className={styles.Box}>
      <TextField
        InputProps={{
          sx: { border: 'none', borderRadius: '25px', backgroundColor: '#f9f9f9' },
        }}
        sx={{ width: '100%' }}
        label="Что хотите рассказать нового?"
        variant="outlined"
      />
    </Box>
  );
};

export default AddNewPost;
