import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

Axios.defaults.baseURL = "http://127.0.0.1:3001";

if (localStorage.getItem('token')){
    Axios.defaults.headers['auth'] = localStorage.getItem('token');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
