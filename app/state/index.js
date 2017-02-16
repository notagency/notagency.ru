import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lang from './lang';

const rootReducer = combineReducers({
    data: (state) => state ? state : 0,
    lang,
    routing: routerReducer
});

export default rootReducer;