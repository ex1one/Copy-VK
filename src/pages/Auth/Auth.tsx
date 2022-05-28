import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Alert,
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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

  const ga = getAuth();
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(ga);

  const handleLogin: SubmitHandler<IAuthorization> = () => {
    signInWithEmailAndPassword(userData.email, userData.password).then();
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

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

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
              value={userData.email}
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
              value={userData.password}
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
            <Link className={styles.link} to="/reg">Регистрация</Link>
            {loading && <CircularProgress color="success" />}
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Auth;
