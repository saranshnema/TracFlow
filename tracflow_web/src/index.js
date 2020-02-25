import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './utils/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import Router from './utils/router';
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";
import combinedReducers from "../src/redux/reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

// const middleware = applyMiddleware(promise(), thunk ,logger);


const store = createStore(combinedReducers);

window.store=store

ReactDOM.render(
    <Provider store={store}>
    <App> 

    </App>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
