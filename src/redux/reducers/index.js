import { combineReducers } from 'redux';
import { default as userReducer } from './user'
import { default as accountsReducer } from './accounts'
import { default as modalReducer } from './modal'
import { default as categoriesReducer } from './categories'

const rootReducer = combineReducers({
  user: userReducer,
  accounts: accountsReducer,
  modal: modalReducer,
  categories: categoriesReducer,
});

export default rootReducer;
