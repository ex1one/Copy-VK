import React, { useEffect, useState } from 'react';
import {
  Alert, Avatar, Box, CircularProgress, ImageList, ImageListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { collection, getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import styles from './posts.module.scss';
import { IPosts } from '../../api/posts/types';
import logoTemporary from '../../../public/img/1.jpg';

const Posts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const db = getFirestore();
  const [snapshot, loading, error] = useCollection(collection(db, 'posts'));

  useEffect(() => {
    const array:IPosts[] = [];

    snapshot?.docs.forEach((d) => {
      const post = d.data() as IPosts;
      array.push(post);
    });
    setPosts(array);
  }, [snapshot]);

  return (
    <div>
      {loading && <CircularProgress color="success" />}
      {error && <Alert severity="error">{error}</Alert>}

      {posts && posts.map((post) => (
        <Box key={post.createdAt} className={styles.Box}>
          <Link
            key={post.author.uid}
            className={styles.Link}
            to={`/profile/${post.author.uid}`}
          >
            <Box className={styles.insideBox}>
              <Avatar
                alt="#"
                className={styles.Avatar}
                src={logoTemporary}
              />
            </Box>
            <Box>
              <div className={styles.name}>{post.author.displayName}</div>
              <div className={styles.createdAt}>{post?.createdAt}</div>
            </Box>
          </Link>

          <p>{post.content}</p>

          {post?.images?.length && (
          <ImageList variant="masonry" gap={8} cols={3} rowHeight={164}>
            {post.images.map((image) => (
              <ImageListItem key={image}>
                <img src={image} alt="#" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
          )}
        </Box>
      ))}
    </div>
  );
};
export default Posts;
