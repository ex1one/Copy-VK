import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import firebase from 'firebase/compat/app';
import RootRoutes from './components/RootRoutes/RootRoutes';
import AuthProvider from './providers/AuthProvider';

firebase.initializeApp({
  apiKey: 'AIzaSyBqOSCXyUvfnaGaQwBOXInT_THKo0BKYtE',
  authDomain: 'copy-vk-47063.firebaseapp.com',
  projectId: 'copy-vk-47063',
  storageBucket: 'copy-vk-47063.appspot.com',
  messagingSenderId: '536843072579',
  appId: '1:536843072579:web:742111e802583c1d0190f6',
});

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <AuthProvider>
          <RootRoutes />
        </AuthProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  div,
);
