import React, { useState } from 'react';
import {
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './auth.module.scss';
import { IAuth } from './types';
import AuthValidation from '../../schemes/AuthValidation';

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

  const ga = getAuth();
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(ga);
  const [updateProfile] = useUpdateProfile(ga);

  const handleLogin: SubmitHandler<IAuth> = () => {
    createUserWithEmailAndPassword(userData.email, userData.password)
      .then(() => updateProfile({ displayName: userData.name })
        .catch((e) => {

        }));
    navigate('/');
    reset();
  };
  console.log(error);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      {/* {error && <Alert severity="error">{error}</Alert>} */}
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
            <Link className={styles.link} to="/login">Войти</Link>
            {loading && <CircularProgress color="success" />}
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Auth;
