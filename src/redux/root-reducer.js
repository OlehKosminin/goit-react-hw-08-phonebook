import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import fifilterReduser from './filter/filter-slice';
import contactReduser from './contacts/contacts-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactReduser,
  filter: fifilterReduser,
});

export default rootReducer;

// import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from './auth/auth-slice';
// import fifilterReduser from './filter/filter-slice';
// import contactReduser from './contacts/contacts-slice';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactReduser,
//   filter: fifilterReduser,
// });

// export default rootReducer;
