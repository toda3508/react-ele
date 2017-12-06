import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import {reducer} from './reducer'
import './index.css';
import App from './app.jsx';   
import registerServiceWorker from './registerServiceWorker';

let  store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
