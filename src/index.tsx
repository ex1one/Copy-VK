import React from 'react';
import { render } from 'react-dom';
import App from './App';

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  div,
);
