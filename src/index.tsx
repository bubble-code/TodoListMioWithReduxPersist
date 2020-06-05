import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './container/App';
import './assets/base.css';
import {store, persistor} from './Store/Store'
import 'antd/dist/antd.css'

ReactDOM.render(
    <App  store={store} storePersistor={persistor}/>,
  document.getElementById('root')
);
 
