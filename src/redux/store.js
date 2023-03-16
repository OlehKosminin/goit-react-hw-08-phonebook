import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import rootReduser from './root-reducer';

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';

// import rootReduser from './root-reducer';

// export const store = configureStore({
//   reducer: rootReduser,
// });

// export default store;