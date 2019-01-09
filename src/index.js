import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById("root"));
serviceWorker.unregister();
