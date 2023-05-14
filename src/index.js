import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/scroll.css'
import './assets/css/reset.css';
import { Provider } from 'react-redux';
import store from './Reduxe/Store';
import serviceWorkerDev from './ServiceWorkerDev';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorkerDev();