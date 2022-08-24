import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';
import contacts from './contacts';

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware,
});

export const persistor = persistStore(store);
