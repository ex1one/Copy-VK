import React, { ChangeEvent, useState } from 'react';
import {
  Alert,
  Avatar, Box, Button, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './auth.module.scss';
import { IAuthorization, IUserData } from './types';

const Auth = () => {
  const {
    register,
    formState: {
      errors,
    },
    reset,
    handleSubmit,
  } = useForm<IAuthorization>({ mode: 'onBlur' });
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  } as IUserData);
  const [error, setError] = useState(null);

  const handleLogin: SubmitHandler<IAuthorization> = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
      })
      .catch((error) => {
        setError(error.message);
      });
    reset();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target.name;
    switch (target) {
      case 'email':
        setUserData({ ...userData, email: event.target.value });
        break;
      case 'password':
        setUserData({ ...userData, password: event.target.value });
        break;
      default:
        return target;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid>
        <Paper className={styles.Paper}>
          <Grid className={styles.Grid}>
            <Avatar className={styles.Avatar}><LockOutlined /></Avatar>
            <h2>Авторизация</h2>
          </Grid>
          <Box className={styles.Box}>
            <TextField
              {...register('email', {
                required: 'Это обязательное поле',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                  message: 'Введите валидный E-mail',
                },
              })}
              name="email"
              onChange={changeHandler}
              className={styles.TextField}
              label="E-mail"
              type="text"
              helperText={errors.email && errors.email.message}
            />
            <TextField
              {...register('password', {
                required: 'Это обязательное поле',
                pattern: {
                  value: /^[a-z0-9_-]{3,16}$/,
                  message: 'Введите валидный пароль',
                },
              })}
              name="password"
              onChange={changeHandler}
              type="password"
              label="Пароль"
              placeholder="Введите пароль"
              helperText={errors.password && errors.password.message}
            />
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
