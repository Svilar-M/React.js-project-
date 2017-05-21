import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {browserHistory} from 'react-router';
import Routes from './routes/indexPageNav';

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);