import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Alert,
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';
import { IAuthorization, IUserData } from './types';
import useAuth from '../../hooks/useAuth';

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
    name: '',
  } as IUserData);

  const [error, setError] = useState(null);
  const [isRegForm, setIsRegForm] = useState(false);
  const [isLoading, isSetLoading] = useState(false);
  const { ga, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<IAuthorization> = () => {
    isSetLoading(true);
    if (isRegForm) {
      createUserWithEmailAndPassword(ga, userData.email, userData.password)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: userData.name,
          }).then();
        })
        .catch((error) => {
          setError(error.message);
        });
      isSetLoading(false);
    } else {
      signInWithEmailAndPassword(ga, userData.email, userData.password)
        .then()
        .catch((error) => {
          setError(error.message);
        });
      isSetLoading(false);
    }
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
      case 'name':
        setUserData({ ...userData, name: event.target.value });
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
              {...register('name', {
                required: 'Это обязательное поле',
                pattern: {
                  value: /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                  message: 'Введите валидное имя пользователя',
                },
              })}
              name="name"
              onChange={changeHandler}
              className={styles.TextField}
              label="Имя пользователя"
              type="text"
              helperText={errors.name && errors.name.message}
            />
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
              onClick={() => setIsRegForm(false)}
              className={styles.Button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Войти
            </Button>
            <Button
              onClick={() => setIsRegForm(true)}
              className={styles.Button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Регистрация
            </Button>
            {isLoading && <CircularProgress color="success" />}
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Auth;
