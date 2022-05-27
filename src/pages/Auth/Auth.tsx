import React, { useEffect, useState } from 'react';
import {
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import styles from './auth.module.scss';

interface IUserData {
  email: string;
  password: string;
}

const Auth = () => {
  const {} = useForm();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <Grid>
        <Paper className={styles.Paper}>
          <Grid className={styles.Grid}>
            <Avatar className={styles.Avatar}><LockOutlined /></Avatar>
            <h2>Авторизация</h2>
          </Grid>
          <Box className={styles.Box}>
            <TextField className={styles.TextField} label="E-mail" placeholder="Введите E-mail" />
            <TextField label="Пароль" placeholder="Введите пароль" />
          </Box>
          <Box className={styles.insideBox}>
            <Button
              className={styles.Button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Войти
            </Button>
            <Button
              className={styles.Button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Регистрация
            </Button>
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Auth;
