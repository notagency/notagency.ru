import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from 'routes';
import reducers from './state';
import DevTools from 'components/DevTools';

const initialState = JSON.parse(document.getElementById('app').getAttribute('data-state'));

let store;
if (__DEVMODE__) {
    store = createStore(reducers, initialState, DevTools.instrument());
}
else {
    store = createStore(reducers, initialState);    
}

const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(browserHistory);

let rootElements;
if (__DEVMODE__) {
    rootElements = (
        <Provider store={store}>
            <div>
                <Router history={history}>
                    {routes}
                </Router>
                <DevTools />
            </div>
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