import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';

const Layout: FC = ({ children }) => {
  const user = useTypedSelector((state) => state.user);

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
