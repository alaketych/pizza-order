import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from './components/index'

import store from './redux/store'
import { Provider } from 'react-redux'

console.log(store)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);
