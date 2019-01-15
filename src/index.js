import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger(); // This is a middleware

const rootReducer = combineReducers({ searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById("root"));
serviceWorker.register();
