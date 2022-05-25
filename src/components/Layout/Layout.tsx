import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout: FC = ({ children }) => (
  <div>
    <Header />
    <Grid container spacing={2} marginX={5} marginTop={2}>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
    </Grid>
  </div>
);

export default Layout;
