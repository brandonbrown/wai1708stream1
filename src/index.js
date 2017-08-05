import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import clubsReducer from './core-module/reducers'
import ClubsList from './containers/ClubsList'

let store = createStore(clubsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <ClubsList />
  </Provider>,
  document.getElementById('root')
);
