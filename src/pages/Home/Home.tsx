import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import AddNewPost from '../../components/AddNewPost/addNewPost';
import { IPosts } from '../../api/posts/types';
import Posts from '../../components/Posts/Posts';
import fetchPosts from '../../api/posts';

const Home: FC = () => {
  const [posts, setPosts] = useState<IPosts[]>(fetchPosts);
  return (
    <Box>
      <AddNewPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;
