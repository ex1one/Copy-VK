import React, { useState } from 'react';
import {
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Cookies from 'js-cookie';
import styles from './auth.module.scss';
import { IAuth } from './types';
import AuthValidation from '../../schemes/AuthValidation';
import { setUser } from '../../store/auth/user';

const Auth = () => {
  const {
    register,
    formState: {
      errors,
    },
    reset,
    handleSubmit,
  } = useForm<IAuth>(
    {
      resolver: yupResolver(AuthValidation),
      mode: 'onBlur',
    },
  );

  const [userData, setUserData] = useState<IAuth>({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const ga = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin: SubmitHandler<IAuth> = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(ga, userData.email, userData.password)
      .then(({ user }) => {
        dispatch(setUser({
          displayName: user.displayName,
          id: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        }));
        user.getIdToken().then((response) => Cookies.set('token', response));
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
    navigate('/');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Grid>
        <Paper className={styles.Paper}>
          <Grid className={styles.Grid}>
            <Avatar className={styles.Avatar}><LockOutlined /></Avatar>
            <h2>Регистрация</h2>
          </Grid>
          <Box className={styles.Box}>
            <TextField
              {...register('name', {
                onChange: (event) => {
                  setUserData({
                    ...userData,
                    name: event.target.value,
                  });
                },
              })}
              error={!!errors.name?.message}
              className={styles.TextField}
              label="Имя пользователя"
              type="text"
              helperText={errors.name && errors.name.message}
            />
            <TextField
              {...register('email', {
                onChange: (event) => {
                  setUserData({
                    ...userData,
                    email: event.target.value,
                  });
                },
              })}
              error={!!errors.email?.message}
              className={styles.TextField}
              label="E-mail"
              type="text"
              helperText={errors.email && errors.email.message}
            />
            <TextField
              {...register('password', {
                onChange: (event) => {
                  setUserData({
                    ...userData,
                    password: event.target.value,
                  });
                },
              })}
              error={!!errors.password?.message}
              type="password"
              label="Пароль"
              placeholder="Введите пароль"
              helperText={errors.password && errors.password.message}
            />
          </Box>
          <Box className={styles.insideBox}>
            <Button
              className={styles.Button}
              color="success"
              variant="contained"
              type="submit"
            >
              Регистрация
            </Button>
            {isLoading && <CircularProgress />}
            <Link className={styles.link} to="/login">Войти</Link>
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Auth;
