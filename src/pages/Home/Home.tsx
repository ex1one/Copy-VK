import React from 'react';
import { Box } from '@mui/material';
import AddNewPost from '../../components/AddNewPost/addNewPost';
import Posts from '../../components/Posts/Posts';

const Home = () => (
  <Box>
    <AddNewPost />
    <Posts />
  </Box>
);

export default Home;
