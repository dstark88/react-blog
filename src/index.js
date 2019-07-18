import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log("request: ", request);
    // can edit the request config here
    return request; //this way you don't block the request
}, error => {
    console.log("error: ", error);
    return Promise.reject(error);
});

axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //don't need to do this, it's the default anyway, just showing

axios.interceptors.response.use(response => {
    console.log("response: ", response);
    // can edit the response config here
    return response; //this way you don't block the response
}, error => {
    console.log("error: ", error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
