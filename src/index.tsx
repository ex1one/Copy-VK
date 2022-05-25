import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EventRoutes from './components/EventRoutes/EventRoutes';

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
  <BrowserRouter>
    <React.StrictMode>
      <EventRoutes />
    </React.StrictMode>
  </BrowserRouter>,
  div,
);
