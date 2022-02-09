import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/index.css'
import { Mov } from './Mov';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Mov />

  </React.StrictMode>,
  document.getElementById('root')
);
