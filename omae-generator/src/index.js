import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import OmaeReducer from './stores/omaeReducer';
import Provider from 'react-redux/lib/components/Provider';

const store = createStore(OmaeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
