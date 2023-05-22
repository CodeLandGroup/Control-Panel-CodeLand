import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/scroll.css'
import './assets/css/reset.css';
import { Provider } from 'react-redux';
import store from './Reduxe/Store';
import serviceWorkerDev from './ServiceWorkerDev';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
 
  document.getElementById('root')
);

serviceWorkerDev();