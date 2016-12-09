import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createRoutes from 'routes';

const initialState = JSON.parse(document.getElementById('app').getAttribute('data-state'));
const store = createStore(combineReducers({data: (state) => {return state ? state : 0}, routing: routerReducer}), initialState);

const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(browserHistory);

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, 
    document.getElementById('app')
);