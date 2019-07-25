import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './reducers';
import './static/css/index.scss';
import './static/css/index.less';

import RouteComponent from './routes/Route';

const history = createHistory();
const middleware = routerMiddleware(history);

export default createHistory({forceRefresh: true});

export const store = createStore( combineReducers, 
    applyMiddleware(thunk, middleware));

const Rout = (
    <Provider store={store}>
        <RouteComponent />
    </Provider>
);

ReactDOM.render(Rout, document.getElementById('root'));
