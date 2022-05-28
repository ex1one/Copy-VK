import React, { FC } from 'react';
import { Box } from '@mui/material';
import AddNewPost from '../../components/AddNewPost/addNewPost';
import Posts from '../../components/Posts/Posts';

const Home: FC = () => (
  <Box>
    <AddNewPost />
    <Posts />
  </Box>
);

export default Home;
