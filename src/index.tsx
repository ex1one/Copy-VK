import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import EventRoutes from './components/EventRoutes/EventRoutes';

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <EventRoutes />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  div,
);
