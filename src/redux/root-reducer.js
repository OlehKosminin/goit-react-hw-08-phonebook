import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import fifilterReduser from './filter/filter-slice';
import contactReduser from './contacts/contacts-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactReduser,
  filter: fifilterReduser,
});

export default rootReducer;
