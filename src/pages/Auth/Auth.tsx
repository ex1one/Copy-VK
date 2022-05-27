import React, { useEffect, useState } from 'react';
import {
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.scss';
import { IAuthorization } from './types';

interface IUserData {
  email: string;
  password: string;
}

const Auth = () => {
  const {
    register,
    formState: {
      errors,
    },
    reset,
    handleSubmit,
  } = useForm<IAuthorization>({ mode: 'onBlur' });

  const handleLogin: SubmitHandler<IAuthorization> = (data) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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
