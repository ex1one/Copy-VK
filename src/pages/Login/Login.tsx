import React, { useState } from 'react';
import {
  Avatar, Box, Button, CircularProgress, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import styles from '../Auth/auth.module.scss';
import { ILogin } from './types';
import LoginValidation from '../../schemes/LoginValidation';

const Login = () => {
  const {
    register,
    formState: {
      errors,
    },
    reset,
    handleSubmit,
  } = useForm<ILogin>(
    {
      resolver: yupResolver(LoginValidation),
      mode: 'onBlur',
    },
  );

  const [userData, setUserData] = useState<ILogin>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const ga = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin: SubmitHandler<ILogin> = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(ga, userData.email, userData.password)
      .then(({ user }) => {
        dispatch(auth({
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          refreshToken: user.refreshToken,
          accessToken: user.accessToken,
        }));
        Cookies.set('refreshToken', user.refreshToken);
      })
      .catch((e) => {
        alert(e?.message);
      })
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
            <h2>Войти</h2>
          </Grid>
          <Box className={styles.Box}>
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
              color="primary"
              variant="contained"
              type="submit"
            >
              Войти
            </Button>
            {isLoading && <CircularProgress />}
            <Link className={styles.link} to="/auth">Регистрация</Link>
          </Box>
        </Paper>
      </Grid>
    </form>
  );
};

export default Login;
