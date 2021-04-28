import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import All from "./component/All";

ReactDOM.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
