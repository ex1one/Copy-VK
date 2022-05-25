import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home';

const App = () => (
  <>
    <Header />
    <Grid container spacing={2} marginX={5} marginTop={2}>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        <Home />
      </Grid>
    </Grid>
  </>
);

export default App;
