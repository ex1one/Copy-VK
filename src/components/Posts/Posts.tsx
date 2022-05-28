import React, { useEffect, useState } from 'react';
import {
  Avatar, Box, ImageList, ImageListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import styles from './posts.module.scss';
import { IPosts } from '../../api/posts/types';

const Posts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const db = getFirestore();

  useEffect(() => {
    const unSub = onSnapshot(collection(db, 'posts'), (doc) => {
      doc.forEach((d) => {
        const post = d.data() as IPosts;
        setPosts((prevState) => [post, ...prevState]);
      });
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Box key={post.createdAt} className={styles.Box}>
          <Link
            key={post.author._id}
            className={styles.Link}
            to={`/profile/${post.author._id}`}
          >
            <Box className={styles.insideBox}>
              <Avatar
                alt="#"
                className={styles.Avatar}
                src={post.author.avatar}
              />
            </Box>
            <Box>
              <div className={styles.name}>{post.author.name}</div>
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
