/* global __DEVMODE__, document */
/* eslint global-require: 0 */

import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createRoutes from './routes';
import reducers from './state';
import DevTools from './components/DevTools';

const initialState = JSON.parse(document.getElementById('app').getAttribute('data-state'));

let store;
if (__DEVMODE__) {
    const logger = createLogger({ predicate:
        (getState, action) => action.type !== 'EFFECT_TRIGGERED' &&
                              action.type !== 'EFFECT_RESOLVED' });
    const enhance = compose(applyMiddleware(logger), DevTools.instrument());

    store = createStore(reducers, initialState, enhance);
} else {
    store = createStore(reducers, initialState);
}

const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(browserHistory);

let rootElements;
if (__DEVMODE__) {
    rootElements = (
        <Provider store={store}>
            <Router history={history}>
                {routes}
                <DevTools />
            </Router>
        </Provider>
    );
} else {
    rootElements = (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );
}

render(rootElements, document.getElementById('app'));
