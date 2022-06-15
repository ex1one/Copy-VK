import React, { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './profile.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import logoTemporary from '../../../public/img/1.jpg';

const Profile = () => {
  const user = useTypedSelector((state) => state.user);
  const [open, setOpen] = useState<boolean>(false);

  const changeClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box className={styles.Box}>
      <div>
        <Avatar
          alt="#"
          className={styles.Avatar}
          src={logoTemporary}
        />
        <h1 className={styles.name}>
          {user?.displayName}
        </h1>
      </div>

      <Box className={styles.content}>
        <p className={styles.paragraph}>
          E-mail -
          {' '}
          {user?.email}
        </p>
        <p className={styles.paragraph}>
          Дата создания аккаунта -
          {' '}
          {user?.metadata.creationTime}
        </p>
      </Box>
      <EditIcon onClick={changeClick} className={styles.edit} />
    </Box>
  );
};

export default Profile;
