import { combineReducers } from 'redux';
import { default as userReducer } from './user'
import { default as accountsReducer } from './accounts'
import { default as modalReducer } from './modal'

const rootReducer = combineReducers({
  user: userReducer,
  accounts: accountsReducer,
  modal: modalReducer,
});

export default rootReducer;
