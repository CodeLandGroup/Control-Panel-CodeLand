import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/scroll.css'
import './assets/css/reset.css';
import { Provider } from 'react-redux';
import store from './Reduxe/Store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
