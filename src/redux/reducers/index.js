import { combineReducers } from 'redux';
import { default as userReducer } from './user'

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
