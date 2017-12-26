import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './create-store'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
const store = createStore();

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();