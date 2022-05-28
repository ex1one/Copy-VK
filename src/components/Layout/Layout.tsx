import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.module.scss';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Layout: FC = ({ children }) => {
  const ga = getAuth();
  const [user, loading, error] = useAuthState(ga);

  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user
        && (
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        )}
        <Grid item md={user ? 10 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
export default Layout;
