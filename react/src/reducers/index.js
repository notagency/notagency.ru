import { combineReducers } from 'redux';
import GlobalsReducer from './GlobalsReducer';
import LangReducer from './LangReducer';


const rootReducer = combineReducers({
  globals: GlobalsReducer,
  lang: LangReducer
});

export default rootReducer;