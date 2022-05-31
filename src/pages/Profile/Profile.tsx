import React, { useState } from 'react';
import {
  Alert, Avatar, Box, CircularProgress,
} from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import EditIcon from '@mui/icons-material/Edit';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDownloadURL, useUploadFile } from 'react-firebase-hooks/storage';
import { ref, getStorage } from 'firebase/storage';
import styles from './profile.module.scss';

const Profile = () => {
  const ga = getAuth();
  const storage = getStorage();
  const [user, loading, error] = useAuthState(ga);
  const [open, setOpen] = useState<boolean>(false);
  const [uploadFile, uploading, snapshot] = useUploadFile();
  const [avatar] = useDownloadURL(ref(storage, `${user?.uid}.png`));
  const refFile = ref(storage, `${user?.uid}.png`);

  const changeClick = () => {
    setOpen((prevState) => !prevState);
  };

  const upload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventFile = event.target.files ? event.target.files[0] : null;
    if (eventFile) {
      uploadFile(refFile, eventFile);
    }
  };

  return (
    <Box className={styles.Box}>
      {loading && <CircularProgress color="success" />}
      {error && <Alert severity="error">{error}</Alert>}
      <div>
        <Avatar
          alt="#"
          className={styles.Avatar}
          src={avatar}
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
        <label className={styles.upload} htmlFor="avatar">
          Загрузить аватарку
          <div style={{ paddingTop: '10px' }}>
            <input
              onChange={upload}
              id="avatar"
              type="file"
            />
          </div>
          <AddAPhotoIcon className={styles.AddAPhotoIcon} />
        </label>
      </Box>
      <EditIcon onClick={changeClick} className={styles.edit} />
      {/* {open && <EditModal open={open} setOpen={setOpen} />} */}
    </Box>
  );
};

export default Profile;
