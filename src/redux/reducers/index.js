import { combineReducers } from 'redux';
import { default as userReducer } from './user'
import { default as accountsReducer } from './accounts'
import { default as modalReducer } from './modal'
import { default as categoriesReducer } from './categories'
import { default as accountMembersReducer } from './accountMembers'
import { default as bankAccountReducer } from './bankAccounts'

const rootReducer = combineReducers({
  user: userReducer,
  accounts: accountsReducer,
  modal: modalReducer,
  categories: categoriesReducer,
  accountMembers: accountMembersReducer,
  bankAccounts: bankAccountReducer
});

export default rootReducer;
