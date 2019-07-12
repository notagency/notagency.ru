import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import DevTools from './components/DevTools';
import reducers from './reducers';
import PublicRoute from './PublicRoute';
import CommonLayout from './layouts/CommonLayout';
import MainPage from './pages/Main/';
import WalkingDeadPage from './pages/WalkingDead';
// import { TransitionGroup } from 'react-transition-group';
import history from './history';

const initialState = {};
let store;
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    predicate: (getState, action) => action.type !== 'EFFECT_TRIGGERED' && action.type !== 'EFFECT_RESOLVED'
  });
  const enhance = compose(applyMiddleware(logger), DevTools.instrument());
  store = createStore(reducers, initialState, enhance);
} else {
  store = createStore(reducers, initialState);
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PublicRoute exact path="/" component={CommonLayout} page={MainPage} />
            <PublicRoute exact path="/wd/" component={CommonLayout} page={WalkingDeadPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
